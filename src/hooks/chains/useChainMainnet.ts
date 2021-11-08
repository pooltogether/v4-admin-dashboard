import { JsonRpcProvider } from '@ethersproject/providers';
import { NETWORK_URL_MAINNET } from '@src/config/networks';

import { useJsonRpcProvider } from '../useJsonRpcProvider';

export function useChainMainnet(): JsonRpcProvider {
  return useJsonRpcProvider(NETWORK_URL_MAINNET);
}

export default useChainMainnet;
