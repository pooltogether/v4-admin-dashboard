import React, { ReactElement } from 'react';

import ModalFullScreen from '@src/components/Layout/Modal/ModalFullScreen';
import { Web3SafeTypeRender } from '@src/components/Web3/Web3SafeTypeRender';
import classNames from 'classnames';
import { useModal } from 'react-modal-hook';

type ModalDrawAndPrizeDistributionAllParametersCardProps = {
  className?: string;
  classNameModal?: string;
  children: ReactElement;
  draw?: any;
  prizeDistribution?: any;
};

export const ModalDrawAndPrizeDistributionAllParametersCard = ({
  className,
  classNameModal,
  children,
  draw,
  prizeDistribution,
}: ModalDrawAndPrizeDistributionAllParametersCardProps) => {
  const styleBase = classNames(className, 'cursor-pointer');
  const styleModal = classNames(classNameModal);
  const [showModal, hideModal] = useModal(() => {
    return (
      <>
        <ModalFullScreen hideModal={hideModal} className={styleModal}>
          <div className="">
            <div className="card mb-10">
              <div className="border-b-2 mb-2 pb-2">
                <h3 className="font-bold text-xl">Draw</h3>
              </div>
              {draw &&
                Object.keys(draw).length > 0 &&
                Object.keys(draw).map((key, index) => {
                  return (
                    <Web3SafeTypeRender
                      className="block text-base"
                      classNameLabel="block font-bold text-sm"
                      classNameValue="text-sm break-words break-all"
                      key={index}
                      label={`${key}: `}
                      value={draw[key]}
                    />
                  );
                })}
            </div>
            <div className="card">
              <div className="border-b-2 mb-2 pb-2">
                <h3 className="font-bold text-xl">PrizeDistribution</h3>
              </div>
              {prizeDistribution &&
                Object.keys(prizeDistribution).length > 0 &&
                Object.keys(prizeDistribution).map((key, index) => {
                  return (
                    <Web3SafeTypeRender
                      className="text-base"
                      classNameLabel="block font-bold text-sm"
                      classNameValue="text-sm break-words break-all"
                      key={index}
                      label={`${key}: `}
                      value={prizeDistribution[key]}
                    />
                  );
                })}
            </div>
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
export default ModalDrawAndPrizeDistributionAllParametersCard;
