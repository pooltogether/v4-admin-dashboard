import React from 'react';

import { DrawBeaconCancelDrawButton } from '@src/components/PoolTogether/DrawBeacon/DrawBeaconCancelDrawButton';
import { DrawBeaconCompleteDrawButton } from '@src/components/PoolTogether/DrawBeacon/DrawBeaconCompleteDrawButton';
import { DrawBeaconStartDrawButton } from '@src/components/PoolTogether/DrawBeacon/DrawBeaconStartDrawButton';
import { FormDrawBeaconSetBeaconPeriodSeconds } from '@src/components/PoolTogether/DrawBeacon/Form/FormDrawBeaconSetBeaconPeriodSeconds';
import { ChainSwitch } from '@src/components/Web3/Chain/ChainSwitch';
import { Meta } from '@src/layout/Meta';
import { Admin } from '@src/templates/Admin';
import ContractDrawBeaconReadAll from '@src/views/contract/ContractDrawBeaconReadAll';

const ContractDrawBeacon = () => {
  return (
    <div className="page--treasury">
      <Meta title="Treasury - V4 PoolTogether" description="PoolTogether V4 Admin Dashbard" />
      <div className="grid grid-cols-12 pb-4">
        <div className="col-span-6 flex items-center">
          <DrawBeaconStartDrawButton />
          <DrawBeaconCompleteDrawButton className="mx-2" />
          <DrawBeaconCancelDrawButton />
        </div>
        <div className="col-span-6 flex justify-end">
          <ChainSwitch />
        </div>
      </div>
      <ContractDrawBeaconReadAll />
      <div className="grid grid-cols-12 gap-x-10 mt-10">
        <div className="card col-span-4">
          <h3 className="font-bold text-2xl">Set Beacon Period Seconds</h3>
          <p className="">
            The beacon period seconds is the amount of time that must between each new Draw request.
          </p>
        </div>
        <div className="card col-span-8">
          <FormDrawBeaconSetBeaconPeriodSeconds />
        </div>
      </div>
    </div>
  );
};

ContractDrawBeacon.layout = Admin;

export default ContractDrawBeacon;
