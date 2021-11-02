// @ts-nocheck
import { getAddress, isAddress } from "@ethersproject/address";
import { InterfaceManageable } from "@src/contracts/interfaces";
import { useGetContractManageable } from "@src/hooks/useGetContractManageable";
import { validateInputs } from "@src/utils/transaction";
import { useContractCall, useContractCalls, useContractFunction, useEthers } from "@usedapp/core";

/**
 * @name useManageableCall
 * @param {Object} props
 */
export const useManageableCall = (address: string, method: string, inputs: Array<any> = []) => {
  const { active } = useEthers();
  const [value] =
    useContractCall(
      active &&
        address &&
        isAddress(address) &&
        validateInputs(inputs) && {
          abi: InterfaceManageable,
          address: getAddress(address),
          method,
          args: inputs,
        }
    ) ?? [];

  return value;
};

/**
 * @name useManageableCalls
 * @param {Object} props
 */
export const useManageableCalls = (address: string, methods = [], inputs = []) => {
  const calls = methods.map((method, index) => ({
    abi: InterfaceManageable,
    address,
    method,
    args: inputs[index],
  }));

  const values = useContractCalls(address && calls && calls) ?? [];
  return Array.isArray(values) ? values.map((value) => Array.isArray(value) && value[0]) : [];
};

/**
 * @name useManageableFunction
 * @param {Object} props
 */
export const useManageableFunction = (address, method, details) => {
  const { send, state } =
    useContractFunction(useGetContractManageable(address), method, {
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
