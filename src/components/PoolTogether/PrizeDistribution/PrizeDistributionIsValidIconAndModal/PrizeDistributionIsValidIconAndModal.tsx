import { AppInformationPopover } from '@src/components/App/AppInformationPopover';
import { ModalSetPrizeDistribution } from '@src/components/PoolTogether/PrizeDistribution/ModalSetPrizeDistribution';
import { useValidatePrizeDistributionParameters } from '@src/hooks/pooltogether/validation/useValidatePrizeDistributionParameters';
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
  const validationState = useValidatePrizeDistributionParameters(draw);

  console.log(validationState, 'validationStatevalidationState');

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
