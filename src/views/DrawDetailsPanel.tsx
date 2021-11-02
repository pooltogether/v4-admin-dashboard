import { ReactElement } from 'react';

import ModalPanel from '@src/components/Layout/Modal/ModalPanel';
import { DrawSettings } from '@src/components/PoolTogether/DrawSettings';
import PropTypes from 'prop-types';
import { useModal } from 'react-modal-hook';

type IDrawDetailsPanel = {
  className: string;
  children: ReactElement;
  user: string;
  drawId: string | number;
  openModal: Function;
  label: string | number;
};

export const DrawDetailsPanel = ({
  className,
  children,
  openModal,
  drawId,
  label,
}: IDrawDetailsPanel) => {
  const [showModal, hideModal] = useModal(() => {
    return (
      <>
        <ModalPanel hideModal={hideModal} className="">
          <div className="">
            <h3 className="font-bold text-xl border-b-2 mb-3">Draw Settings</h3>
            <DrawSettings name="PrizeDistributionBuffer" drawId={drawId} />
          </div>
        </ModalPanel>
      </>
    );
  }, []);

  return (
    <span className="cursor-pointer" onKeyDown={showModal} onClick={showModal}>
      {label || children}
    </span>
  );
};

DrawDetailsPanel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

DrawDetailsPanel.defaultProps = {
  className: 'panel',
};

export default DrawDetailsPanel;
