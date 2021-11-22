import React from 'react';

import { useEthers } from '@usedapp/core';
import makeBlockie from 'ethereum-blockies-base64';
import { constants } from 'ethers';

interface IWalletBlockieProps {
  className?: string;
  address?: string;
  width?: any;
}

/**
 * @name WalletBlockie
 * @param {Object} props
 */
export const WalletBlockie = ({
  className,
  address,
  width,
  ...props
}: IWalletBlockieProps) => {
  const { account } = useEthers();
  const user = address || account || constants.AddressZero;
  return (
    <img
      className={className}
      alt="Wallet Blockie"
      src={makeBlockie(user)}
      width={width}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

WalletBlockie.defaultProps = {
  width: 22,
};

export default WalletBlockie;
