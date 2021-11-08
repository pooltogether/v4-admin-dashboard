import React from 'react';

import { AppPageHeader } from '@src/components/App/AppPageHeader';
import { ContractMulticallAndRender } from '@src/components/Web3/Contracts/ContractMulticallAndRender';
import { ContractReadValuesGenericRender } from '@src/components/Web3/Contracts/ContractReadValuesGenericRender';
import { InterfaceL2TimelockTrigger } from '@src/contracts/interfaces';
import { Admin } from '@src/templates/Admin';

const ContractL2TimelockTriggerReadAll = () => {
  const methods = ['owner', 'manager', 'prizeDistributionBuffer', 'timelock'];
  const inputs = [];

  return (
    <div className="card my-5">
      <AppPageHeader
        className="mt-0"
        title="L2TimelockTrigger"
        description="Manage DrawCalculator timelock paramters"
      />
      <ContractMulticallAndRender
        contractInterface={InterfaceL2TimelockTrigger}
        contractName="L2TimelockTrigger"
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

ContractL2TimelockTriggerReadAll.layout = Admin;

export default ContractL2TimelockTriggerReadAll;
