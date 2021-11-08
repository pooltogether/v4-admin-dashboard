import { JsonRpcProvider } from '@ethersproject/providers';

export function useJsonRpcProvider(url: string): JsonRpcProvider {
  return new JsonRpcProvider(url);
}

export default useJsonRpcProvider;
