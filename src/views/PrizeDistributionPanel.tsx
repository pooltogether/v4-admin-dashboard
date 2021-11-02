import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import ModalPanel from '@src/components/Layout/Modal/ModalPanel';
import { useModal } from 'react-modal-hook';
import { DrawSettings } from '@src/components/PoolTogether/DrawSettings';

type IPrizeDistributionPanel = {
  className: string;
  children: ReactElement;
  user: string;
  drawId: string | number;
  openModal: Function;
  label: string | number;
};

export const PrizeDistributionPanel = ({
  className,
  children,
  openModal,
  drawId,
  label
}: IPrizeDistributionPanel): ReactElement => {
  const [showModal, hideModal] = useModal(() => {
    return (
      <>
        <ModalPanel hideModal={hideModal} className="">
          <div className="">
            <h3 className="font-bold text-xl border-b-2 mb-3">
              Prize Distribution
            </h3>
            <DrawSettings name="PrizeDistributionHistory" drawId={drawId} />
          </div>
        </ModalPanel>
      </>
    );
  }, []);

  return (
    <span className="cursor-pointer" onKeyDown={showModal} onClick={showModal}>
      {label ? label : children}
    </span>
  );
};

PrizeDistributionPanel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
};

PrizeDistributionPanel.defaultProps = {
  className: 'panel'
};

export default PrizeDistributionPanel;
