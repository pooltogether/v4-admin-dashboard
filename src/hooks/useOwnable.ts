// @ts-nocheck
import { getAddress, isAddress } from "@ethersproject/address";
import { InterfaceOwnable } from "@src/contracts/interfaces";
import { useGetContractOwnable } from "@src/hooks/useGetContractOwnable";
import { validateInputs } from "@src/utils/transaction";
import { useContractCall, useContractCalls, useContractFunction, useEthers } from "@usedapp/core";

/**
 * @name useOwnableCall
 * @param {Object} props
 */
export const useOwnableCall = (address: string, method: string, inputs: Array<any> = []) => {
  const { active } = useEthers();
  const [value] =
    useContractCall(
      active &&
        address &&
        isAddress(address) &&
        validateInputs(inputs) && {
          abi: InterfaceOwnable,
          address: getAddress(address),
          method,
          args: inputs,
        }
    ) ?? [];

  return value;
};

/**
 * @name useOwnableCalls
 * @param {Object} props
 */
export const useOwnableCalls = (address: string, methods = [], inputs = []) => {
  const calls = methods.map((method, index) => ({
    abi: InterfaceOwnable,
    address,
    method,
    args: inputs[index],
  }));

  const values = useContractCalls(address && calls && calls) ?? [];
  return Array.isArray(values) ? values.map((value) => Array.isArray(value) && value[0]) : [];
};

/**
 * @name useOwnableFunction
 * @param {Object} props
 */
export const useOwnableFunction = (address, method, details) => {
  const { send, state } =
    useContractFunction(useGetContractOwnable(address), method, {
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
