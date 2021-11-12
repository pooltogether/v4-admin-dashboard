import { mainnet as mainnetContractList } from '@pooltogether/v4-pool-data'
import PoolTogetherV4, { config } from '@pooltogether/v4-js';
export const ptv4 = new PoolTogetherV4(config.providersMainnet, mainnetContractList)
export default ptv4