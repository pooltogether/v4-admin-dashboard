import { Contract } from '@ethersproject/contracts';
import { useGetContract } from './useGetContract'
import { InterfaceTsunamiDrawCalculator } from '@src/contracts/interfaces';

/**
 * @name useGetContractTsunamiDrawCalculator
 * @param {*} address
 */
export const useGetContractTsunamiDrawCalculator = (address: string): Contract | undefined => {
  return useGetContract(InterfaceTsunamiDrawCalculator, address);
};