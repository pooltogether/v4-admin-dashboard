// 
import { getAddress, isAddress } from '@ethersproject/address';
import { InterfaceERC20 } from '@src/contracts/interfaces';
import { useGetContractERC20 } from '@src/hooks/contracts/useGetContractERC20';
import { validateInputs } from '@src/utils/transaction';
import { useContractCall, useContractCalls, useContractFunction, useEthers } from '@usedapp/core';

/**
 * @name useERC20Call
 * @param {Object} props
 */
export const useERC20Call = (address: string, method: string, inputs: Array<any> = []) => {
  const { active } = useEthers();
  const [value] =
    useContractCall(
      active &&
        address &&
        isAddress(address) &&
        validateInputs(inputs) && {
          abi: InterfaceERC20,
          address: getAddress(address),
          method,
          args: inputs,
        }
    ) ?? [];

  return value;
};

/**
 * @name useERC20Calls
 * @param {Object} props
 */
export const useERC20Calls = (address: string, methods = [], inputs = []) => {
  const calls = methods.map((method, index) => ({
    abi: InterfaceERC20,
    address,
    method,
    args: inputs[index],
  }));

  const values = useContractCalls(address && calls && calls) ?? [];
  return Array.isArray(values) ? values.map((value) => Array.isArray(value) && value[0]) : [];
};

/**
 * @name useERC20Function
 * @param {Object} props
 */
export const useERC20Function = (address: string, method: string, details: any) => {
  const contract = useGetContractERC20(address);
  const { send, state } =
    useContractFunction(contract, method, {
      transactionName: {
        label: details.name,
        description: details.description,
        to: details.to,
        image: details.image,
        address,
      },
    }) ?? [];

  return [send, state, contract];
};
