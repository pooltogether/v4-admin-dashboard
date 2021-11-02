// @ts-nocheck
import { Interface } from '@ethersproject/abi';
import { isAddress } from '@src/utils/is';
import { useContractCall } from '@usedapp/core';

const debug = require('debug')('web3');

export const useSafeContractCall = (
  address: string,
  abi: Array<any>,
  method: string,
  args: Array<any> = []
) => {
  try {
    const value =
      useContractCall(
        isAddress(address) &&
          abi &&
          abi.length > 0 && {
            abi: new Interface(abi),
            address,
            method,
            args,
          }
      ) ?? [];

    return value;
  } catch (error) {
    debug(error);
    return undefined;
  }
};
