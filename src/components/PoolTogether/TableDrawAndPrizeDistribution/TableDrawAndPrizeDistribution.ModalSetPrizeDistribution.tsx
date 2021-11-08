import React, { ReactElement } from 'react';

import ModalLarge from '@src/components/Layout/Modal/ModalLarge';
import { FormPrizeDistributionBufferSetPrizeDistribution } from '@src/components/PrizeDistribution/FormPrizeDistributionBufferSetPrizeDistribution';
import classNames from 'classnames';
import { useModal } from 'react-modal-hook';

type ModalSetPrizeDistributionProps = {
  className: string;
  children: ReactElement;
  user: string;
  drawId: string | number;
  openModal: Function;
  label: string | number;
};

export const ModalSetPrizeDistribution = ({
  className,
  children,
  openModal,
  drawId,
  label,
}: ModalSetPrizeDistributionProps) => {
  const styleBase = classNames('cursor-pointer');

  const [showModal, hideModal] = useModal(() => {
    return (
      <>
        <ModalLarge hideModal={hideModal} className="">
          <div className="">
            <div className="grid grid-cols-12 border-b-2 pb-4 mb-3">
              <div className="col-span-6">
                <h3 className="font-bold text-xl">Set Prize Distribution</h3>
                <p className="text-xs text-gray-600">
                  Will reset the prize distribution for this draw.
                </p>
              </div>
              <div className="col-span-6 flex justify-end">
                <button className="btn btn-sm btn-red">Set to Expected</button>
                <button className="btn btn-sm btn-blue ml-2">Set to Current</button>
              </div>
            </div>
            <FormPrizeDistributionBufferSetPrizeDistribution />
          </div>
        </ModalLarge>
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
