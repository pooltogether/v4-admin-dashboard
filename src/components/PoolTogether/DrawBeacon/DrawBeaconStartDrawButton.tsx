import { AppInformationPopover } from '@src/components/App/AppInformationPopover';
import { ContractFunctionCallElement } from '@src/components/Web3/Contracts/ContractFunctionCallElement';
import { WalletAndContractStateButton } from '@src/components/Web3/WalletAndContractStateButton';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { useGetContractDrawBeacon } from '@src/hooks/useGetContractDrawBeacon';
import classNames from 'classnames';

const ExecutionInformation = () => {
  return <div>DrawBeacon:startDraw</div>;
};

interface DrawBeaconStartDrawButtonProps {
  className?: string;
}

export const DrawBeaconStartDrawButton = ({ className }: DrawBeaconStartDrawButtonProps) => {
  const address = useGetContractAddress('DrawBeacon');
  const contract = useGetContractDrawBeacon(address);
  const styleBase = classNames(className, 'DrawBeaconStartDrawButton');
  return (
    <ContractFunctionCallElement
      className={styleBase}
      contract={contract}
      method="startDraw"
      component={(props) => (
        <WalletAndContractStateButton
          className="btn flex items-center"
          classNameConnected="btn-green btn-sm"
          isActive={props.isActive}
          isConnected={props.isConnected}
          address={props.account}
        >
          <span className="">Start Draw</span>
          <AppInformationPopover className="ml-2 mt-0.5" content={<ExecutionInformation />} />
        </WalletAndContractStateButton>
      )}
    />
  );
};

export default DrawBeaconStartDrawButton;
