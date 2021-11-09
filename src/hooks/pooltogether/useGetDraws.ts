import { useEffect, useState } from 'react';

import { InterfaceDrawBuffer } from '@src/contracts/interfaces';
import { useGetDrawBufferIdRange } from '@src/hooks/pooltogether/useGetDrawBufferIdRange';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { useSafeContractCall } from '@src/hooks/useSafeContractCall';
import convertDrawTupleToFormDefaults from '@src/lib/convertDrawTupleToFormDefaults';
import idx from 'idx';

import { Response, DEFAULT_STATE } from './types';

export function useGetDraws(): Response {
  const [response, setResponse] = useState<Response>(DEFAULT_STATE);
  const address = useGetContractAddress('DrawBuffer');
  const rangeIds = useGetDrawBufferIdRange(address, InterfaceDrawBuffer);
  const getDraws = useSafeContractCall(address, InterfaceDrawBuffer, 'getDraws', [rangeIds]);
  useEffect(() => {
    if (response.status === 0 && idx(getDraws, (_) => _[0][0])) {
      setResponse({
        status: 1,
        data: getDraws[0].map((draw) => convertDrawTupleToFormDefaults(draw)),
      });
    }
  }, [getDraws, response]);

  return response;
}

export default useGetDraws;
