import React from 'react';

import DrawParameters from '@src/components/PoolTogether/Draw/DrawParameters';
import PrizeDistributionParameters from '@src/components/PoolTogether/PrizeDistribution/PrizeDistributionParameters';

import { ModalSetPrizeDistribution } from './TableDrawAndPrizeDistribution.ModalSetPrizeDistribution';

interface IRowExpanded {
  row: any;
}

export const RowExpanded = ({ row }: IRowExpanded) => (
  <div className="bg-gray-200 p-10">
    <div className="grid grid-cols-3 gap-x-10 mb-6">
      <div className="card col-span-2">
        <h3 className="font-bold text-xl border-b-2 pb-2 mb-2">Draw</h3>
        <DrawParameters value={row?.original?.draw} />
      </div>
      <div className="col-span-1">
        <ModalSetPrizeDistribution
          drawId={row?.original?.draw?.drawId}
          prizeDistribution={row?.original?.prizeDistribution}
        >
          <button className="btn btn-red w-full hover-up">Reset PrizeDistribution</button>
        </ModalSetPrizeDistribution>
        <div className="bg-white p-6 rounded-md shadow-md mt-4">
          <h3 className="font-bold text-lg border-b-2 mb-2 pb-2">Protocol Operations</h3>
          <p className="text-xs text-gray-600">
            If the current PrizeDistribution does not match the calculated PrizeDistribution, the
            PrizeDistribution must be reset to the calculated PrizeDistribution via the protocol
            smart contracts.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 shadow-sm p-3 rounded-xl w-full">
      <div className="grid grid-cols-2 gap-x-6">
        <div className="card">
          <h3 className="font-bold text-xl border-b-2 pb-2 mb-2">
            Current <span className="font-normal">PrizeDistribution</span>
          </h3>
          <PrizeDistributionParameters value={row?.original?.prizeDistribution} />
        </div>
        <div className="card">
          <h3 className="font-bold text-xl border-b-2 pb-2 mb-2">
            Expected <span className="font-normal">PrizeDistribution</span>
          </h3>
          <PrizeDistributionParameters value={row?.original?.prizeDistribution} />
        </div>
      </div>
    </div>
  </div>
);

export default RowExpanded;
