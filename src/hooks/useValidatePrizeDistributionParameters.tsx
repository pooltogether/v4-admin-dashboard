import { useEffect, useState } from 'react';

import { NETWORK_URL_POLYGON_MAINNET, NETWORK_URL_POLYGON_MUMBAI } from '@src/config/networks';
import { InterfacePrizeTierHistory, InterfaceTicket } from '@src/contracts/interfaces';
import { useGetContract } from '@src/hooks/useGetContract';
import useJsonRpcProvider from '@src/hooks/useJsonRpcProvider';
import computePrizeDistribution from '@src/lib/computePrizeDistribution';
import { Draw } from '@src/types';
import { useEthers } from '@usedapp/core';

import useValidatePrizeDistributionParameters from './pooltogether/validation/useValidatePrizeDistributionParameters';
import { useGetContractAddress } from './useGetContractAddress';

interface IuseValidatePrizeDistributionResponse {
  status: number;
  data: boolean;
}

export function useValidatePrizeDistributionParameters(
  draw: Draw
): IuseValidatePrizeDistributionResponse {
  const { chainId } = useEthers();

  const l2LookupProvider = chainId === 1 ? NETWORK_URL_POLYGON_MAINNET : NETWORK_URL_POLYGON_MUMBAI;

  const [response, setReponse] = useState<IuseValidatePrizeDistributionResponse>({
    status: 0,
    data: false,
  });
  const addressPrizeTierHistoryL1 = useGetContractAddress('PrizeTierHistory');
  const addressTicketL1 = useGetContractAddress('Ticket');
  const addressTicketL2 = useGetContractAddress('Ticket');
  const L2Provider = useJsonRpcProvider(l2LookupProvider);
  const PrizeTierHistoryL1 = useGetContract(InterfacePrizeTierHistory, addressPrizeTierHistoryL1);
  const TicketL1 = useGetContract(InterfaceTicket, addressTicketL1);
  const TicketL2 = useGetContract(InterfaceTicket, addressTicketL2, L2Provider);

  useEffect(() => {
    (async () => {
      try {
        // console.log(draw, PrizeTierHistoryL1, TicketL1, TicketL2, 'drawdraw');
        const calculated = await computePrizeDistribution(
          draw,
          PrizeTierHistoryL1,
          TicketL1,
          TicketL2
        );
        setReponse(calculated);
      } catch (error) {
        // console.log(error, 'errror');
      }
    })();
  }, [TicketL1, TicketL2, draw, prizeDistribution]);

  return response;
}

export default useValidatePrizeDistributionParameters;
