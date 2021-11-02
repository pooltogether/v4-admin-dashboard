import { InterfaceManageable } from "@src/contracts/interfaces";

import { useGetContract } from "./useGetContract";

/**
 * @name useGetContractManageable
 * @param {*} address
 */
export const useGetContractManageable = (address: string) => {
  return useGetContract(InterfaceManageable, address);
};
