import React from 'react';
import { ERC20Balance } from '@src/components/Web3/ERC20/ERC20Balance';
import { ERC20Name } from '@src/components/Web3/ERC20/ERC20Name';
import { ERC20Symbol } from '@src/components/Web3/ERC20/ERC20Symbol';

type IERC20DetailsBasic = {
  address: string;
  className: string;
  showSymbol: Boolean;
};

export const ERC20DetailsBasic = ({
  address,
  className,
  showSymbol
}: IERC20DetailsBasic) => {
  return (
    <div className={className}>
      <span className="font-bold">
        <ERC20Symbol address={address} />
        {showSymbol && (
          <span className="italic">
            (<ERC20Name address={address} />
            ):
          </span>
        )}
      </span>
      <span className="ml-1">
        <ERC20Balance address={address} />
      </span>
    </div>
  );
};
export default ERC20DetailsBasic;
