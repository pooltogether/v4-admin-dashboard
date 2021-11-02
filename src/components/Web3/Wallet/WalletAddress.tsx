import React from 'react';

import { shortenAddress } from '@src/utils/convert';
import { useEthers } from '@usedapp/core';

type IWalletAddress = {
  className: string;
};

/**
 * @name WalletAddress
 * @param {Object} props
 */
export const WalletAddress = ({ className }: IWalletAddress) => {
  const { account } = useEthers();
  if (!account) return null;
  return <span className={className}>{shortenAddress(account)}</span>;
};

export default WalletAddress;
