// @ts-nocheck
import React from 'react';

import { JustifyBetween } from '@src/components/Layout/Flex/JustifyBetween';
import { TokenBalance } from '@src/components/Token/TokenBalance';

interface PrizeDistributionParametersProps {
  className?: string;
  classNameLabel?: string;
  classNameValue?: string;
  drawId: any;
  prizeDistribution: any;
}

const TierList = ({ tiers }) => {
  const Dists = !tiers
    ? null
    : tiers.map((tier, idx) => (
        <span key={idx} className="tag tag-cloud mr-2 mt-2">
          {tier}
        </span>
      ));

  return <div className="word-break break-words max-w-full">{Dists}</div>;
};

export const PrizeDistributionParameters = ({
  className,
  classNameLabel,
  classNameValue,
  drawId,
  prizeDistribution,
}: PrizeDistributionParametersProps) => {
  if (!prizeDistribution) return null;

  const styleLabel = classNameLabel;
  const styleValue = classNameValue;

  return (
    <div className="max-w-full">
      <JustifyBetween>
        <span className={styleLabel}>DrawId:</span>
        <span className={styleValue}> {drawId}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className={styleLabel}>Bitrange:</span>
        <span className={styleValue}> {prizeDistribution.bitRangeSize}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className={styleLabel}>Cardinality:</span>
        <span className={styleValue}>{prizeDistribution.matchCardinality}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className={styleLabel}>expiryDuration:</span>
        <span className={styleValue}>{prizeDistribution.expiryDuration}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className={styleLabel}>startTimestampOffset:</span>
        <span className={styleValue}> {prizeDistribution.startTimestampOffset}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className={styleLabel}>endTimestampOffset:</span>
        <span className={styleValue}> {prizeDistribution.endTimestampOffset}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className={styleLabel}>maxPicksPerUser:</span>
        <span className={styleValue}> {prizeDistribution.maxPicksPerUser}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className={styleLabel}>numberOfPicks:</span>
        <span className={styleValue}> {prizeDistribution.numberOfPicks}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className={styleLabel}>Prize:</span>
        <TokenBalance className={styleValue} amount={prizeDistribution.prize} decimals={6} />
      </JustifyBetween>
      <div>
        <span className={styleLabel}>Tiers:</span>
        <TierList tiers={prizeDistribution.tiers} />
      </div>
    </div>
  );
};

export default PrizeDistributionParameters;
