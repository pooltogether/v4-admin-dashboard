import { JsonRpcProvider } from '@ethersproject/providers';
import { NETWORK_URL_POLYGON_MUMBAI } from '@src/config/networks';

import { useJsonRpcProvider } from '../useJsonRpcProvider';

export function useChainPolygonMumbai(): JsonRpcProvider {
  return useJsonRpcProvider(NETWORK_URL_POLYGON_MUMBAI);
}

export default useChainPolygonMumbai;
