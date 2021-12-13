<p align="center">
  <a href="https://github.com/pooltogether/pooltogether--brand-assets">
    <img src="https://github.com/pooltogether/pooltogether--brand-assets/blob/977e03604c49c63314450b5d432fe57d34747c66/logo/pooltogether-logo--purple-gradient.png?raw=true" alt="PoolTogether Brand" style="max-width:100%;" width="200">
  </a>
</p>

<br />

# PoolTogether V4 Admin Dashboard

![CI](https://github.com/pooltogether/v4-admin-dashboard/actions/workflows/main.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/pooltogether/v4-admin-dashboard/badge.svg?branch=master)](https://coveralls.io/github/pooltogether/v4-admin-dashboard?branch=master)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)


The PoolTogether V4 Admin Dashboard simplifies reading and writing to the V4 protocol smart contracts. 

[admin.pooltogether.com](https://admin.pooltogether.com/)

# Getting Started

## Development
```.sh
yarn dev
```

## Production

```.sh
yarn build
```

When the `production` is updated a new build will be deployed on Netlify.

# Overview
### Core Web3 Components
The application is built with modularity in mind. Components can express what `data` is required and the fetching/normalizing for the frontend will be handled automatically.

 - [ContractIsolatedMulticall](https://github.com/pooltogether/v4-admin-dashboard/blob/master/src/components/Web3/Contracts/ContractIsolatedMulticall.tsx)
 - [ContractMulticallAndRender](https://github.com/pooltogether/v4-admin-dashboard/blob/master/src/components/Web3/Contracts/ContractMulticallAndRender.tsx)
 - [ContractReadValuesGenericRender](https://github.com/pooltogether/v4-admin-dashboard/blob/master/src/components/Web3/Contracts/ContractReadValuesGenericRender.tsx)
 - [GenericReadFunction](https://github.com/pooltogether/v4-admin-dashboard/blob/master/src/components/Web3/Contracts/GenericReadFunction.tsx)
 - [Web3TypeRender](https://github.com/pooltogether/v4-admin-dashboard/blob/master/src/components/Web3/Web3TypeRender.tsx)
 - [Web3SafeTypeRender](https://github.com/pooltogether/v4-admin-dashboard/blob/master/src/components/Web3/Web3SafeTypeRender.tsx)

 ### Example View

 The `ContractDrawBeacon` view defines with `reads` should be executed and the values are passed to dynamic render component.

 Ideally, the generic render components utilize the Tailwind CSS classes for modularity and minimally perriptive in design.

 ```js
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
    'getBeaconPeriodSeconds',
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

```

# Changelog

**0.0.1:** Calculate PrizeDistributions and verify live parameters in the monitor view.
