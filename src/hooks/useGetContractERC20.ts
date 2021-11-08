import { Contract } from '@ethersproject/contracts';
import { InterfaceERC20 } from '@src/contracts/interfaces';

import { useGetContract } from './useGetContract';

/**
 * @name useGetContractERC20
 * @param {*} address
 */
export const useGetContractERC20 = (address: string): Contract | undefined => {
  return useGetContract(InterfaceERC20, address);
};
