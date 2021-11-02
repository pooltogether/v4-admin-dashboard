import { useEthers } from '@usedapp/core';

interface IWalletDeactivate {
  className: any;
  label: any;
}
/**
 * @name WalletDeactivate
 * @param {Object} props
 */
export const WalletDeactivate = ({ className, label }: IWalletDeactivate) => {
  const { deactivate } = useEthers();

  const handleDesactivateWeb3Wallet = () => {
    deactivate();
    localStorage.removeItem('wallet-default');
  };

  return (
    <button type="button" className={className} onClick={handleDesactivateWeb3Wallet}>
      {label}
    </button>
  );
};

WalletDeactivate.defaultProps = {
  label: 'Disconnect',
};

export default WalletDeactivate;
