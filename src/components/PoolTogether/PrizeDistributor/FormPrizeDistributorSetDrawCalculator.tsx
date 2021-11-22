// @ts-nocheck
import React from 'react';

import { TransactionErrorNotification } from '@src/components/Web3/Transaction/TransactionErrorNotification';
import { usePrizeDistributorFunction } from '@src/hooks/contracts/usePrizeDistributor';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

interface FormPrizeDistributorSetDrawCalculatorProps {
  className?: string;
  label?: string;
  labelButton?: string | any;
  onSubmitHandle?: (data: any) => void;
}

export function FormPrizeDistributorSetDrawCalculator({
  className,
  label,
  labelButton = 'Submit',
  onSubmitHandle,
}: FormPrizeDistributorSetDrawCalculatorProps) {
  const { register, handleSubmit } = useForm();
  const address = useGetContractAddress('PrizeDistributor');
  const [execute, state] = usePrizeDistributorFunction(
    address,
    'setDrawCalculator',
    {}
  );
  const styleButton = classNames('btn btn-green font-thin text-lg mt-2 w-full');
  const styleLabel = classNames('font-semibold mb-2 text-4xl');

  const onSubmit = (data: any) => {
    const { drawCalculator } = data;
    execute(drawCalculator);
    if (onSubmitHandle) {
      onSubmitHandle(data);
    }
  };
  return (
    <div className={className}>
      <TransactionErrorNotification
        address={address}
        state={state}
        label="DrawBeacon"
        description="Manage V4 Beacon Period Seconds"
        config={{ duration: 5000 }}
      />
      {label && (
        <div className="border-b-2 mb-4">
          <h4 className={styleLabel}>{label}</h4>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field-label-input-collection">
          <label className="label text-xl">Draw Calculator</label>
          <input
            className="input input-lg mb-0"
            {...register('drawCalculator')}
            placeholder="Draw Calculator"
          />
        </div>
        <button className={styleButton} type="submit">
          {labelButton}
        </button>
      </form>
    </div>
  );
}

export default FormPrizeDistributorSetDrawCalculator;
