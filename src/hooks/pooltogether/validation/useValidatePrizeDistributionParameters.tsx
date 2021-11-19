import { useEffect, useState } from 'react';

import { NETWORK_URL_POLYGON_MAINNET, NETWORK_URL_POLYGON_MUMBAI } from '@src/config/networks';
import { InterfacePrizeTierHistory, InterfaceTicket } from '@src/contracts/interfaces';
import { useGetContract } from '@src/hooks/useGetContract';
import useJsonRpcProvider from '@src/hooks/useJsonRpcProvider';
import computePrizeDistribution from '@src/lib/computePrizeDistribution';
import { Draw } from '@src/types';
import { useEthers } from '@usedapp/core';

import { useGetContractAddress } from '../../useGetContractAddress';

interface IuseValidatePrizeDistributionResponse {
  status: number;
  data: boolean;
}

export function useValidatePrizeDistributionParameters(
  draw: Draw
): IuseValidatePrizeDistributionResponse {
  const { chainId } = useEthers();

  const l2LookupId = chainId === 1 ? 137 : 80001;
  const l2LookupProvider = chainId === 1 ? NETWORK_URL_POLYGON_MAINNET : NETWORK_URL_POLYGON_MUMBAI;

  const [response, setReponse] = useState<IuseValidatePrizeDistributionResponse>({
    status: 0,
    data: false,
  });

  const addressPrizeTierHistoryL1 = useGetContractAddress('PrizeTierHistory');
  const addressTicketL1 = useGetContractAddress('Ticket');
  const addressTicketL2 = useGetContractAddress('Ticket', l2LookupId);
  const L2Provider = useJsonRpcProvider(l2LookupProvider);
  const PrizeTierHistoryL1 = useGetContract(InterfacePrizeTierHistory, addressPrizeTierHistoryL1);
  const TicketL1 = useGetContract(InterfaceTicket, addressTicketL1);
  const TicketL2 = useGetContract(InterfaceTicket, addressTicketL2, L2Provider);

  useEffect(() => {
    (async () => {
      try {
        const calculated = await computePrizeDistribution(
          draw,
          PrizeTierHistoryL1,
          TicketL1,
          TicketL2
        );
        setReponse(calculated);
      } catch (error) {}
    })();
  }, [PrizeTierHistoryL1, TicketL1, TicketL2, draw]);

  return response;
}

export default useValidatePrizeDistributionParameters;
