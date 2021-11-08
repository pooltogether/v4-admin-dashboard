// @ts-nocheck
import React from 'react';

import { AppLogo } from '@src/components/App/AppLogo';
import { MenuItemSidebar } from '@src/components/Layout/Menu/MenuItemSidebar';
import {
  Database,
  Info,
  Activity,
  GitHub,
  Anchor,
  BarChart,
  CheckCircle,
  Navigation,
  Archive,
  PlusSquare,
  Aperture,
  DollarSign,
} from 'react-feather';

const ProtocolStatus = (props) => {
  return (
    <div className="bg-green-600 text-white flex justify-between py-2 px-4">
      <span className="">Status:</span>
      <span className="font-bold upp">Operational</span>
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className="shadow-md block w-full">
      <div className="bg-purple-800 py-6 px-4">
        <AppLogo className="text-white hover:text-gray-50" />
      </div>
      <ProtocolStatus />
      <nav className="min-h-vh p-4">
        <div className="">
          <h6 className="md:min-w-full text-purple-800 text-md uppercase font-bold pt-1 pb-4 no-underline flex items-center justify-between">
            <span className="ml-3">Protocol</span>
            <CheckCircle className="text-purple-500 mr-1" width={32} />
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <MenuItemSidebar
              label="Overview"
              href="/dashboard"
              exactMatch
              defaultStyle
              image={<Info width={16} />}
            />
            {/* <MenuItemSidebar
              label="Assets"
              href="/assets"
              defaultStyle
              image={<CreditCard width={16} />}
            /> */}
            <MenuItemSidebar
              label="Monitor"
              href="/monitor"
              defaultStyle
              image={<Activity width={16} />}
            />
            <MenuItemSidebar
              label="Manage"
              href="/manage"
              defaultStyle
              image={<Database width={16} />}
            />
            <MenuItemSidebar
              label="Treasury"
              href="/treasury"
              defaultStyle
              image={<DollarSign width={16} />}
            />
          </ul>

          {/* Divider */}
          <hr className="my-4 md:min-w-full" />
          <h6 className="md:min-w-full text-purple-800 text-md uppercase font-bold pt-1 pb-4 no-underline flex items-center justify-between">
            <span className="ml-2">Calulators</span>
            <Navigation className="text-purple-500 mr-1" width={32} />
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none p-0 m-0">
            <MenuItemSidebar
              label="Claim Verification"
              href="/calculate/claim-verification"
              defaultStyle
              image={<Anchor width={16} />}
            />
            <MenuItemSidebar
              label="Network Distributions"
              href="/calculate/network-distributions"
              defaultStyle
              image={<BarChart width={16} />}
            />
          </ul>

          {/* Divider */}
          <hr className="my-4 w-full mt-2" />
          <h6 className="md:min-w-full text-purple-800 text-md uppercase font-bold pt-1 pb-4 no-underline flex items-center justify-between">
            <span className="ml-2">Contracts</span>
            <Aperture className="text-purple-500 mr-1" width={32} />
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <MenuItemSidebar
              label="DrawBeacon"
              href="/contract/draw-beacon"
              defaultStyle
              image={<Anchor width={16} />}
            />
            <MenuItemSidebar
              label="DrawBuffer"
              href="/contract/draw-buffer"
              defaultStyle
              image={<Anchor width={16} />}
            />
            <MenuItemSidebar
              label="DrawCalculator"
              href="/contract/draw-calculator"
              defaultStyle
              image={<Anchor width={16} />}
            />
            <MenuItemSidebar
              label="PrizeDistributionBuffer"
              href="/contract/prize-distribution-buffer"
              defaultStyle
              image={<Anchor width={16} />}
            />
          </ul>
          {/* Divider */}
          <hr className="my-4 w-full mt-32" />
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <MenuItemSidebar
              label="Contribute"
              href="/contribute"
              defaultStyle
              image={<GitHub width={16} />}
            />
            <MenuItemSidebar
              label="V4 Application"
              href="/v4"
              defaultStyle
              image={<PlusSquare width={16} />}
            />
            <MenuItemSidebar
              label="V3 Application"
              href="/v4"
              defaultStyle
              image={<Archive width={16} />}
            />
          </ul>
        </div>
      </nav>
    </div>
  );
}
