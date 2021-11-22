import { ReactElement } from 'react';

import FooterAdmin from '@src/components/Layout/Footers/FooterAdmin';
import Sidebar from '@src/components/Layout/Sidebar/Sidebar';
import EpochToRelativeDate from '@src/components/Time/EpochToRelativeDate';
import SecondsToHoursEstimate from '@src/components/Time/SecondsToHoursEstimate';
import { BigNumberToString } from '@src/components/Web3/BigNumber/BigNumberToString';
import { ChainInformation } from '@src/components/Web3/Chain/ChainInformation';
import { GenericReadFunction } from '@src/components/Web3/Contracts/GenericReadFunction';
import Web3WalletConnection from '@src/views/Web3WalletConnection';

export function Admin({ children }): ReactElement {
  return (
    <div className="grid grid-cols-12 h-full min-h-vh">
      <div className="col-span-2 bg-white shadow-xl h-full min-h-vh">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <div className="h-full min-h-vh flex flex-col relative bg-blueGray-100 w-full">
          <Navbar />
          <div className="flex-6 bg-gray-100 mx-auto px-10 py-10 w-full">{children}</div>
          <div className="flex-1 bg-gray-100">
            <FooterAdmin />
          </div>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="grid grid-cols-12 w-full z-10 bg-purple-900 text-white py-4 px-5">
      <div className="col-span-6 flex items-center flex-1 text-white">
        {/* <AnalyticsOverview className="ml-4" /> */}
      </div>
      <div className="col-span-6 w-full flex justify-end items-center px-2">
        <span className="tag tag-purple-light mr-3">
          <ChainInformation className="text-xs" />
        </span>
        <Web3WalletConnection className="mr-4" />
      </div>
    </nav>
  );
};

const AnalyticsOverview = ({ className }) => {
  return (
    <div className={className}>
      <GenericReadFunction
        name="DrawBeacon"
        functionName="getNextDrawId"
        component={(props) => (
          <span className="tag tag-purple ">
            <span className="font-bold text-baseline">Next Draw ID: </span>
            <BigNumberToString className="ml-1" bigNumber={props.value} />
          </span>
        )}
      />
      <GenericReadFunction
        name="DrawBeacon"
        functionName="getBeaconPeriodSeconds"
        component={(props) => (
          <span className="tag tag-purple ml-3">
            <span className="font-bold text-baseline">Beacon Period: </span>
            <SecondsToHoursEstimate className="ml-1" seconds={props.value} />
          </span>
        )}
      />
      <GenericReadFunction
        name="DrawBeacon"
        functionName="getBeaconPeriodStartedAt"
        component={(props) => (
          <span className="tag tag-purple ml-3">
            <span className="font-bold text-baseline">Last Draw Completed: </span>
            <EpochToRelativeDate className="ml-1" epoch={props.value} />
          </span>
        )}
      />
    </div>
  );
};

export default Admin;
