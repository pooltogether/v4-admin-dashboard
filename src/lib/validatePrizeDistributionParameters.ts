interface IValidatePrizeDistributionParameters {
  prizeDistribution: any;
  expectedPrizeDistribution: any;
}

export function validatePrizeDistributionParameters({
  prizeDistribution,
  expectedPrizeDistribution,
}: IValidatePrizeDistributionParameters): boolean {
  return !!prizeDistribution && !!expectedPrizeDistribution;
}

export default validatePrizeDistributionParameters;
