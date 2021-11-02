// @ts-nocheck
import { getAddress, isAddress } from '@ethersproject/address';
import { InterfacePrizeDistributionBuffer } from '@src/contracts/interfaces';
import { useGetContractPrizeDistributionHistory } from '@src/hooks/useGetContractPrizeDistributionHistory';
import { validateInputs } from '@src/utils/transaction';
import { useContractCall, useContractCalls, useContractFunction, useEthers } from '@usedapp/core';

/**
 * @name usePrizeDistributionBufferCall
 * @param {Object} props
 */
export const usePrizeDistributionBufferCall = (
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
          abi: InterfacePrizeDistributionBuffer,
          address: getAddress(address),
          method,
          args: inputs,
        }
    ) ?? [];

  return value;
};

/**
 * @name usePrizeDistributionBufferCalls
 * @param {Object} props
 */
export const usePrizeDistributionBufferCalls = (address: string, methods = [], inputs = []) => {
  const calls = methods.map((method, index) => ({
    abi: InterfacePrizeDistributionBuffer,
    address,
    method,
    args: inputs[index],
  }));

  const values = useContractCalls(address && calls && calls) ?? [];
  return Array.isArray(values) ? values.map((value) => Array.isArray(value) && value[0]) : [];
};

/**
 * @name usePrizeDistributionBufferFunction
 * @param {Object} props
 */
export const usePrizeDistributionBufferFunction = (address, method, details) => {
  const { send, state } =
    useContractFunction(useGetContractPrizeDistributionHistory(address), method, {
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
