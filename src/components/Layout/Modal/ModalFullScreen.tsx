import { MouseEventHandler, useEffect, useState } from 'react';

import classnames from 'classnames';
import Head from 'next/head';
import { useSpring, animated } from 'react-spring';

interface IModalFullScreen {
  children: any;
  className: string;
  hideModal: Function | MouseEventHandler;
  position: string;
}

export const ModalFullScreen = ({
  children,
  className,
  hideModal,
}: IModalFullScreen) => {
  const [show, setShow] = useState(false);

  // Animate Background
  const animateBackground = useSpring({
    from: {
      background: '#000',
      opacity: 0,
    },
    to: {
      opacity: 0.25,
    },
    reverse: show,
    delay: 0,
  });

  // Animate Panel
  const animatePanel = useSpring({
    from: { opacity: 0, transform: `translate3d(250px, 0px, 0px)` },
    to: { opacity: 1, transform: `translate3d(0px, 0px, 0px)` },
    enter: { opacity: 1, transform: `translate3d(0px, 0px, 0px)` },
    leave: { opacity: 0, transform: `translate3d(250px, 0px, 0px)` },
    reverse: show,
    delay: 100,
  });

  // Style Panel
  const stylePanel = classnames(
    'fixed top-10 bottom-10 left-10 right-10 bg-white rounded-3xl p-8 w-100 w-5/4 z-100',
    className
  );

  const handleCloseModal = () => {
    setShow(true);
    setTimeout(() => {
      hideModal();
    }, 400);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <body className="TEST" />
      </Head>
      <animated.div
        onClick={handleCloseModal}
        className={'fixed top-0 bottom-0 left-0 right-0 z-10'}
        style={{ ...animateBackground, zIndex: 999 }}
      />
      <animated.div
        className={stylePanel}
        style={{ ...animatePanel, zIndex: 1000 }}
      >
        <div className="block relative text-right mb-6 -mt-4">
          <span onClick={hideModal} className="tag tag-gray cursor-pointer">
            <span className="">CLOSE</span>
          </span>
        </div>
        <div className="overflow-auto h-full">{children}</div>
      </animated.div>
    </>
  );
};

ModalFullScreen.defaultProps = {
  className: '',
  position: 'right',
};

export default ModalFullScreen;
