import { useState } from 'react';

import classNames from 'classnames';
import { Info } from 'react-feather';
import { Popover } from 'react-tiny-popover';

interface AppInformationPopoverProps {
  className?: string;
  classNameContainer?: string;
  content?: any;
  size?: string | number;
}

export const AppInformationPopover = ({
  className,
  classNameContainer,
  content,
  size = 16,
}: AppInformationPopoverProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const toggle = () => setIsPopoverOpen(!isPopoverOpen);

  const styleIcon = classNames('cursor-pointer hover-up', className);

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['top', 'bottom', 'left', 'right']}
      content={<div className="card">{content}</div>}
    >
      <span onMouseEnter={toggle} onMouseLeave={toggle} className={classNameContainer}>
        <Info className={styleIcon} size={size} />
      </span>
    </Popover>
  );
};
export default AppInformationPopover;
