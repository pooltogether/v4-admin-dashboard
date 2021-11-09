import { InterfaceOwnable } from '@src/contracts/interfaces';

import { useGetContract } from '../useGetContract';

/**
 * @name useGetContractOwnable
 * @param {*} address
 */
export const useGetContractOwnable = (address: string) => {
  return useGetContract(InterfaceOwnable, address);
};
