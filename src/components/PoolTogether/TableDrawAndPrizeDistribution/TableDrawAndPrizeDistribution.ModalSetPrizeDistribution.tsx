import React, { ReactElement } from 'react';

import ModalFullScreen from '@src/components/Layout/Modal/ModalFullScreen';
import { FormPrizeDistributionBufferSetPrizeDistribution } from '@src/components/PoolTogether/PrizeDistribution/FormPrizeDistributionBufferSetPrizeDistribution';
import classNames from 'classnames';
import { useModal } from 'react-modal-hook';

type ModalSetPrizeDistributionProps = {
  className?: string;
  children?: ReactElement;
  drawId: string | number;
  prizeDistribution: any;
};

export const ModalSetPrizeDistribution = ({
  className,
  children,
  drawId,
  prizeDistribution,
}: ModalSetPrizeDistributionProps) => {
  const styleBase = classNames(className);

  const [showModal, hideModal] = useModal(() => {
    return (
      <>
        <ModalFullScreen hideModal={hideModal} className={styleBase}>
          <div className="">
            <div className="grid grid-cols-12 border-b-2 pb-4 mb-3">
              <div className="col-span-6">
                <h3 className="font-bold text-4xl text-gray-700">Set Prize Distribution</h3>
                <p className="text-lg font-light text-gray-600">
                  Will reset the PrizeDistribution parameters for a target Draw ID
                </p>
              </div>
            </div>
            <FormPrizeDistributionBufferSetPrizeDistribution
              defaultValues={{ drawId, prizeDistribution }}
            />
          </div>
        </ModalFullScreen>
      </>
    );
  }, []);

  return (
    <span className={styleBase} onKeyDown={showModal} onClick={showModal}>
      {children}
    </span>
  );
};
export default ModalSetPrizeDistribution;
