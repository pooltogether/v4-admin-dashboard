import { injected, walletconnect, walletlink, network } from '@src/config/connectors';

export interface WalletOption {
  label: string;
  value: string;
  connector: any;
  image: string;
}

export const walletOptions: WalletOption[] = [
  {
    label: 'Metamask',
    value: 'metamask',
    connector: injected,
    image: '/assets/wallets/metamask.svg',
  },
  {
    label: 'WalletConnect',
    value: 'walletconnect',
    connector: walletconnect,
    image: '/assets/wallets/walletconnect.svg',
  },
  {
    label: 'WalletLink',
    value: 'walletlink',
    connector: walletlink,
    image: '/assets/wallets/walletlink.png',
  },
  {
    label: 'Gnosis',
    value: 'gnosis',
    connector: walletconnect,
    image: '/assets/wallets/gnosis.svg',
  },
  {
    label: 'Network (No Signer)',
    value: 'network',
    connector: network,
    image: '/assets/wallets/ethereum-white.jpeg',
  },
];

export default walletOptions;
