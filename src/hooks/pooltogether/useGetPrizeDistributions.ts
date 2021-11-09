import { useEffect, useState } from 'react';

import { InterfacePrizeDistributionBuffer } from '@src/contracts/interfaces';
import { useGetPrizeDistributionBufferIdRange } from '@src/hooks/pooltogether/useGetPrizeDistributionBufferIdRange';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { useSafeContractCall } from '@src/hooks/useSafeContractCall';
import { convertPrizeDistributionTupleToFormDefaults } from '@src/lib/convertPrizeDistributionTupleToFormDefaults';
import idx from 'idx';

import { Response, DEFAULT_STATE } from './types';

function mapRangeIdToPrizeDistribution(rangeIds, prizeDistributions) {
  if (rangeIds.length !== prizeDistributions.length) {
    return [];
  }
  return rangeIds.map((rangeId, index) => ({
    drawId: rangeId,
    ...convertPrizeDistributionTupleToFormDefaults(prizeDistributions[index]),
  }));
}

export function useGetPrizeDistributions() {
  const [response, setResponse] = useState<Response>(DEFAULT_STATE);
  const address = useGetContractAddress('PrizeDistributionBuffer');
  const rangeIds = useGetPrizeDistributionBufferIdRange(address, InterfacePrizeDistributionBuffer);
  const data = useSafeContractCall(
    address,
    InterfacePrizeDistributionBuffer,
    'getPrizeDistributions',
    [rangeIds]
  );

  useEffect(() => {
    if (response.status === 0 && idx(data, (_) => _[0][0])) {
      setResponse({
        status: 1,
        data: mapRangeIdToPrizeDistribution(rangeIds, data[0]),
      });
    }
  }, [data, response.status]);
  return response;
}

export default useGetPrizeDistributions;
