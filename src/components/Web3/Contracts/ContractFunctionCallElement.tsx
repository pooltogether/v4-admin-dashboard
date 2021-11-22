import { useEffect, useState } from 'react';

import { Component } from '@src/components/Component';
import { TransactionErrorNotification } from '@src/components/Web3/Transaction/TransactionErrorNotification';
import { useContractFunction, useEthers } from '@usedapp/core';
import classNames from 'classnames';

interface ContractFunctionCallElementProps {
  component: React.ReactNode | React.ElementType;
  className: string;
  contract?: any;
  method: string;
  args?: any[];
}

interface WalletState {
  error: any;
  isActive: boolean;
  isConnected: boolean;
  account?: string;
}

export const ContractFunctionCallElement = ({
  component,
  className,
  contract,
  method,
  args = [],
}: ContractFunctionCallElementProps) => {
  const { active, account } = useEthers();
  const [walletState, setWalletState] = useState<WalletState>({
    isActive: false,
    isConnected: false,
    error: false,
  });

  useEffect(() => {
    if (active && !walletState?.isActive) {
      setWalletState({ ...walletState, isActive: active });
    }
  }, [active, walletState]);

  useEffect(() => {
    if (contract?.address && !walletState?.isConnected) {
      setWalletState({ ...walletState, isConnected: true });
    }
  }, [contract?.address, walletState]);

  useEffect(() => {
    if (account && !walletState?.account) {
      setWalletState({ ...walletState, account });
    }
  }, [account, walletState]);

  const { send: executeTransaction, state: transactionState } =
    useContractFunction(contract, method, { transactionName: method }) ?? [];

  const handleExecute = () => {
    if (
      walletState.isActive &&
      walletState.isConnected &&
      walletState.account
    ) {
      executeTransaction(args);
    } else {
      setWalletState({ ...walletState, error: 'Wallet is not connected' });
    }
  };

  const styleBase = classNames(className, '');
  return (
    <>
      <span onClick={handleExecute} className={styleBase}>
        {Component(component, { ...walletState })}
      </span>
      <TransactionErrorNotification
        state={transactionState}
        address={contract?.address}
        label="PrizeDistributionBuffer"
        description="Manage V4 Prize Distributions"
        config={{ duration: 5000 }}
      />
    </>
  );
};

export default ContractFunctionCallElement;
