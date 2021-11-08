import React from 'react';

import { AppPageHeader } from '@src/components/App/AppPageHeader';
import { ContractMulticallAndRender } from '@src/components/Web3/Contracts/ContractMulticallAndRender';
import { ContractReadValuesGenericRender } from '@src/components/Web3/Contracts/ContractReadValuesGenericRender';
import { InterfaceTicket } from '@src/contracts/interfaces';
import { Admin } from '@src/templates/Admin';

const ContractTicketReadAll = () => {
  const methods = ['owner', 'name', 'symbol', 'decimals', 'totalSupply'];
  const inputs = [];

  return (
    <div className="card my-5">
      <AppPageHeader className="mt-0" title="Ticket" description="Create and Propagates Draws" />
      <ContractMulticallAndRender
        contractInterface={InterfaceTicket}
        contractName="Ticket"
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

ContractTicketReadAll.layout = Admin;

export default ContractTicketReadAll;
