import classNames from 'classnames';

interface ContractIsolatedMultiacallProps {
  className: string;
}

export const ContractIsolatedMulticall = ({ className }: ContractIsolatedMultiacallProps) => {
  const styleBase = classNames(className, '');
  return <div className={styleBase}></div>;
};

export default ContractIsolatedMulticall;
