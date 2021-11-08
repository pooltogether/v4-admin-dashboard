import { AppPageHeader } from '@src/components/App/AppPageHeader';
import { FormPrizeDistributionBufferSetPrizeDistribution } from '@src/components/PrizeDistribution/FormPrizeDistributionBufferSetPrizeDistribution';
import { Meta } from '@src/layout/Meta';
import { Admin } from '@src/templates/Admin';

const Manage = () => {
  return (
    <div className="">
      <Meta title="V4 Admin Dashboard" description="PoolTogether V4 Admin Dashbard" />
      <AppPageHeader
        className="mt-0"
        title="Manage"
        description="Manage the V4 Protocol Settings and Parameters"
      />
      <FormPrizeDistributionBufferSetPrizeDistribution
        className="card mt-6"
        label="Set PrizeDistribution"
      />
    </div>
  );
};

Manage.layout = Admin;

export default Manage;
