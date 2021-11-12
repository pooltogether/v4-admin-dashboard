import { Contract } from '@ethersproject/contracts';
import { InterfacePrizeDistributor } from '@src/contracts/interfaces';

import { useGetContract } from '../useGetContract';

/**
 * @name useGetContractPrizeDistributor
 * @param {*} address
 */
export const useGetContractPrizeDistributor = (address: string): Contract | undefined => {
  return useGetContract(InterfacePrizeDistributor, address);
};
