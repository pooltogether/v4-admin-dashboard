import { useEffect, useState } from 'react';

import { useGetDrawBufferIdRange } from '@src/hooks/pooltogether/useGetDrawBufferIdRange';
import { useGetContractABI } from '@src/hooks/useGetContractABI';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { useSafeContractCall } from '@src/hooks/useSafeContractCall';
import idx from 'idx';

import { Response, DEFAULT_STATE } from './types';

export function useGetDraws(): Response {
  const [response, setResponse] = useState<Response>(DEFAULT_STATE);
  const abi = useGetContractABI('DrawBuffer');
  const address = useGetContractAddress('DrawBuffer');
  const rangeIds = useGetDrawBufferIdRange(address, abi);
  const getDraws = useSafeContractCall(address, abi, 'getDraws', [rangeIds]);
  useEffect(() => {
    if (response.status === 0 && idx(getDraws, (_) => _[0][0])) {
      setResponse({
        status: 1,
        data: getDraws,
      });
    }
  }, [getDraws, response]);

  return response;
}

export default useGetDraws;
