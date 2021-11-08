import React from 'react';

import { Meta } from '@src/layout/Meta';
import { Admin } from '@src/templates/Admin';
import ContractDrawCalculatorReadAll from '@src/views/contract/ContractDrawCalculatorReadAll';

const ContractDrawCalculator = () => {
  return (
    <div className="page--contact-draw-calculator">
      <Meta
        title="DrawCalculator Contract - V4 PoolTogether"
        description="PoolTogether V4 Admin Dashbard"
      />
      <ContractDrawCalculatorReadAll />
    </div>
  );
};

ContractDrawCalculator.layout = Admin;

export default ContractDrawCalculator;
