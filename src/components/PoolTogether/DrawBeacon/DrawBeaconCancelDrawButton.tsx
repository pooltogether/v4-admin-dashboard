import { AppInformationPopover } from '@src/components/App/AppInformationPopover';
import { ContractFunctionCallElement } from '@src/components/Web3/Contracts/ContractFunctionCallElement';
import { WalletAndContractStateButton } from '@src/components/Web3/WalletAndContractStateButton';
import { useGetContractDrawBeacon } from '@src/hooks/contracts/useGetContractDrawBeacon';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import classNames from 'classnames';

const ExecutionInformation = () => {
  return <div>DrawBeacon:cancelDraw</div>;
};

interface DrawBeaconStartDrawButtonProps {
  className?: string;
}

export const DrawBeaconCancelDrawButton = ({ className }: DrawBeaconStartDrawButtonProps) => {
  const address = useGetContractAddress('DrawBeacon');
  const contract = useGetContractDrawBeacon(address);
  const styleBase = classNames(className, 'DrawBeaconCancelDrawButton');
  return (
    <ContractFunctionCallElement
      className={styleBase}
      contract={contract}
      method="cancelDraw"
      component={(props) => (
        <WalletAndContractStateButton
          className="btn flex items-center"
          classNameConnected="btn-red btn-sm"
          isActive={props.isActive}
          isConnected={props.isConnected}
          address={props.account}
        >
          <span className="">Cancel Draw</span>
          <AppInformationPopover className="ml-2 mt-0.5" content={<ExecutionInformation />} />
        </WalletAndContractStateButton>
      )}
    />
  );
};

export default DrawBeaconCancelDrawButton;
