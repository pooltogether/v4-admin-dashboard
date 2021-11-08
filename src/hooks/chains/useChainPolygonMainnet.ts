import { JsonRpcProvider } from '@ethersproject/providers';
import { NETWORK_URL_POLYGON_MAINNET } from '@src/config/networks';

import { useJsonRpcProvider } from '../useJsonRpcProvider';

export function useChainPolygonMainnet(): JsonRpcProvider {
  return useJsonRpcProvider(NETWORK_URL_POLYGON_MAINNET);
}

export default useChainPolygonMainnet;
