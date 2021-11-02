// @ts-nocheck
import { useEthers, getChainName } from '@usedapp/core';

interface ChainInformationProps {
  className?: string;
  showChainId?: Boolean;
  showChainName?: Boolean;
}

export const ChainInformation = ({
  className,
  showChainId,
  showChainName,
}: ChainInformationProps) => {
  const { chainId } = useEthers();

  const chainName = getChainName(chainId);

  return (
    <div className={className}>
      {showChainName && <span className="">{chainName}</span>}
      {showChainId && <span className="ml-1">(ID: {chainId})</span>}
    </div>
  );
};

ChainInformation.defaultProps = {
  showChainId: false,
  showChainName: true,
};

export default ChainInformation;
