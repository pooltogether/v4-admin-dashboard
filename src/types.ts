import { Interface } from '@ethersproject/abi';
import { BigNumber } from 'ethers';

export interface IValueBigNumber {
  value: BigNumber;
}

export interface IPrizeDistributionHistoryCurrentTable {
  settings: any;
}

export interface ContractCall {
  abi?: Interface;
  address?: string;
  method?: string;
  args?: any[];
}

export interface Draw {
  drawId: number;
  beaconPeriodSeconds: number;
  timestamp: number;
  getBeaconPeriodSeconds: Function;
}

export interface PrizeDistribution {
  bitRangeSize: any;
  matchCardinality: any;
  startTimestampOffset: any;
  endTimestampOffset: any;
  maxPicksPerUser: any;
  expiryDuration: any;
  numberOfPicks: any;
  tiers: any[];
  prize: any[];
}
