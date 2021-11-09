import { useEffect } from 'react';

import { AppInformationPopover } from '@src/components/App/AppInformationPopover';
import { ModalSetPrizeDistribution } from '@src/components/PoolTogether/PrizeDistribution/ModalSetPrizeDistribution';
import { NETWORK_URL_POLYGON_MAINNET } from '@src/config/networks';
import { InterfacePrizeTierHistory, InterfaceTicket } from '@src/contracts/interfaces';
import { useGetContract } from '@src/hooks/useGetContract';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import useJsonRpcProvider from '@src/hooks/useJsonRpcProvider';
import computePrizeDistribution from '@src/lib/computePrizeDistribution';
import { Draw } from '@src/types';
import classNames from 'classnames';
import { CheckCircle, AlertTriangle } from 'react-feather';

import { PrizeDistributionIsValidInformationPopover } from './PrizeDistributionIsValidInformationPopover';

interface PrizeDistributionIsValidIconAndModalProps {
  className?: string;
  drawId: string;
  draw: Draw;
  prizeDistribution: any;
}

export const PrizeDistributionIsValidIconAndModal = ({
  className,
  drawId,
  draw,
  prizeDistribution,
}: PrizeDistributionIsValidIconAndModalProps) => {
  const address = useGetContractAddress('PrizeTierHistory');
  // const getPrizeTierData =
  //   useSafeContractCall(address, InterfacePrizeTierHistory, 'getPrizeTier', [drawId]) ?? [];

  const L2Provider = useJsonRpcProvider(NETWORK_URL_POLYGON_MAINNET);
  const PrizeTierHistoryL1 = useGetContract(InterfacePrizeTierHistory, address);
  const TicketL1 = useGetContract(InterfaceTicket, '0xdd4d117723C257CEe402285D3aCF218E9A8236E1');
  const TicketL2 = useGetContract(
    InterfaceTicket,
    '0x6a304dFdb9f808741244b6bfEe65ca7B3b3A6076',
    L2Provider
  );

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
      } catch (error) {
        // console.log(error, 'errror');
      }
    })();
  }, [TicketL1, TicketL2, draw, prizeDistribution]);

  // console.log(getPrizeTierData, 'datadata');
  // console.log(prizeDistribution, 'prizeDistribution');

  const isValid = false;
  const styleBase = classNames(className, '');
  return (
    <div className={styleBase}>
      <span className="tag tag-white -ml-8 cursor-pointer shadow-sm top-0 hover-up hover:border-b-2">
        <div className="flex items-center">
          {!!isValid && <CheckCircle className="text-green-500 mr-2" width={18} />}
          {!isValid && (
            <ModalSetPrizeDistribution drawId={drawId} prizeDistribution={prizeDistribution}>
              <div className="flex items-center mr-2">
                <AlertTriangle className="text-red-500 mr-2" width={18} />
                <span className="">Requires Attention</span>
              </div>
            </ModalSetPrizeDistribution>
          )}
          <AppInformationPopover
            content={<PrizeDistributionIsValidInformationPopover isValid={true} />}
            size={12}
            positions={['right', 'top']}
          />
        </div>
      </span>
    </div>
  );
};

export default PrizeDistributionIsValidIconAndModal;
