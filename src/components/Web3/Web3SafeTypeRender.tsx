import { isBigNumber } from '@src/utils/is';
import classNames from 'classnames';

interface Web3SafeTypeRenderProps {
  className?: string;
  classNameValue?: string;
  classNameLabel?: string;
  value?: any;
  label?: string;
}

export const Web3SafeTypeRender = ({
  className,
  classNameLabel,
  classNameValue,
  value,
  label,
}: Web3SafeTypeRenderProps) => {
  const styleBase = classNames(className, 'web3-safe-type');
  const styleLabel = classNames(classNameLabel, 'web3-safe-type_label');
  const styleValue = classNames(classNameValue, 'web3-safe-type_value');

  const determineTypeAndRender = (valueToRender: any) => {
    let jsType;
    if (typeof valueToRender === 'string') {
      jsType = 'string';
    }
    if (typeof valueToRender === 'object') {
      if (isBigNumber(valueToRender)) {
        jsType = 'bigNumber';
      }
      if (Array.isArray(valueToRender)) {
        jsType = 'array';
      }
    }

    switch (jsType) {
      case 'string':
        return valueToRender;
      case 'bigNumber':
        return valueToRender.toString();
      case 'array':
        return valueToRender.map((item: any, idx: number) => (
          <span key={idx} className="label-internal">
            {determineTypeAndRender(item)},{' '}
          </span>
        ));
      case 'object':
        return Object.values(valueToRender).map((item: any) =>
          determineTypeAndRender(item)
        );
      default:
        return valueToRender;
    }
  };

  return (
    <span className={styleBase}>
      {label && <span className={styleLabel}>{label}</span>}{' '}
      <span className={styleValue}>{determineTypeAndRender(value)}</span>
    </span>
  );
};

export default Web3SafeTypeRender;
