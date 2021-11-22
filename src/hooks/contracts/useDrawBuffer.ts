// 
import { getAddress, isAddress } from '@ethersproject/address';
import { InterfaceDrawHistory } from '@src/contracts/interfaces';
import { useGetContractDrawHistory } from '@src/hooks/useGetContractDrawHistory';
import { validateInputs } from '@src/utils/transaction';
import { useContractCall, useContractCalls, useContractFunction, useEthers } from '@usedapp/core';

/**
 * @name useDrawHistoryCall
 * @param {Object} props
 */
export const useDrawHistoryCall = (address: string, method: string, inputs: Array<any> = []) => {
  const { active } = useEthers();
  const [value] =
    useContractCall(
      active &&
        address &&
        isAddress(address) &&
        validateInputs(inputs) && {
          abi: InterfaceDrawHistory,
          address: getAddress(address),
          method,
          args: inputs,
        }
    ) ?? [];

  return value;
};

/**
 * @name useDrawHistoryCalls
 * @param {Object} props
 */
export const useDrawHistoryCalls = (address: string, methods = [], inputs = []) => {
  const calls = methods.map((method, index) => ({
    abi: InterfaceDrawHistory,
    address,
    method,
    args: inputs[index],
  }));

  const values = useContractCalls(address && calls && calls) ?? [];
  return Array.isArray(values) ? values.map((value) => Array.isArray(value) && value[0]) : [];
};

/**
 * @name useDrawHistoryFunction
 * @param {Object} props
 */
export const useDrawHistoryFunction = (address, method, details) => {
  const { send, state } =
    useContractFunction(useGetContractDrawHistory(address), method, {
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
