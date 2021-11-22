import React from 'react';

import { TransactionErrorNotification } from '@src/components/Web3/Transaction/TransactionErrorNotification';
import { useERC20Function } from '@src/hooks/contracts/useERC20';
import classNames from 'classnames';
import { utils } from 'ethers';
import { useForm } from 'react-hook-form';

interface FormERC20TransferProps {
  className?: string;
  address?: string;
  title?: string;
  decimals?: string | number;
  contract?: string;
  label?: string;
  onSubmitHandle?: (data: any) => void;
}

export function FormERC20Transfer({
  className,
  address,
  decimals,
  title,
  contract,
  label,
  onSubmitHandle,
}: FormERC20TransferProps) {
  const { register, handleSubmit } = useForm();
  const [executeTransaction, stateTransaction] = useERC20Function(address, 'transfer', {});
  const styleButton = classNames('btn btn-green font-thin text-2xl mt-4 w-full');
  const styleTitle = classNames('font-semibold mb-2 text-4xl');
  const styleLabel = classNames('font-light text-gray-600 mb-2 text-xl');

  const onSubmit = (data: any) => {
    const { amount, to } = data;

    const amountToSend = utils.parseUnits(amount, decimals);

    executeTransaction(to, amountToSend);
    if (onSubmitHandle) {
      onSubmitHandle(data);
    }
  };

  return (
    <div className={className}>
      <TransactionErrorNotification
        address={address}
        state={stateTransaction}
        label="ERC20"
        description="Standard ERC20 Contract Interface"
        config={{ duration: 100000 }}
      />
      {title && (
        <div className="border-b-2 mb-4">
          <h4 className={styleTitle}>
            {title} {contract && <span className={styleLabel}>{contract}</span>}
          </h4>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-6 gap-x-4">
          <div className="col-span-3">
            <label className="label">Amount</label>
            <input className="input input-default" {...register('amount')} placeholder="Amount" />
          </div>
          <div className="col-span-3">
            <label className="label">To</label>
            <input className="input input-default" {...register('to')} placeholder="To" />
          </div>
        </div>
        <button className={styleButton} type="submit">
          {label}
        </button>
      </form>
    </div>
  );
}

export default FormERC20Transfer;
