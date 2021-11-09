import { Interface } from '@ethersproject/abi';
import { Contract } from '@ethersproject/contracts';
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers';
import { useEthers } from '@usedapp/core';

export const useGetContract = (
  cInterface: Interface,
  address: string,
  provider?: Web3Provider | JsonRpcProvider
): Contract | undefined => {
  const { library } = useEthers();

  const contract =
    address && library ? new Contract(address, cInterface, provider || library) : undefined;

  return contract;
};
