// @ts-nocheck
import React from 'react';

import { TransactionErrorNotification } from '@src/components/Web3/Transaction/TransactionErrorNotification';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { usePrizeDistributionBufferFunction } from '@src/hooks/usePrizeDistributionBuffer';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

interface FormPrizeDistributionBufferPushPrizeDistributionProps {
  className?: string;
  label?: string;
  labelButton?: string | any;
  onSubmitHandle?: (data: any) => void;
}

export function FormPrizeDistributionBufferPushPrizeDistribution({
  className,
  label,
  labelButton = 'Submit',
  onSubmitHandle,
}: FormPrizeDistributionBufferPushPrizeDistributionProps) {
  const { register, handleSubmit } = useForm();
  const address = useGetContractAddress('PrizeDistributionBuffer');
  const [execute, state] = usePrizeDistributionBufferFunction(address, 'pushPrizeDistribution', {});
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

        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-3">
            <label className="label">Bit Range Size</label>
            <input
              className="input input-default"
              {...register('bitRangeSize')}
              placeholder="BitRangeSize"
            />
          </div>
          <div className="col-span-3">
            <label className="label">Match Cardinality</label>
            <input
              className="input input-default"
              {...register('matchCardinality')}
              placeholder="Match Cardinality"
            />
          </div>
          <div className="col-span-3">
            <label className="label">Start Timestamp Offset</label>
            <input
              className="input input-default"
              {...register('startTimestampOffset')}
              placeholder="Start Timestamp Offset"
            />
          </div>
          <div className="col-span-3">
            <label className="label">End Timestamp Offset</label>
            <input
              className="input input-default"
              {...register('endTimestampOffset')}
              placeholder="End Timestamp Offset"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-4 mt-6">
          <div className="col-span-3">
            <label className="label">Max Pickers Per User</label>
            <input
              className="input input-default"
              {...register('maxPicksPerUser')}
              placeholder="Max Picks Per User"
            />
          </div>
          <div className="col-span-3">
            <label className="label">Expiry Duration</label>
            <input
              className="input input-default"
              {...register('expiryDuration')}
              placeholder="Expiry Duration"
            />
          </div>
          <div className="col-span-3">
            <label className="label">Number of Picks</label>
            <input
              className="input input-default"
              {...register('numberOfPicks')}
              placeholder="Number of Picks"
            />
          </div>
          <div className="col-span-3">
            <label className="label">Prize</label>
            <input className="input input-default" {...register('prize')} placeholder="Prize" />
          </div>
        </div>

        <button className={styleButton} type="submit">
          {labelButton}
        </button>
      </form>
    </div>
  );
}

export default FormPrizeDistributionBufferPushPrizeDistribution;
