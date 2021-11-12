import { useState, useEffect } from 'react';

import { useGetDraws } from '@src/hooks/pooltogether/useGetDraws';
import { useGetPrizeDistributions } from '@src/hooks/pooltogether/useGetPrizeDistributions';

import { Response, DEFAULT_STATE } from './types';

function mergeDrawsAndPrizeDistributions(draws: any, prizeDistributions: any) {
  const result = draws.map((draw: any) => {
    const prizeDistribution = prizeDistributions.find((prizeDistributionA: any) => {
      return prizeDistributionA.drawId === draw.drawId;
    });
    return { drawId: draw.drawId, draw, prizeDistribution };
  });
  return result;
}

export function useGetDrawsAndPrizeDistributions() {
  const [response, setResponse] = useState<Response>(DEFAULT_STATE);
  const draws = useGetDraws();
  const prizeDistributions = useGetPrizeDistributions();
  useEffect(() => {
    if (draws.status === 1 && prizeDistributions.status === 1) {
      setResponse({
        status: 1,
        data: mergeDrawsAndPrizeDistributions(draws.data, prizeDistributions.data),
      });
    }
  }, [draws, prizeDistributions]);

  return response;
}

export default useGetDrawsAndPrizeDistributions;
