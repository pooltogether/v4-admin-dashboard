import { Web3TypeRender } from '@src/components/Web3/Web3TypeRender';
import classNames from 'classnames';
import idx from 'idx';

interface ContractReadValuesGenericRenderProps {
  className: string;
  classNameRender?: string;
  classNameValue?: string;
  classNameLabel?: string;
  values: any[];
}

export const ContractReadValuesGenericRender = ({
  className,
  classNameRender,
  classNameLabel,
  classNameValue,
  values,
}: ContractReadValuesGenericRenderProps) => {
  const styleBase = classNames(className, 'ContractReadValuesGenericRender');
  if (!values) return null;
  return (
    <div className={styleBase}>
      {values.map((value, index) =>
        !idx(value, (_) => _.type) ? null : (
          <Web3TypeRender
            className={classNameRender}
            classNameValue={classNameValue}
            classNameLabel={classNameLabel}
            key={index}
            value={value.value}
            type={value.type}
            internalType={value.internalType}
            label={value.name}
          />
        )
      )}
    </div>
  );
};

export default ContractReadValuesGenericRender;
