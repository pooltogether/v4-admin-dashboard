import { useEffect, useState } from 'react';

import { Interface } from '@ethersproject/abi';
import { useSafeContractCall } from '@src/hooks/useSafeContractCall';
import { range } from '@src/utils/range';

export function useGetDrawBufferIdRange(address: string, abi: Interface) {
  const [rangeIds, setRange] = useState<number[]>([]);
  const getNewestDraw = useSafeContractCall(address, abi, 'getNewestDraw', []);
  const getOldestDraw = useSafeContractCall(address, abi, 'getOldestDraw', []);
  useEffect(() => {
    if (
      getNewestDraw &&
      getNewestDraw[0] &&
      getOldestDraw &&
      getOldestDraw[0] &&
      rangeIds.length === 0
    ) {
      const end = getNewestDraw[0].drawId;
      const start = getOldestDraw[0].drawId;
      const rangeLength = end - start;
      setRange(range(rangeLength, start));
    }
  }, [getNewestDraw, getOldestDraw, rangeIds.length]);

  return rangeIds;
}

export default useGetDrawBufferIdRange;
