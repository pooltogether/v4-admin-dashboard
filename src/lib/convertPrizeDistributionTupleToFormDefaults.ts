export function convertPrizeDistributionTupleToFormDefaults(prizeDistributionTuple: any) {
  if (!prizeDistributionTuple) return {};
  return {
    bitRangeSize: prizeDistributionTuple.bitRangeSize,
    endTimestampOffset: prizeDistributionTuple.endTimestampOffset,
    startTimestampOffset: prizeDistributionTuple.startTimestampOffset,
    expiryDuration: prizeDistributionTuple.expiryDuration,
    matchCardinality: prizeDistributionTuple.matchCardinality,
    maxPicksPerUser: prizeDistributionTuple.maxPicksPerUser,
    numberOfPicks: prizeDistributionTuple.numberOfPicks.toString(),
    prize: prizeDistributionTuple.prize.toString(),
    tiers: prizeDistributionTuple.tiers,
  };
}

export default convertPrizeDistributionTupleToFormDefaults;
