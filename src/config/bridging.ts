import { ethereumMainnet, ethereumRinkeby, polygonMainnet, polygonMumbai } from './chains';

export const bridgeMainnet = [
  {
    label: 'Ethereum Mainnet',
    image: '/assets/networks/ethereum.png',
    chainNetwork: 'Ethereum',
    chainName: 'Ethereum',
    chainId: 1,
    chainType: 'mainnet',
    chain: ethereumMainnet,
  },
  {
    label: 'Polygon ',
    image: '/assets/networks/polygon.png',
    chainNetwork: 'Polygon',
    chainName: 'Polygon',
    chainId: 137,
    chainType: 'mainnet',
    chain: polygonMainnet,
  },
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
];

const bridges = {
  bridgeMainnet,
  bridgeTestnet,
};

export default bridges;
