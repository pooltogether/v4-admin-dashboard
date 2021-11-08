import { AppInformationPopover } from '@src/components/App/AppInformationPopover';
import { ContractFunctionCallElement } from '@src/components/Web3/Contracts/ContractFunctionCallElement';
import { WalletAndContractStateButton } from '@src/components/Web3/WalletAndContractStateButton';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { useGetContractDrawBeacon } from '@src/hooks/useGetContractDrawBeacon';
import classNames from 'classnames';

const ExecutionInformation = () => {
  return <div>DrawBeacon:completeDraw</div>;
};

interface DrawBeaconStartDrawButtonProps {
  className?: string;
}

export const DrawBeaconCompleteDrawButton = ({ className }: DrawBeaconStartDrawButtonProps) => {
  const address = useGetContractAddress('DrawBeacon');
  const contract = useGetContractDrawBeacon(address);
  const styleBase = classNames(className, 'DrawBeaconCompleteDrawButton');
  const styleButton = classNames(
    className,
    'btn flex items-center',
    'DrawBeaconCompleteDrawButton'
  );

  return (
    <ContractFunctionCallElement
      className={styleBase}
      contract={contract}
      method="completeDraw"
      component={(props) => (
        <WalletAndContractStateButton
          className={styleButton}
          classNameConnected="btn-blue btn-sm"
          isActive={props.isActive}
          isConnected={props.isConnected}
          address={props.account}
        >
          <span className="">Complete Draw</span>
          <AppInformationPopover className="ml-2 mt-0.5" content={<ExecutionInformation />} />
        </WalletAndContractStateButton>
      )}
    />
  );
};

export default DrawBeaconCompleteDrawButton;
