// @ts-nocheck
import React from 'react';

import { TransactionErrorNotification } from '@src/components/Web3/Transaction/TransactionErrorNotification';
import { useDrawBeaconFunction } from '@src/hooks/contracts/useDrawBeacon';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

interface FormDrawBeaconSetBeaconPeriodSecondsProps {
  className?: string;
  label?: string;
  labelButton?: string | any;
  onSubmitHandle?: (data: any) => void;
}

export function FormDrawBeaconSetBeaconPeriodSeconds({
  className,
  label,
  labelButton = 'Submit',
  onSubmitHandle,
}: FormDrawBeaconSetBeaconPeriodSecondsProps) {
  const { register, handleSubmit } = useForm();
  const address = useGetContractAddress('DrawBeacon');
  const [execute, state] = useDrawBeaconFunction(address, 'setBeaconPeriodSeconds', {});
  const styleButton = classNames('btn btn-green font-thin text-lg mt-2 w-full');
  const styleLabel = classNames('font-semibold mb-2 text-4xl');

  const onSubmit = (data: any) => {
    const { beaconPeriodSeconds } = data;
    execute(beaconPeriodSeconds);
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
          <label className="label text-xl">Beacon Period Seconds</label>
          <input
            className="input input-lg mb-0"
            {...register('beaconPeriodSeconds')}
            placeholder="Beacon Period Seconds"
          />
        </div>
        <button className={styleButton} type="submit">
          {labelButton}
        </button>
      </form>
    </div>
  );
}

export default FormDrawBeaconSetBeaconPeriodSeconds;
