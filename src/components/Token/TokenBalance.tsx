import { useMemo } from 'react';

import { transformAndCommifyBigNumber } from '@src/utils/convert';
import classNames from 'classnames';
import { BigNumberish } from 'ethers';

interface ITokenBalance {
  className?: string;
  amount: BigNumberish;
  decimals?: string | number;
  trim?: string | number;
}

export const TokenBalance = ({
  className,
  amount,
  decimals,
  trim,
}: ITokenBalance) => {
  return useMemo(() => {
    return (
      <span className={classNames('inline-block', className)}>
        {transformAndCommifyBigNumber(amount, decimals, trim)}
      </span>
    );
  }, [amount, decimals, className, trim]);
};

export default TokenBalance;
