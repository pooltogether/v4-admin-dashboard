import React, { ReactNode, useEffect, useState } from 'react';

import ModalPanel from '@src/components/Layout/Modal/ModalPanel';
import { walletOptions } from '@src/config/wallets';
import { useEthers } from '@usedapp/core';
import classNames from 'classnames';
import { useModal } from 'react-modal-hook';

interface WalletOptionProps {
  activate: Function;
  className?: string;
  classNameLabel?: string;
  classNameImage?: string;
  defaultWallet: string;
  label: string;
  value: string;
  image: string;
  connector: any;
}
const WalletOption = ({
  activate,
  className,
  classNameLabel,
  classNameImage,
  defaultWallet,
  label,
  value,
  image,
  connector,
}: WalletOptionProps) => {
  const styleBase = classNames(className, 'wallet-card flex items-center justify-between mb-2');
  const styleLabel = classNames(classNameLabel, 'font-semibold text-lg inline');
  const styleImage = classNames(classNameImage, '');

  const handleClick = () => {
    activate(connector);
    window.localStorage.setItem('wallet-default', value);
  };

  return (
    <div className={styleBase} onClick={handleClick}>
      <span className={styleLabel}>
        {label}{' '}
        {defaultWallet == value && (
          <span className="ml-1 tag tag-smoke text-xs">Default Selection</span>
        )}{' '}
      </span>
      <img className={styleImage} src={image} alt={`${label} Icon`} width={32} />
    </div>
  );
};

interface WalletConnectSelectionModalProps {
  className?: string;
  children?: ReactNode;
  label?: string;
}

export const WalletConnectSelectionModal = ({
  className,
  children,
  label,
}: WalletConnectSelectionModalProps) => {
  const { activate } = useEthers();

  const [walletSection, walletSectionSet] = useState<any>();
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const wallet = window.localStorage.getItem('wallet-default');
      walletSectionSet(wallet);
    }
  }, []);

  const handleResetDefaultWallet = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem('wallet-default');
    }
  };

  const [showModal, hideModal] = useModal(() => {
    return (
      <>
        <ModalPanel hideModal={hideModal} className="">
          <div className="">
            <h3 className="font-bold text-xl border-b-2 mb-3">Select Wallet</h3>
            {walletOptions.map((option, idx) => (
              <WalletOption
                key={idx}
                activate={activate}
                {...option}
                defaultWallet={walletSection}
              />
            ))}
          </div>
          <span className="tag tag-red cursor-pointer mt-2" onClick={handleResetDefaultWallet}>
            Reset Default Wallet
          </span>
        </ModalPanel>
      </>
    );
  }, [walletSection]);

  const styleBase = classNames(className, 'cursor-pointer');

  return (
    <span className={styleBase} onKeyDown={showModal} onClick={showModal}>
      {label || children}
    </span>
  );
};

export default WalletConnectSelectionModal;
