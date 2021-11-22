import classNames from 'classnames';

interface Web3TypeRenderProps {
  className?: string;
  classNameValue?: string;
  classNameLabel?: string;
  value?: any;
  type?: string;
  label?: string;
  internalType?: string;
}

export const Web3TypeRender = ({
  className,
  classNameLabel,
  classNameValue,
  value,
  type,
  label,
  internalType,
  ...props
}: Web3TypeRenderProps) => {
  const styleBase = classNames(className, 'web3-type');
  const styleLabel = classNames(classNameLabel, 'web3-type');
  const styleValue = classNames(classNameValue, 'web3-type');
  switch (type) {
    case 'uint32':
    case 'uint64':
    case 'uint128':
      return (
        <span className={styleBase}>
          {label && <span className={styleLabel}>{label}</span>}{' '}
          <span className={styleValue}>{`${value.toString()}`}</span>
        </span>
      );
    case 'uint256':
      return (
        <span className={styleBase}>
          {label && <span className={styleLabel}>{label}</span>}{' '}
          <span className={styleValue}>{`${value.toString()}`}</span>
        </span>
      );
    case 'address':
      return (
        <span className={styleBase}>
          {label && <span className={styleLabel}>{label}</span>}{' '}
          <span className={styleValue}>{`${value}`}</span>
        </span>
      );
    case 'string':
    case 'bool':
      return (
        <span className={styleBase}>
          {label && <span className={styleLabel}>{label}</span>}{' '}
          <span className={styleValue}>{`${value}`}</span>
        </span>
      );
    default:
      return (
        <span className={styleBase}>
          {label && <span className={styleLabel}>{label}</span>}{' '}
          <span className={styleValue}>No Type Found</span>
        </span>
      );
  }
};

export default Web3TypeRender;
