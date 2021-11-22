import { useEffect } from 'react';

import {
  injected,
  walletconnect,
  walletlink,
  network,
} from '@src/config/connectors';
import { useEthers } from '@usedapp/core';

interface WalletAutoConnectProps {}

/**
 * @name WalletAutoConnect
 * @param {Object} props
 */
export const WalletAutoConnect = ({}: WalletAutoConnectProps) => {
  const { activate } = useEthers();

  useEffect(() => {
    const defaultWallet = localStorage.getItem('wallet-default');
    const activateNetwork = (connector: any) => {
      setTimeout(() => {
        activate(connector);
      }, 100);
    };
    (async () => {
      if (defaultWallet) {
        switch (defaultWallet) {
          case 'metamask':
            // eslint-disable-next-line no-case-declarations
            const isInjectedAuthorized = await injected.isAuthorized();
            if (isInjectedAuthorized) activateNetwork(injected);
            return null;
          case 'walletconnect':
            return activateNetwork(walletconnect);
          case 'walletlink':
            return activateNetwork(walletlink);
          case 'network':
            return activateNetwork(network);
          default:
            return null;
        }
      }
    })();
  }, [activate]);

  return null;
};

WalletAutoConnect.defaultProps = {};

export default WalletAutoConnect;
