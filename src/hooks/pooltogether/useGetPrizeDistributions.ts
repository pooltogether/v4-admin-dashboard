import { useEffect, useState } from 'react';

import { useGetPrizeDistributionBufferIdRange } from '@src/hooks/pooltogether/useGetPrizeDistributionBufferIdRange';
import { useGetContractABI } from '@src/hooks/useGetContractABI';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { useSafeContractCall } from '@src/hooks/useSafeContractCall';
import idx from 'idx';

import { Response, DEFAULT_STATE } from './types';

export function useGetPrizeDistributions() {
  const [response, setResponse] = useState<Response>(DEFAULT_STATE);
  const abi = useGetContractABI('PrizeDistributionBuffer');
  const address = useGetContractAddress('PrizeDistributionBuffer');
  const rangeIds = useGetPrizeDistributionBufferIdRange(address, abi);
  const data = useSafeContractCall(address, abi, 'getPrizeDistributions', [rangeIds]);

  useEffect(() => {
    if (response.status === 0 && idx(data, (_) => _[0][0])) {
      setResponse({
        status: 1,
        data,
      });
    }
  }, [data, response.status]);
  return response;
}

export default useGetPrizeDistributions;
