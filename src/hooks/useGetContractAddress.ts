import { useEffect, useState } from 'react';

import ContractMapping from '@src/data/contracts.json';
import { useEthers } from '@usedapp/core';

const debug = require('debug')('web3');

export const useGetContractAddress = (name: string, network?: number): string => {
  const { chainId } = useEthers();
  const [address, setAddress] = useState('');

  const chainIdLookup = network || chainId;

  useEffect(() => {
    const contract = Object.keys(ContractMapping).filter(
      (contract) => contract.toLowerCase() === name.toLowerCase()
    )[0];
    if (contract) {
      setAddress(ContractMapping[contract][chainIdLookup]);
    }
    debug('useGetContractAddress', contract);
  }, [name, chainIdLookup]);

  return address;
};
