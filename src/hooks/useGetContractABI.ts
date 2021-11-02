import { useEffect, useState } from 'react';

export const useGetContractABI = (name: string) => {
  const [abi, setABI] = useState();
  useEffect(() => {
    const abi = require(`@src/contracts/abi/${name}`);
    setABI(abi);
  }, []);

  return abi;
};
