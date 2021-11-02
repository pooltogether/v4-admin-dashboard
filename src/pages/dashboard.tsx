import React from 'react';

import { DashboardAreaTitle } from '@src/components/Dashboard/DashboardAreaTitle';
import { DrawBeaconOverviewCards } from '@src/views/DrawBeaconOverviewCards';
import { DrawHistoryOverviewCards } from '@src/views/DrawHistoryOverviewCards';
import PrizeDistributionOverviewCards from '@src/views/PrizeDistributionOverviewCards';

import { Meta } from '../layout/Meta';
import { Admin } from '../templates/Admin';

const Dashboard = () => {
  return (
    <div className="">
      <Meta title="V4 Admin Dashboard" description="PoolTogether V4 Admin Dashbard" />
      <DrawBeaconOverviewCards className="mt-0" />
      <DrawHistoryOverviewCards className="mt-12" />
      <PrizeDistributionOverviewCards className="mt-12" />
      <DashboardAreaTitle
        title="Ownership &amp; Management"
        body="Analyze Historical Distributions"
        className="mt-12"
      />
    </div>
  );
};

Dashboard.layout = Admin;

export default Dashboard;
