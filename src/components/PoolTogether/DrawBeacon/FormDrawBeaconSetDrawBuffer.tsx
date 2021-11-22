// @ts-nocheck
import React from 'react';

import { TransactionErrorNotification } from '@src/components/Web3/Transaction/TransactionErrorNotification';
import { usePrizeDistributionBufferFunction } from '@src/hooks/contracts/usePrizeDistributionBuffer';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

interface FormDrawBeaconSetDrawBufferProps {
  className?: string;
  label?: string;
  labelButton?: string | any;
  onSubmitHandle?: (data: any) => void;
}

export function FormDrawBeaconSetDrawBuffer({
  className,
  label,
  labelButton = 'Submit',
  onSubmitHandle,
}: FormDrawBeaconSetDrawBufferProps) {
  const { register, handleSubmit } = useForm();
  const address = useGetContractAddress('PrizeDistributionBuffer');
  const [execute, state] = usePrizeDistributionBufferFunction(address, 'setPrizeDistribution', {});
  const styleButton = classNames('btn btn-green font-thin text-lg mt-4 w-full');
  const styleLabel = classNames('font-semibold mb-2 text-4xl');

  const onSubmit = (data: any) => {
    const {
      drawId,
      bitRangeSize,
      matchCardinality,
      startTimestampOffset,
      endTimestampOffset,
      maxPicksPerUser,
      expiryDuration,
      numberOfPicks,
      prize,
    } = data;

    const params = {
      bitRangeSize,
      matchCardinality,
      startTimestampOffset,
      endTimestampOffset,
      maxPicksPerUser,
      expiryDuration,
      numberOfPicks,
      tiers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      prize,
    };

    execute(drawId, params);
    if (onSubmitHandle) {
      onSubmitHandle(data);
    }
  };

  return (
    <div className={className}>
      <TransactionErrorNotification
        address={address}
        state={state}
        label="PrizeDistributionBuffer"
        description="Manage V4 Prize Distributions"
        config={{ duration: 100000 }}
      />
      {label && (
        <div className="border-b-2 mb-4">
          <h4 className={styleLabel}>{label}</h4>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field-label-input-collection">
          <label className="label text-xl">Draw ID</label>
          <input className="input input-lg mb-0" {...register('drawId')} placeholder="Draw ID" />
        </div>
        <hr className="mb-6 mt-3 border-2" />

        <button className={styleButton} type="submit">
          {labelButton}
        </button>
      </form>
    </div>
  );
}

export default FormDrawBeaconSetDrawBuffer;
