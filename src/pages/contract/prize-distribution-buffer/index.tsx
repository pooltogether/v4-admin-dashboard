import { FormPrizeDistributionBufferPushPrizeDistribution } from '@src/components/PrizeDistribution/FormPrizeDistributionBufferPushPrizeDistribution';
import { FormPrizeDistributionBufferSetPrizeDistribution } from '@src/components/PrizeDistribution/FormPrizeDistributionBufferSetPrizeDistribution';
import { ChainSwitch } from '@src/components/Web3/Chain/ChainSwitch';
import { Meta } from '@src/layout/Meta';
import { Admin } from '@src/templates/Admin';
import ContractPrizeDistributionBufferReadAll from '@src/views/contract/ContractPrizeDistributionBufferReadAll';

const ContractPrizeDistributionBuffer = () => {
  return (
    <div className="page--contact-prize-distribution-buffer">
      <Meta
        title="PrizeDistributionBuffer Contract - V4 PoolTogether"
        description="PoolTogether V4 Admin Dashbard"
      />
      <div className="grid grid-cols-12 pb-4">
        <div className="col-span-6 flex items-center">
          {/* <button className="btn btn-purple">Add PrizeDistribution</button> */}
          {/* <button className="btn btn-red ml-2">Set PrizeDistribution</button> */}
        </div>
        <div className="col-span-6 flex justify-end">
          <ChainSwitch />
        </div>
      </div>
      <ContractPrizeDistributionBufferReadAll />
      <div className="grid grid-cols-12 gap-x-10 mt-10">
        <div className="card col-span-4">
          <h3 className="font-bold text-3xl">Push PrizeDistribution</h3>
        </div>
        <div className="card col-span-8">
          <FormPrizeDistributionBufferPushPrizeDistribution
            labelButton={
              <span className="">
                Push <span className="font-light text-base">(pushPrizeDistribution)</span>
              </span>
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-10 mt-10">
        <div className="card col-span-4">
          <h3 className="font-bold text-3xl">Set PrizeDistribution</h3>
        </div>
        <div className="card col-span-8">
          <FormPrizeDistributionBufferSetPrizeDistribution />
        </div>
      </div>
    </div>
  );
};

ContractPrizeDistributionBuffer.layout = Admin;

export default ContractPrizeDistributionBuffer;
