import { InterfaceDrawBeacon } from '@src/contracts/interfaces';

import { useGetContract } from '../useGetContract';

export const useGetContractDrawBeacon = (address: string) => {
  return useGetContract(InterfaceDrawBeacon, address);
};
