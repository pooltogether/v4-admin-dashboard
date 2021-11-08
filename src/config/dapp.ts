import { ChainId, Config } from '@usedapp/core';

import { SUPPORTED_CHAINS } from './constants';
import {
  NETWORK_URL_MAINNET,
  NETWORK_URL_HARDHAT,
  NETWORK_URL_RINKEBY,
  NETWORK_URL_GOERLI,
} from './networks';

export const dappConfig: Config = {
  readOnlyChainId: ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Mainnet]: NETWORK_URL_MAINNET,
    [ChainId.Rinkeby]: NETWORK_URL_RINKEBY,
    [ChainId.Goerli]: NETWORK_URL_GOERLI,
    1337: NETWORK_URL_HARDHAT,
  },
  supportedChains: SUPPORTED_CHAINS,
};

export default dappConfig;
