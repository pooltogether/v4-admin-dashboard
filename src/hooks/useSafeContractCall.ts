import { Interface } from '@ethersproject/abi';
import createContractCall from '@src/utils/createContractCall';
import { isAddress } from '@src/utils/is';
import { useContractCall } from '@usedapp/core';

const debug = require('debug')('web3');

export const useSafeContractCall = (
  address: string,
  abi: Interface,
  method: string,
  args: any[]
) => {
  const call = createContractCall(abi, address, method, args);
  debug('useSafeContractCall', call);
  return useContractCall(isAddress(address) && call.abi && call) ?? [];
};
