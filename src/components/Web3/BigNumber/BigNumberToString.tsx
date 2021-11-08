import { ReactElement } from 'react';

import { commifyNumber, trimString } from '@src/utils/convert';
import { BigNumber, BigNumberish } from 'ethers';

interface IBigNumberToString {
  bigNumber: BigNumberish;
  className?: string;
  trim?: number;
  commify?: boolean;
}

export const BigNumberToString = ({
  bigNumber,
  className,
  trim = 0,
  commify,
}: IBigNumberToString): ReactElement | null => {
  if (BigNumber.isBigNumber(bigNumber) || typeof bigNumber === 'number') {
    if (trim > 0) {
      return <span className={className}>{trimString(bigNumber.toString(), trim)}</span>;
    }
    if (commify) {
      return <span className={className}>{commifyNumber(bigNumber.toString())}</span>;
    }
    return <span className={className}>{bigNumber.toString()}</span>;
  }
  return <span className={className}>{bigNumber}</span>;
};

export default BigNumberToString;
