import React from 'react';

import { ModalFullScreen } from '@src/components/Layout/Modal/ModalFullScreen';
import { FormPrizeDistributionBufferSetPrizeDistribution } from '@src/components/PoolTogether/PrizeDistribution/FormPrizeDistributionBufferSetPrizeDistribution';
import { PrizeDistributionParameters } from '@src/components/PoolTogether/PrizeDistribution/PrizeDistributionParameters';
import { convertPrizeDistributionTupleToFormDefaults } from '@src/lib/convertPrizeDistributionTupleToFormDefaults';
import classNames from 'classnames';
import { useModal } from 'react-modal-hook';

type ModalSetPrizeDistributionProps = {
  className?: string;
  children?: any;
  label?: string | number;
  drawId?: string | number;
  openModal?: Function;
  prizeDistribution?: any;
};

export const ModalSetPrizeDistribution = ({
  className,
  children,
  prizeDistribution,
  drawId,
  label,
}: ModalSetPrizeDistributionProps) => {
  const styleBase = classNames('cursor-pointer');

  const [showModal, hideModal] = useModal(() => {
    return (
      <>
        <ModalFullScreen hideModal={hideModal} className={className}>
          <div className="grid grid-cols-12 gap-x-8">
            <div className="col-span-8">
              <div className="border-b-2 pb-3 mb-3">
                <h3 className="font-bold text-3xl">Set Prize Distribution</h3>
              </div>
              <FormPrizeDistributionBufferSetPrizeDistribution
                labelButton="Set Prize Distribution"
                defaultValues={{
                  drawId,
                  prizeDistribution: convertPrizeDistributionTupleToFormDefaults(prizeDistribution),
                }}
              />
            </div>
            <div className="col-span-4 p-6">
              <div className="">
                <h3 className="font-bold border-b-2 pb-3 mb-3 text-2xl">Current Settings</h3>
                <PrizeDistributionParameters
                  drawId={drawId}
                  classNameLabel="font-semibold text-gray-600 text-sm"
                  classNameValue="font-bold text-gray-900 text-sm"
                  prizeDistribution={convertPrizeDistributionTupleToFormDefaults(prizeDistribution)}
                />
              </div>
              <div className="mt-4">
                <h3 className="font-bold border-b-2 pb-3 mb-3 text-2xl">Expected Settings</h3>
                <PrizeDistributionParameters
                  drawId={drawId}
                  classNameLabel="font-semibold text-gray-600 text-sm"
                  classNameValue="font-bold text-gray-900 text-sm"
                  prizeDistribution={convertPrizeDistributionTupleToFormDefaults(prizeDistribution)}
                />
              </div>
            </div>
          </div>
        </ModalFullScreen>
      </>
    );
  }, []);

  return (
    <span className={styleBase} onKeyDown={showModal} onClick={showModal}>
      {label || children}
    </span>
  );
};
export default ModalSetPrizeDistribution;
