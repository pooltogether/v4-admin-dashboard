/* --- Global Modules --- */
import { ReactElement } from 'react';

import { useEthers } from '@usedapp/core';

interface IWalletIsConnected {
  children: ReactElement[];
}
/**
 * @name WalletIsConnected
 * @param {Object} props
 */
export const WalletIsConnected = ({ children }: IWalletIsConnected) => {
  const { account } = useEthers();

  return <>{account ? <>{children[0]}</> : <>{children[1]}</>}</>;
};

export default WalletIsConnected;
