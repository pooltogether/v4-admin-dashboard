import { ChainSwitch } from '@src/components/Web3/Chain/ChainSwitch';
import ContractDrawBeaconReadAll from '@src/views/contract/ContractDrawBeaconReadAll';
import ContractDrawBufferReadAll from '@src/views/contract/ContractDrawBufferReadAll';
import ContractDrawCalculatorReadAll from '@src/views/contract/ContractDrawCalculatorReadAll';
import ContractDrawCalculatorTimelockReadAll from '@src/views/contract/ContractDrawCalculatorTimelockReadAll';
import ContractL1TimelockTriggerReadAll from '@src/views/contract/ContractL1TimelockTriggerReadAll';
import ContractL2TimelockTriggerReadAll from '@src/views/contract/ContractL2TimelockTriggerReadAll';
import ContractPrizeDistributionBufferReadAll from '@src/views/contract/ContractPrizeDistributionBufferReadAll';
import ContractPrizeTierHistoryReadAll from '@src/views/contract/ContractPrizeTierHistoryReadAll';
import ContractTicketReadAll from '@src/views/contract/ContractTicketReadAll';

import { Meta } from '../layout/Meta';
import { Admin } from '../templates/Admin';

const Index = () => {
  return (
    <div className="">
      <Meta title="V4 Admin Dashboard" description="PoolTogether V4 Admin Dashbard" />
      <div className="grid grid-cols-12 pb-4">
        <div className="col-span-6 flex items-center">
          <h3 className="font-light text-3xl m-0">
            <span className="text-gray-600">V4:</span>{' '}
            <span className="font-bold text-purple-700">Overview</span>
          </h3>
        </div>
        <div className="col-span-6 flex justify-end">
          <ChainSwitch />
        </div>
      </div>
      {/* <FormPrizeDistributorSetDrawCalculator /> */}
      <ContractPrizeTierHistoryReadAll />
      <ContractTicketReadAll />
      <ContractDrawBeaconReadAll />
      <ContractDrawBufferReadAll />
      <ContractPrizeDistributionBufferReadAll />
      <ContractDrawCalculatorReadAll />
      <ContractDrawCalculatorTimelockReadAll />
      <ContractL1TimelockTriggerReadAll />
      <ContractL2TimelockTriggerReadAll />
    </div>
  );
};

Index.layout = Admin;

export default Index;
