// 
import { getAddress, isAddress } from '@ethersproject/address';
import { InterfacePrizeDistributor } from '@src/contracts/interfaces';
import { useGetContractPrizeDistributor } from '@src/hooks/contracts/useGetContractPrizeDistributor';
import { validateInputs } from '@src/utils/transaction';
import { useContractCall, useContractCalls, useContractFunction, useEthers } from '@usedapp/core';

const debug = require('debug')('web3:hooks:usePrizeDistributor');

/**
 * @name usePrizeDistributorCall
 * @param {Object} props
 */
export const usePrizeDistributorCall = (
  address: string,
  method: string,
  inputs: Array<any> = []
) => {
  const { active } = useEthers();
  const [value] =
    useContractCall(
      active &&
        address &&
        isAddress(address) &&
        validateInputs(inputs) && {
          abi: InterfacePrizeDistributor,
          address: getAddress(address),
          method,
          args: inputs,
        }
    ) ?? [];

  return value;
};

/**
 * @name usePrizeDistributorCalls
 * @param {Object} props
 */
export const usePrizeDistributorCalls = (address: string, methods = [], inputs = []) => {
  const calls = methods.map((method, index) => ({
    abi: InterfacePrizeDistributor,
    address,
    method,
    args: [],
  }));

  debug('usePrizeDistributorCalls:calls', calls);
  const values = useContractCalls(address && calls) ?? [];
  debug('usePrizeDistributorCalls:values', values);
  return Array.isArray(values) ? values.map((value) => Array.isArray(value) && value) : [];
};

/**
 * @name usePrizeDistributorFunction
 * @param {Object} props
 */
export const usePrizeDistributorFunction = (address, method, details) => {
  const { send, state } =
    useContractFunction(useGetContractPrizeDistributor(address), method, {
      transactionName: {
        label: details.name,
        description: details.description,
        to: details.to,
        image: details.image,
        address,
      },
    }) ?? [];
  return [send, state];
};
