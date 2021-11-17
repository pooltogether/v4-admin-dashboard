import {
  ethereumMainnet,
  ethereumRinkeby,
  polygonMainnet,
  polygonMumbai,
  binanceMainnet,
  binanceTestnet,
} from './chains';

export const bridgeMainnet = [
  {
    label: 'Ethereum (1)',
    image: '/assets/networks/ethereum.png',
    chainNetwork: 'Ethereum',
    chainName: 'Ethereum',
    chainId: 1,
    chainType: 'mainnet',
    chain: ethereumMainnet,
  },
  {
    label: 'Polygon (137)',
    image: '/assets/networks/polygon.png',
    chainNetwork: 'Polygon',
    chainName: 'Polygon',
    chainId: 137,
    chainType: 'mainnet',
    chain: polygonMainnet,
  },
  // {
  //   label: 'Binance Smart Chain',
  //   image: '/assets/networks/binance.png',
  //   chainNetwork: 'Binance',
  //   chainName: 'Binance',
  //   chainId: 56,
  //   chainType: 'mainnet',
  //   chain: binanceMainnet,
  // },
];

export const bridgeTestnet = [
  {
    label: 'Ethereum Rinkeby',
    image: '/assets/networks/ethereum.png',
    chainNetwork: 'Ethereum',
    chainName: 'Rinkeby',
    chainId: 4,
    chainType: 'testnet',
    chain: ethereumRinkeby,
  },
  {
    label: 'Polygon Mumbai (Testnet)',
    image: '/assets/networks/polygon.png',
    chainNetwork: 'Polygon',
    chainName: 'Mumbai',
    chainId: 80001,
    chainType: 'testnet',
    chain: polygonMumbai,
  },
  // {
  //   label: 'Binance Smart Chain',
  //   image: '/assets/networks/binance.png',
  //   chainNetwork: 'Binance',
  //   chainName: 'Testnet',
  //   chainId: 97,
  //   chainType: 'testnet',
  //   chain: binanceTestnet,
  // },
];

const bridges = {
  bridgeMainnet,
  bridgeTestnet,
};

export default bridges;
