import PrizeDistributionOverviewCards from '@src/views/PrizeDistributionOverviewCards';

import { Meta } from '../layout/Meta';
import { Admin } from '../templates/Admin';

const Index = () => {
  return (
    <div className="">
      <Meta title="V4 Admin Dashboard" description="PoolTogether V4 Admin Dashbard" />
      <PrizeDistributionOverviewCards className="mt-4" />
    </div>
  );
};

Index.layout = Admin;

export default Index;
