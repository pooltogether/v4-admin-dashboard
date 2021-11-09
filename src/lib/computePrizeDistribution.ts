import { Contract } from '@ethersproject/contracts';
import { Draw } from '@src/types';
import { ethers } from 'ethers';

import { calculatePicks } from './calculatePicks';
import { computeCardinality } from './computeCardinality';

const debug = require('debug')('pt-autotask');

interface IPrizeDistribution {
  bitRangeSize: any;
  matchCardinality: any;
  tiers: any;
  maxPicksPerUser: any;
  numberOfPicks: any;
  expiryDuration: any;
  startTimestampOffset: any;
  prize: any;
  endTimestampOffset: any;
}

export async function computePrizeDistribution(
  draw: Draw,
  prizeTierHistory?: Contract,
  ticketsToCalculate?: Contract,
  otherTickets?: Contract
): Promise<IPrizeDistribution | undefined> {
  debug('entered');
  if (!draw || !prizeTierHistory || !ticketsToCalculate || !otherTickets) return undefined;
  const prizeTier = await prizeTierHistory.getPrizeTier(draw.drawId);

  const beaconPeriod = draw.beaconPeriodSeconds;
  const startTimestampOffset = beaconPeriod;

  const decimals = await ticketsToCalculate.decimals();
  // console.log(decimals, 'decimalsdecimalsdecimals');

  const { endTimestampOffset } = prizeTier;
  // console.log(draw, endTimestampOffset);
  const startTime = draw.timestamp - startTimestampOffset;
  const endTime = draw.timestamp;

  // console.log(endTime, 'endTimeendTime');

  const ticketAverage = await ticketsToCalculate.getAverageTotalSuppliesBetween(
    [startTime],
    [endTime]
  );
  const otherTicketAverage = await otherTickets.getAverageTotalSuppliesBetween(
    [startTime],
    [endTime]
  );
  debug('ticketAverage: ', ticketAverage);
  debug('otherTicketAverage: ', otherTicketAverage);

  const combinedTotalSupply = ticketAverage[0].add(otherTicketAverage[0]);
  const matchCardinality = computeCardinality(
    prizeTier.bitRangeSize,
    combinedTotalSupply,
    decimals
  );
  const { expiryDuration } = prizeTier;
  debug(`cardinality is ${matchCardinality}`);

  debug(`total supply (combined): ${ethers.utils.formatUnits(combinedTotalSupply, decimals)}`);
  debug(`total number of picks: ${(2 ** prizeTier.bitRangeSize) ** matchCardinality}`);

  let numberOfPicks = 0;
  if (combinedTotalSupply.gt('0')) {
    numberOfPicks = await calculatePicks(
      prizeTier.bitRangeSize,
      matchCardinality,
      startTime,
      endTime,
      ticketsToCalculate,
      otherTickets
    );
  }

  debug(`number of picks is ${numberOfPicks}`);

  const prizeDistribution: IPrizeDistribution = {
    bitRangeSize: prizeTier.bitRangeSize,
    matchCardinality,
    tiers: prizeTier.tiers,
    maxPicksPerUser: prizeTier.maxPicksPerUser,
    expiryDuration,
    numberOfPicks,
    startTimestampOffset,
    prize: prizeTier.prize,
    endTimestampOffset,
  };

  debug(`prizeDistribution: `, prizeDistribution);

  return prizeDistribution;
}

export default computePrizeDistribution;
