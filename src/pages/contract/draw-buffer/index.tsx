import React from 'react';

import { Meta } from '@src/layout/Meta';
import { Admin } from '@src/templates/Admin';
import ContractDrawBufferReadAll from '@src/views/contract/ContractDrawBufferReadAll';

const ContractDrawBuffer = () => {
  return (
    <div className="page--contact-draw-buffer">
      <Meta
        title="DrawBuffer Contract - V4 PoolTogether"
        description="PoolTogether V4 Admin Dashbard"
      />
      <ContractDrawBufferReadAll />
    </div>
  );
};

ContractDrawBuffer.layout = Admin;

export default ContractDrawBuffer;
