export const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;
export const NETWORK_CHAIN_ID = parseInt(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID ?? '1', 10);

export const NETWORK_URL_MAINNET =
  process.env.NEXT_PUBLIC_NETWORK_URL_MAINNET || `https://mainnet.infura.io/v3/${INFURA_ID}`;

export const NETWORK_URL_RINKEBY =
  process.env.NEXT_PUBLIC_NETWORK_URL_RINKEBY || `https://rinkeby.infura.io/v3/${INFURA_ID}`;

export const NETWORK_URL_KOVAN =
  process.env.NEXT_PUBLIC_NETWORK_URL_KOVAN || `https://kovan.infura.io/v3/${INFURA_ID}`;

export const NETWORK_URL_GOERLI =
  process.env.NEXT_PUBLIC_NETWORK_URL_GOERLI || `https://goerli.infura.io/v3/${INFURA_ID}`;

export const NETWORK_URL_POLYGON_MAINNET =
  process.env.NEXT_PUBLIC_NETWORK_URL_POLYGON_MAINNET || 'https://polygon-rpc.com/';

export const NETWORK_URL_POLYGON_MUMBAI =
  process.env.NEXT_PUBLIC_NETWORK_URL_POLYGON_MUMBAI || 'https://rpc-mumbai.maticvigil.com';

export const NETWORK_URL_BINANCE_MAINNET =
  process.env.NEXT_PUBLIC_NETWORK_URL_BINANCE_MAINNET || 'https://bsc-dataseed1.binance.org';

export const NETWORK_URL_HARDHAT =
  process.env.NEXT_PUBLIC_NETWORK_URL_HARDHAT || 'http://127.0.0.1:8545';

// Invalid Network Configuration
if (typeof NETWORK_URL_MAINNET === 'undefined' && typeof INFURA_ID === 'undefined') {
  throw new Error(`NEXT_PUBLIC_NETWORK_URL_MAINNET must be a defined environment variable`);
}
