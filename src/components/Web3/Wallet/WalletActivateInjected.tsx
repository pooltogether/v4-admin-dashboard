import React from 'react';

import { injected } from '@src/config/connectors';
import { useEthers } from '@usedapp/core';

interface IWalletActivateInjected {
  className: any;
  label: any;
}

/**
 * @name WalletActivateInjected
 * @param {Object} props
 */
export const WalletActivateInjected = ({ className, label }: IWalletActivateInjected) => {
  const { activate } = useEthers();

  // Establish Previous Connection with Authorized Wallet using the wallet-default localstorage value
  // useEffect(() => {
  //   injected.isAuthorized().then((isAuthorized) => {
  //     const defaultWallet = localStorage.getItem("wallet-default");
  //     if (isAuthorized && defaultWallet === "MetaMask") {
  //       activate(injected);
  //     }
  //   });
  // }, [activate]);

  const handleOnActivate = () => activate(injected);

  return (
    <button type="button" className={className} onClick={handleOnActivate}>
      {label}
    </button>
  );
};

WalletActivateInjected.defaultProps = {
  label: 'Connect',
};

export default WalletActivateInjected;
