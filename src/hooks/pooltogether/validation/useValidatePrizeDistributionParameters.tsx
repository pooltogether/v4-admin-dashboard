interface IValidatePrizeDistributionResponse {
  status: boolean;
  data: any;
}
interface IValidatePrizeDistributionParameters {
  prizeDistribution: any;
  expectedPrizeDistribution: any;
}

export function useValidatePrizeDistributionParameters({
  prizeDistribution,
  expectedPrizeDistribution,
}: IValidatePrizeDistributionParameters): IValidatePrizeDistributionResponse {}

export default useValidatePrizeDistributionParameters;
