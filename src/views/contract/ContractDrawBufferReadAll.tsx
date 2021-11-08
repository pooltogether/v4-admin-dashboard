import React from 'react';

import { AppPageHeader } from '@src/components/App/AppPageHeader';
import { ContractMulticallAndRender } from '@src/components/Web3/Contracts/ContractMulticallAndRender';
import { ContractReadValuesGenericRender } from '@src/components/Web3/Contracts/ContractReadValuesGenericRender';
import { InterfaceDrawBuffer } from '@src/contracts/interfaces';
import { Admin } from '@src/templates/Admin';

const ContractDrawBufferReadAll = () => {
  const methods = [
    'owner',
    'manager',
    'getBufferCardinality',
    'getDrawCount',
    'getNewestDraw',
    'getOldestDraw',
  ];
  const inputs = [];

  return (
    <div className="card my-5">
      <AppPageHeader className="mt-0" title="DrawBuffer" description="Stores the Draw history" />
      <ContractMulticallAndRender
        contractInterface={InterfaceDrawBuffer}
        contractName="DrawBuffer"
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

ContractDrawBufferReadAll.layout = Admin;

export default ContractDrawBufferReadAll;
