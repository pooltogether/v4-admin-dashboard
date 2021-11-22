// 
import { getAddress, isAddress } from '@ethersproject/address';
import { InterfaceDrawBeacon } from '@src/contracts/interfaces';
import { useGetContractDrawBeacon } from '@src/hooks/contracts/useGetContractDrawBeacon';
import { validateInputs } from '@src/utils/transaction';
import { useContractCall, useContractCalls, useContractFunction, useEthers } from '@usedapp/core';

const debug = require('debug')('web3:hooks:useDrawBeacon');

/**
 * @name useDrawBeaconCall
 * @param {Object} props
 */
export const useDrawBeaconCall = (address: string, method: string, inputs: Array<any> = []) => {
  const { active } = useEthers();
  const [value] =
    useContractCall(
      active &&
        address &&
        isAddress(address) &&
        validateInputs(inputs) && {
          abi: InterfaceDrawBeacon,
          address: getAddress(address),
          method,
          args: inputs,
        }
    ) ?? [];

  return value;
};

/**
 * @name useDrawBeaconCalls
 * @param {Object} props
 */
export const useDrawBeaconCalls = (address: string, methods = [], inputs = []) => {
  const calls = methods.map((method, index) => ({
    abi: InterfaceDrawBeacon,
    address,
    method,
    args: [],
  }));

  debug('useDrawBeaconCalls:calls', calls);
  const values = useContractCalls(address && calls) ?? [];
  debug('useDrawBeaconCalls:values', values);
  return Array.isArray(values) ? values.map((value) => Array.isArray(value) && value) : [];
};

/**
 * @name useDrawBeaconFunction
 * @param {Object} props
 */
export const useDrawBeaconFunction = (address, method, details) => {
  const { send, state } =
    useContractFunction(useGetContractDrawBeacon(address), method, {
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
