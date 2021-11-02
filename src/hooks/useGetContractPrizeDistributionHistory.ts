import { Contract } from '@ethersproject/contracts';
import { InterfacePrizeDistributionBuffer } from '@src/contracts/interfaces';

import { useGetContract } from './useGetContract';

/**
 * @name useGetContractPrizeDistributionHistory
 * @param {*} address
 */
export const useGetContractPrizeDistributionHistory = (address: string): Contract | undefined => {
  return useGetContract(InterfacePrizeDistributionBuffer, address);
};
