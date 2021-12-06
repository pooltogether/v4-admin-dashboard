import { config } from '@pooltogether/v4-js';
import { mainnet as mainnetContractList } from '@pooltogether/v4-pool-data';
import { SmartContractSetConnected } from '@src/temp/v4-client-js/SmartContractSetConnected';

export const smartContractClient = new SmartContractSetConnected(
  config.providers.providersMainnet,
  mainnetContractList
);
export default smartContractClient;
