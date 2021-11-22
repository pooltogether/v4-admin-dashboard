import classNames from 'classnames';

interface ContractAddressUnavailableProps {
  className?: string;
  classNameLabel?: string;
  label?: string;
}

export const ContractAddressUnavailable = ({
  className,
  classNameLabel,
  label,
}: ContractAddressUnavailableProps) => {
  const styleBase = classNames(className, 'ContractAddressUnavailable');
  const styleLabel = classNames(
    classNameLabel,
    'ContractAddressUnavailable__label'
  );
  return (
    <div className={styleBase}>
      <span className={styleLabel}>{label}</span>
    </div>
  );
};

export default ContractAddressUnavailable;
