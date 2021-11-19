// @ts-nocheck
import React from 'react';

import { JustifyBetween } from '@components/Layout/Flex/JustifyBetween';

import { TokenBalance } from '../../Token/TokenBalance';

const Tiers = ({ tiers }) => {
  const Dists = !tiers
    ? null
    : tiers.map((dist, key) => (
        <span key={key} className="mx-1 text-xs break-words">
          {dist},
        </span>
      ));

  return <div className="">[{Dists}]</div>;
};

export const PrizeDistributionParameters = ({ value }: { value: any }) => {
  if (!value) return null;
  console.log(value, 'PrizeDist');
  return (
    <div className="">
      <JustifyBetween>
        <span className="text-sm">DrawId:</span>
        <span className="text-sm"> {value.drawId}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Bitrange:</span>
        <span className="text-sm"> {value.bitRangeSize}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Cardinality:</span>
        <span className="text-sm">{value.matchCardinality}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Bitrange:</span>
        <span className="text-sm"> {value.bitRangeSize}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Max Picks Per User:</span>
        <span className="text-sm"> {value.maxPicksPerUser}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">expiryDuration:</span>
        <span className="text-sm"> {value.expiryDuration}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">endTimestampOffset:</span>
        <span className="text-sm"> {value.endTimestampOffset}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">startTimestampOffset:</span>
        <span className="text-sm"> {value.startTimestampOffset}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Prize:</span>
        <TokenBalance className="text-sm" amount={value.prize} decimals={6} />
      </JustifyBetween>
      <div>
        <span className="block text-sm">Tiers:</span>
        <div className="break-words break-all block">
          <Tiers tiers={value.tiers} />
        </div>
      </div>
    </div>
  );
};

export default PrizeDistributionParameters;
