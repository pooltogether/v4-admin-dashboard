import React from 'react';

import { DrawBeaconCancelDrawButton } from '@src/components/PoolTogether/DrawBeacon/DrawBeaconCancelDrawButton';
import { DrawBeaconCompleteDrawButton } from '@src/components/PoolTogether/DrawBeacon/DrawBeaconCompleteDrawButton';
import { DrawBeaconStartDrawButton } from '@src/components/PoolTogether/DrawBeacon/DrawBeaconStartDrawButton';
import { FormPrizeDistributionBufferSetPrizeDistribution } from '@src/components/PrizeDistribution/FormPrizeDistributionBufferSetPrizeDistribution';
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
          <DrawBeaconCancelDrawButton classNameConnected="btn-blue" />
        </div>
        <div className="col-span-6 flex justify-end">
          <ChainSwitch />
        </div>
      </div>
      <ContractDrawBeaconReadAll />
      <div className="grid grid-cols-12 mt-10">
        <div className="card col-span-8">
          <FormPrizeDistributionBufferSetPrizeDistribution />
        </div>
      </div>
    </div>
  );
};

ContractDrawBeacon.layout = Admin;

export default ContractDrawBeacon;
