import { Interface } from '@ethersproject/abi';
import { Contract } from '@ethersproject/contracts';
import { useEthers } from '@usedapp/core';

/**
 * @name  useGetContract
 * @param {Interface} interface
 * @param {String} address
 */
export const useGetContract = (cInterface: Interface, address: string): Contract | undefined => {
  const { library } = useEthers();

  const contract = address && library ? new Contract(address, cInterface, library) : undefined;

  return contract;
};
