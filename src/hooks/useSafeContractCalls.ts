import { Interface } from '@ethersproject/abi';
import createContractCalls from '@src/utils/createContractCalls';
import { isAddress } from '@src/utils/is';
import { useContractCalls } from '@usedapp/core';

const debug = require('debug')('web3');

export const useSafeContractCalls = (
  address: string,
  abi: Interface,
  methods: Array<string>,
  args: Array<Array<any>>
) => {
  const calls = createContractCalls(abi, address, methods, args);
  debug('useSafeContractCalls', calls);
  return useContractCalls(isAddress(address) && calls) ?? [];
};
