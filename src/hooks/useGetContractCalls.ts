import { useContractCalls, useEthers } from '@usedapp/core';

export const useGetContractCalls = (
  address: string,
  abi: any,
  method: string,
  inputs: Array<any> = []
) => {
  const { chainId } = useEthers();

  const [value] =
    useContractCalls(
      address &&
        abi && {
          abi,
          address,
          method,
          args: inputs,
        }
    ) ?? [];

  return value;
};
