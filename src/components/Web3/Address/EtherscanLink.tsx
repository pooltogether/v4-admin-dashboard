/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { ReactNode } from 'react';

interface IEtherscanLink {
  children: ReactNode;
  address: string;
  className: string;
  hash: string;
  type: string;
}

/**
 * @name EtherscanLink
 * @param {Object} props
 */
export const EtherscanLink = ({
  address,
  className,
  hash,
  type,
  children,
}: IEtherscanLink) => {
  if (type === 'transaction')
    return (
      <a
        className={className}
        target="_blank"
        href={`https://etherscan.io/tx/${hash}`}
        rel="noreferrer"
      >
        {children}
      </a>
    );

  return (
    <a
      className={className}
      target="_blank"
      href={`https://etherscan.io/address/${address}`}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

EtherscanLink.defaultProps = {
  address: undefined,
  hash: undefined,
  type: 'address',
};

export default EtherscanLink;
