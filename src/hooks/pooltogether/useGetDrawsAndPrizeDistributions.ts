import { useState, useEffect } from 'react';

import { useGetDraws } from '@src/hooks/pooltogether/useGetDraws';
import { useGetPrizeDistributions } from '@src/hooks/pooltogether/useGetPrizeDistributions';

import { Response, DEFAULT_STATE } from './types';

function mergeDrawsAndPrizeDistributions(draws: any, prizeDistributions: any) {
  const result = draws.map((draw: any) => {
    const prizeDistribution = prizeDistributions.find((prizeDistributionA: any) => {
      // console.log('TEST 3', prizeDistributionA, draw);
      return prizeDistributionA.drawId === draw.drawId;
    });
    console.log(prizeDistribution, 'FIND prizeDistribution');
    // console.log('mergeDrawsAndPrizeDistributions', prizeDistributions, draws, prizeDistribution);
    return { drawId: draw.drawId, draw, prizeDistribution };
  });

  console.log(result, 'resultresult');
  return result;
}

export function useGetDrawsAndPrizeDistributions() {
  const [response, setResponse] = useState<Response>(DEFAULT_STATE);
  const draws = useGetDraws();
  const prizeDistributions = useGetPrizeDistributions();

  console.log(draws, 'drawsdrawsdraws');

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
