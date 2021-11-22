import { ReactNode, useEffect, useState } from 'react';

import { utils } from 'ethers';
import PropTypes from 'prop-types';

type ITokenImage = {
  address: string;
  className: string;
  classNameContainer: string;
  width: string | number;
  children: ReactNode;
};

/**
 * @name TokenImage
 * @param {Object} props
 */
export const TokenImage = ({ address, width, className, classNameContainer }: ITokenImage) => {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    if (utils.isAddress(address)) {
      const addressChecksum = utils.getAddress(address);
      setImage(
        `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${addressChecksum}/logo.png`
      );
    } else {
      // setImage(false);
    }
  }, [address]);

  if (image) {
    return (
      <span className={classNameContainer}>
        <img
          alt="Token Icon"
          className={className}
          src={image}
          // onError={() => setImage(0)}
          width={width}
        />
      </span>
    );
  }
  return null;
};

TokenImage.propTypes = {
  address: PropTypes.string,
  width: PropTypes.oneOfType([(PropTypes.string, PropTypes.number)]),
};

TokenImage.defaultProps = {
  width: 22,
};
