import { ReactElement } from 'react';

import { trimString } from '@src/utils/convert';
import { BigNumber, BigNumberish } from 'ethers';

interface IBigNumberToString {
  bigNumber: BigNumberish;
  className?: string;
  trim?: number;
}

export const BigNumberToString = ({
  bigNumber,
  className,
  trim = 0,
}: IBigNumberToString): ReactElement | null => {
  if (BigNumber.isBigNumber(bigNumber) || typeof bigNumber === 'number') {
    if (trim > 0) {
      return <span className={className}>{trimString(bigNumber.toString(), trim)}</span>;
    }
    return <span className={className}>{bigNumber.toString()}</span>;
  }
  return <span className={className}>{bigNumber}</span>;
};

export default BigNumberToString;
