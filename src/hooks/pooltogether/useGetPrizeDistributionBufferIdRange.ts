// 
import { useEffect, useState } from 'react';

import { useSafeContractCall } from '@src/hooks/useSafeContractCall';
import { range } from '@src/utils/range';

export function useGetPrizeDistributionBufferIdRange(address: string, abi: any) {
  const [rangeIds, setRange] = useState<number[]>([]);

  const getNewestPrizeDistribution = useSafeContractCall(
    address,
    abi,
    'getNewestPrizeDistribution',
    []
  );
  const getOldestPrizeDistribution = useSafeContractCall(
    address,
    abi,
    'getOldestPrizeDistribution',
    []
  );

  useEffect(() => {
    if (getNewestPrizeDistribution && getNewestPrizeDistribution[0] && rangeIds.length === 0) {
      const start = getOldestPrizeDistribution.drawId;
      const end = getNewestPrizeDistribution.drawId;
      const rangeLength = end - start + 1;
      setRange(range(rangeLength, start));
    }
  }, [getNewestPrizeDistribution, getOldestPrizeDistribution, rangeIds.length]);

  return rangeIds;
}

export default useGetPrizeDistributionBufferIdRange;
