#!/usr/bin/env node
const fs = require('fs');

async function generateContractNetworkMap(modules) {
  const ContractNetworkMap = await generateMappingObjectFromHardhatDeployments(modules);
  writeJSON(`${process.cwd()}/src/data/contracts.json`, ContractNetworkMap);
}

function convertChainNameToChainID(name) {
  switch (name) {
    case 'mainnet':
      return 1;
    case 'ropsten':
      return 3;
    case 'rinkeby':
      return 4;
    case 'goerli':
      return 5;
    case 'kovan':
      return 42;
    case 'matic':
      return 137;
    case 'mumbai':
      return 80001;
    default:
      return 0;
  }
}

async function generateMappingObjectFromHardhatDeployments(modules) {
  const CONTRACT_NETWORK_MAP = {};

  for (let index = 0; index < modules.length; index++) {
    const module = modules[index];

    const networks = await readDir(`${process.cwd()}/node_modules/${module}/deployments`);

    for (let index = 0; index < networks.length; index++) {
      const network = networks[index];
      const contracts = await readDir(
        `${process.cwd()}/node_modules/${module}/deployments/${network}`
      );

      for (let index = 0; index < contracts.length; index++) {
        const contract = contracts[index];
        if (contract.includes('.json')) {
          const contractJSON = await readJSON(
            `${process.cwd()}/node_modules/${module}/deployments/${network}/${contract}`
          );
          const name = contract.substr(0, contract.length - 5);
          const { address } = JSON.parse(contractJSON);
          CONTRACT_NETWORK_MAP[name] = { ...CONTRACT_NETWORK_MAP[name] };
          if (name && address) {
            CONTRACT_NETWORK_MAP[name][convertChainNameToChainID(network)] = address;
          }
        }
      }
    }
  }

  return CONTRACT_NETWORK_MAP;
}

async function readDir(path) {
  try {
    return await fs.promises.readdir(path, (err, files) => {
      if (err) throw err;
      return files;
    });
  } catch (error) {
    console.log(error);
  }
}

async function writeJSON(path, object) {
  try {
    return await fs.promises.writeFile(path, JSON.stringify(object));
  } catch (error) {
    console.log(error);
  }
}

async function readJSON(path) {
  try {
    return await fs.promises.readFile(path, 'utf8', (err, file) => {
      if (err) throw err;
      return JSON.parse(file);
    });
  } catch (error) {
    console.log(error);
  }
}

generateContractNetworkMap(['@pooltogether/v4-mainnet', '@pooltogether/v4-testnet']);
