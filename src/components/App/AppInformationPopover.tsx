import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { Info } from 'react-feather';
import { Popover, PopoverPosition } from 'react-tiny-popover';

interface AppInformationPopoverProps {
  className?: string;
  classNameContainer?: string;
  content?: any;
  size?: string | number;
  positions?: PopoverPosition[];
}

export const AppInformationPopover = ({
  className,
  classNameContainer,
  content,
  positions,
  size = 16,
}: AppInformationPopoverProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const toggle = () => setIsPopoverOpen(!isPopoverOpen);

  const styleIcon = classNames('cursor-pointer hover-up', className);
  const positionConfig = positions || ['top', 'bottom', 'left', 'right'];

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={positionConfig}
      onClickOutside={() => setIsPopoverOpen(false)}
      content={<div className="card m-3">{content}</div>}
    >
      <span onClick={toggle} className={classNameContainer}>
        <Info className={styleIcon} size={size} />
      </span>
    </Popover>
  );
};
export default AppInformationPopover;

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      console.log(event);
      if (ref.current && ref.current.contains(event.target)) {
        alert('You clicked outside of me!');
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
