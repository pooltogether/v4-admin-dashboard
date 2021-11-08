import { InjectedConnector } from '@web3-react/injected-connector';
import { NetworkConnector } from '@web3-react/network-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { SUPPORTED_CHAINS } from './constants';
import {
  NETWORK_URL_MAINNET,
  NETWORK_URL_GOERLI,
  NETWORK_URL_HARDHAT,
  NETWORK_URL_KOVAN,
  NETWORK_URL_RINKEBY,
} from './networks';

export const network = new NetworkConnector({
  defaultChainId: 1,
  urls: {
    1: NETWORK_URL_MAINNET,
    4: NETWORK_URL_RINKEBY,
    5: NETWORK_URL_GOERLI,
    42: NETWORK_URL_KOVAN,
    1337: NETWORK_URL_HARDHAT,
  },
});

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAINS,
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: NETWORK_URL_MAINNET },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

export const walletlink = new WalletLinkConnector({
  url: NETWORK_URL_MAINNET,
  appName: 'PoolTogether',
  appLogoUrl: '/favicon.png',
});
