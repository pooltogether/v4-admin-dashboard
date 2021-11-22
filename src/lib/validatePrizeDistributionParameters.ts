interface IValidatePrizeDistributionResponse {
  status: boolean;
  data: any;
}
interface IValidatePrizeDistributionParameters {
  prizeDistribution: any;
  expectedPrizeDistribution: any;
}

export function validatePrizeDistributionParameters({
  prizeDistribution,
  expectedPrizeDistribution,
}: IValidatePrizeDistributionParameters): boolean {
  return true;
}

export default validatePrizeDistributionParameters;
