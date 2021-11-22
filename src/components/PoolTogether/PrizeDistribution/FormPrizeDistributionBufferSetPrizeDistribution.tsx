import React from 'react';

import { TransactionErrorNotification } from '@src/components/Web3/Transaction/TransactionErrorNotification';
import { usePrizeDistributionBufferFunction } from '@src/hooks/contracts/usePrizeDistributionBuffer';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { PrizeDistribution } from '@src/types';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

interface FormPrizeDistributionBufferSetPrizeDistributionProps {
  className?: string;
  label?: string;
  labelButton?: string | any;
  onSubmitHandle?: (data: any) => void;
  defaultValues?: {
    drawId?: string | number;
    prizeDistribution: PrizeDistribution;
  };
}

export function FormPrizeDistributionBufferSetPrizeDistribution({
  className,
  label,
  labelButton = 'Submit',
  defaultValues,
  onSubmitHandle,
}: FormPrizeDistributionBufferSetPrizeDistributionProps) {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });
  const address = useGetContractAddress('PrizeDistributionBuffer');
  const [execute, state] = usePrizeDistributionBufferFunction(address, 'setPrizeDistribution', {});
  const styleButton = classNames('btn btn-green font-thin text-lg mt-4 w-full');
  const styleLabel = classNames('font-semibold mb-2 text-4xl');

  const onSubmit = (data: any) => {
    const { drawId, prizeDistribution } = data;

    const {
      bitRangeSize,
      matchCardinality,
      startTimestampOffset,
      endTimestampOffset,
      maxPicksPerUser,
      expiryDuration,
      numberOfPicks,
      prize,
      tiers,
    } = prizeDistribution;

    let tiersParse;
    if (typeof tiers === 'string') {
      tiersParse = tiers.split(',');
    } else {
      tiersParse = tiers;
    }

    const params = {
      bitRangeSize,
      matchCardinality,
      startTimestampOffset,
      endTimestampOffset,
      maxPicksPerUser,
      expiryDuration,
      numberOfPicks,
      tiers: tiersParse,
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
              {...register('prizeDistribution.bitRangeSize')}
              placeholder="BitRangeSize"
            />
          </div>
          <div className="col-span-3">
            <label className="label">Match Cardinality</label>
            <input
              className="input input-default"
              {...register('prizeDistribution.matchCardinality')}
              placeholder="Match Cardinality"
            />
          </div>
          <div className="col-span-3">
            <label className="label">Start Timestamp Offset</label>
            <input
              className="input input-default"
              {...register('prizeDistribution.startTimestampOffset')}
              placeholder="Start Timestamp Offset"
            />
          </div>
          <div className="col-span-3">
            <label className="label">End Timestamp Offset</label>
            <input
              className="input input-default"
              {...register('prizeDistribution.endTimestampOffset')}
              placeholder="End Timestamp Offset"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-4 mt-6">
          <div className="col-span-3">
            <label className="label">Max Pickers Per User</label>
            <input
              className="input input-default"
              {...register('prizeDistribution.maxPicksPerUser')}
              placeholder="Max Picks Per User"
            />
          </div>
          <div className="col-span-3">
            <label className="label">Expiry Duration</label>
            <input
              className="input input-default"
              {...register('prizeDistribution.expiryDuration')}
              placeholder="Expiry Duration"
            />
          </div>
          <div className="col-span-3">
            <label className="label">Number of Picks</label>
            <input
              className="input input-default"
              {...register('prizeDistribution.numberOfPicks')}
              placeholder="Number of Picks"
            />
          </div>
          <div className="col-span-3">
            <label className="label">Prize</label>
            <input
              className="input input-default"
              {...register('prizeDistribution.prize')}
              placeholder="Prize"
            />
          </div>
        </div>

        <div className="col-span-3">
          <label className="label">Tiers</label>
          <input
            className="input input-default"
            {...register('prizeDistribution.tiers')}
            placeholder="Tiers"
          />
        </div>

        <button className={styleButton} type="submit">
          {labelButton}
        </button>
      </form>
    </div>
  );
}

export default FormPrizeDistributionBufferSetPrizeDistribution;
