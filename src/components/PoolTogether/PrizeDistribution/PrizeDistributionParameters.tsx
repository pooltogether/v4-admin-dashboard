import React from 'react';

import { JustifyBetween } from '@src/components/Layout/Flex/JustifyBetween';
import { TokenBalance } from '@src/components/Token/TokenBalance';

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
  return (
    <div className="">
      <JustifyBetween>
        <span className="text-sm">drawId:</span>
        <span className="text-sm"> {value.drawId}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">bitRangeSize:</span>
        <span className="text-sm"> {value.bitRangeSize}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">matchCardinality:</span>
        <span className="text-sm">{value.matchCardinality}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">bitRangeSize:</span>
        <span className="text-sm"> {value.bitRangeSize}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">maxPicksPerUser:</span>
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
