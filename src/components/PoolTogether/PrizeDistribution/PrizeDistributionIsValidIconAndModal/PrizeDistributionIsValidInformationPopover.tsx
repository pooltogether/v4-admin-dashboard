interface PrizeDistributionIsValidInformationPopoverProps {
  isValid: boolean;
}

export const PrizeDistributionIsValidInformationPopover = ({
  isValid,
}: PrizeDistributionIsValidInformationPopoverProps) => {
  return (
    <div className="max-w-md ml-2">
      <h3 className="font-bold text-lg">PrizeDistribution Parameters Valid</h3>
      <p className="text-sm text-gray-600">
        The PrizeDistribution parameters have been computed locally and compared
        to the production parameters.
      </p>
      <p className="text-sm text-gray-600 mt-2">
        <span className="font-bold">Everything is matching as expected.</span>
      </p>
      <div className="grid grid-cols-2 gap-x-2 mt-3">
        <span className="text-gray-600 block">
          Status:
          <span className="">
            {!!isValid && (
              <span className="text-green-500 font-bold">Valid</span>
            )}{' '}
            {!isValid && (
              <span className="text-red-500 font-bold">Invalid</span>
            )}
          </span>
        </span>
        <div className="text-right"></div>
      </div>
    </div>
  );
};

export default PrizeDistributionIsValidInformationPopover;
