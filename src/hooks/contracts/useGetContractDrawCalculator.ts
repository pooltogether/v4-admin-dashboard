import { Contract } from '@ethersproject/contracts';
import { InterfaceTsunamiDrawCalculator } from '@src/contracts/interfaces';

import { useGetContract } from '../useGetContract';

/**
 * @name useGetContractTsunamiDrawCalculator
 * @param {*} address
 */
export const useGetContractTsunamiDrawCalculator = (address: string): Contract | undefined => {
  return useGetContract(InterfaceTsunamiDrawCalculator, address);
};
