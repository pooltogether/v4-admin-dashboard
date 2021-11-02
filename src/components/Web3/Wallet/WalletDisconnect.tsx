import { useEthers } from '@usedapp/core';

interface IWalletDisconnect {
  className: any;
  label: any;
}
/**
 * @name WalletDisconnect
 * @param {Object} props
 */
export const WalletDisconnect = ({ className, label }: IWalletDisconnect) => {
  const { deactivate } = useEthers();

  const handleDisconnect = () => {
    deactivate();
    // localStorage.removeItem('wallet-default');
  };

  return (
    <span className={className} onClick={handleDisconnect}>
      {label}
    </span>
  );
};

WalletDisconnect.defaultProps = {
  label: 'Disconnect',
};

export default WalletDisconnect;
