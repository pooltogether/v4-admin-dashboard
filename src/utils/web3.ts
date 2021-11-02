import { ethers } from 'ethers';

export function getLibrary(provider: any) {
  return new ethers.providers.Web3Provider(provider);
}

export function getNetworkProvider(network: string) {
  return ethers.getDefaultProvider(network || 'mainnet');
}
