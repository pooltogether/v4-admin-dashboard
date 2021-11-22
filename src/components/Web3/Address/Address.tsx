import React, { ReactElement } from 'react';

import { shortenAddress, trimString } from '@src/utils/convert';
import { constants } from 'ethers';

import { EtherscanLink } from './EtherscanLink';

interface IAddress {
  address: string;
  isLink: boolean;
  trim: number;
}

export const Address = ({ address, isLink, trim = 7 }: IAddress): ReactElement | null => {
  if (isLink) {
    return (
      <EtherscanLink className="" address={address}>
        <span>{trimString(address, trim)}</span>
      </EtherscanLink>
    );
  }
  return !address ? null : <span>{shortenAddress(`${address}`, 6)}</span>;
};

export default Address;

Address.defaultProps = {
  address: constants.AddressZero,
  trim: 7,
  sx: {},
};
