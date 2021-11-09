import { Interface } from '@ethersproject/abi';

export function createContractCall(abi: Interface, address: string, method: string, args: any[]) {
  if (!abi || !address || !method || !args) {
    return { abi: undefined, address: undefined, method: undefined, args: undefined };
  }
  return {
    abi,
    address,
    method,
    args,
  };
}

export default createContractCall;
