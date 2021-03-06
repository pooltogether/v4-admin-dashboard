import PoolTogetherV4, { config } from '@pooltogether/v4-js';
import { mainnet as mainnetContractList } from '@pooltogether/v4-pool-data';

export const ptv4 = new PoolTogetherV4(config.providers.providersMainnet, mainnetContractList);
export default ptv4;
