import { useState, useEffect } from 'react';

import { useGetDraws } from '@src/hooks/pooltogether/useGetDraws';
import { useGetPrizeDistributions } from '@src/hooks/pooltogether/useGetPrizeDistributions';

import { Response, DEFAULT_STATE } from './types';

function mergeDrawsAndPrizeDistributions(draws: any, prizeDistributions: any) {
  const result = draws.map((draw: any) => {
    const prizeDistribution = prizeDistributions.find(
      (prizeDistributionA: any) => prizeDistributionA.drawId === draw.id
    );
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
        data: mergeDrawsAndPrizeDistributions(draws.data[0], prizeDistributions.data[0]),
      });
    }
  }, [draws, prizeDistributions]);

  return response;
}

export default useGetDrawsAndPrizeDistributions;
