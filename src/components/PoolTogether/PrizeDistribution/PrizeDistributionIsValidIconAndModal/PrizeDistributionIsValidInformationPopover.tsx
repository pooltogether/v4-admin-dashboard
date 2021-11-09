interface PrizeDistributionIsValidInformationPopoverProps {
  isValid: boolean;
}

export const PrizeDistributionIsValidInformationPopover = ({
  isValid,
}: PrizeDistributionIsValidInformationPopoverProps) => {
  return (
    <div className="max-w-md ml-2">
      <h3 className="font-bold text-lg">Validate PrizeDistribution Parameters</h3>
      <p className="text-sm text-gray-600">
        The PrizeDistribution parameters are compared to the PrizeTierHistory parameters to ensure
        that the PrizeDistribution has been correctly set.
      </p>
      <div className="grid grid-cols-2 gap-x-2 mt-3">
        <span className="text-gray-600 block">
          Status:
          <span className="">
            {!!isValid && <span className="text-green-500 font-bold">Valid</span>}{' '}
            {!isValid && <span className="text-red-500 font-bold">Invalid</span>}
          </span>
        </span>
        <div className="text-right">
          <span className="tag tag-cloud">View PrizeTierHistory</span>
        </div>
      </div>
    </div>
  );
};

export default PrizeDistributionIsValidInformationPopover;
