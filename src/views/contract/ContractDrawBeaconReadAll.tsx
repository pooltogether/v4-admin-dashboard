import React from 'react';

import { AppPageHeader } from '@src/components/App/AppPageHeader';
import { ContractMulticallAndRender } from '@src/components/Web3/Contracts/ContractMulticallAndRender';
import { ContractReadValuesGenericRender } from '@src/components/Web3/Contracts/ContractReadValuesGenericRender';
import { InterfaceDrawBeacon } from '@src/contracts/interfaces';
import { Admin } from '@src/templates/Admin';

const ContractDrawBeacon = () => {
  const methods = [
    'owner',
    'getDrawBuffer',
    'getRngService',
    'canStartDraw',
    'canCompleteDraw',
    'calculateNextBeaconPeriodStartTimeFromCurrentTime',
    'calculateNextBeaconPeriodStartTime',
    'beaconPeriodRemainingSeconds',
    'beaconPeriodEndAt',
    'getNextDrawId',
    'getLastRngLockBlock',
    'getLastRngRequestId',
    'getRngTimeout',
    'isBeaconPeriodOver',
    'isRngCompleted',
    'isRngRequested',
    'isRngTimedOut',
  ];
  const inputs = [];

  return (
    <div className="card">
      <AppPageHeader
        className="mt-0"
        title="DrawBeacon"
        description="Create and Propagates Draws"
      />
      <ContractMulticallAndRender
        contractInterface={InterfaceDrawBeacon}
        contractName="DrawBeacon"
        methods={methods}
        args={inputs}
        component={(props) => (
          <>
            <ContractReadValuesGenericRender
              className="text-base block px-8 pb-8 pt-5 shadow-md border-t-2 rounded-xl mt-5 "
              classNameRender="flex justify-between border-b-2 py-2 "
              classNameValue="text-sm"
              classNameLabel="font-bold text-sm"
              values={props.values}
            />
          </>
        )}
      />
    </div>
  );
};

ContractDrawBeacon.layout = Admin;

export default ContractDrawBeacon;
