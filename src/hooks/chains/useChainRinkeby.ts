import { JsonRpcProvider } from '@ethersproject/providers';
import { NETWORK_URL_RINKEBY } from '@src/config/networks';

import { useJsonRpcProvider } from '../useJsonRpcProvider';

export function useChainRinkeby(): JsonRpcProvider {
  return useJsonRpcProvider(NETWORK_URL_RINKEBY);
}

export default useChainRinkeby;
