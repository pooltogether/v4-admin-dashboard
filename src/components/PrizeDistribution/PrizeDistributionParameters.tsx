// @ts-nocheck
import React from 'react';

import { JustifyBetween } from '../Layout/Flex/JustifyBetween';
import { TokenBalance } from '../Token/TokenBalance';

export const PrizeDistributionParameters = ({ value }: { value: any }) => {
  if (!value) return null;
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
        <span className="text-sm">Prize:</span>
        <TokenBalance className="text-sm" amount={value.prize} decimals={6} />
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Distributions:</span>
        <div className="">
          <Distributions distributions={value.distributions} />
        </div>
      </JustifyBetween>
    </div>
  );
};

const Distributions = ({ distributions }) => {
  const Dists = !distributions
    ? null
    : distributions.map((dist) => (
        <span className="mx-1">
          <TokenBalance className="text-sm" amount={dist} decimals={9} />,
        </span>
      ));

  return <div className="">[{Dists}]</div>;
};

export default PrizeDistributionParameters;
