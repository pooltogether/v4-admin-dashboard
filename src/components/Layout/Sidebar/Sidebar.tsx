import React from 'react';

import { AppLogo } from '@src/components/App/AppLogo';
import { MenuItemIExternalLink } from '@src/components/Layout/Menu/MenuItemIExternalLink';
import { MenuItemSidebar } from '@src/components/Layout/Menu/MenuItemSidebar';
import { Activity, GitHub, Archive, PlusSquare, DollarSign } from 'react-feather';

export default function Sidebar() {
  return (
    <div className="shadow-md block w-full h-full">
      <div className="bg-purple-800 py-6 px-4">
        <AppLogo className="text-white hover:text-gray-50" />
      </div>
      <nav className="min-h-vh p-4">
        <div className="">
          <h6 className="md:min-w-full text-purple-800 text-md uppercase font-bold pt-1 pb-4 no-underline flex items-center justify-between">
            <span className="ml-3">Protocol</span>
            <DollarSign className="text-purple-500 mr-1" width={32} />
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <MenuItemSidebar
              label="Monitor"
              href="/monitor"
              defaultStyle
              image={<Activity width={16} />}
            />
            {/* <MenuItemSidebar
              label="Treasury"
              href="/treasury"
              defaultStyle
              image={<DollarSign width={16} />}
            /> */}
          </ul>

          {/* Divider */}
          {/* <hr className="my-4 w-full mt-2" />
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
          </ul> */}

          {/* Divider */}
          {/* <hr className="my-4 md:min-w-full" />
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
          </ul> */}
          {/* Divider */}
          <hr className="my-4 w-full mt-8" />
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <MenuItemIExternalLink
              label="Contribute"
              href="https://github.com/pooltogether"
              defaultStyle
              image={<GitHub width={16} />}
            />
            <MenuItemIExternalLink
              label="V4 Application"
              href="https://v4.pooltogether.com/"
              defaultStyle
              image={<PlusSquare width={16} />}
            />
            <MenuItemIExternalLink
              label="V3 Application"
              href="https://app.pooltogether.com/"
              defaultStyle
              image={<Archive width={16} />}
            />
          </ul>
        </div>
      </nav>
    </div>
  );
}
