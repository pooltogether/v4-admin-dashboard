import PrizeDistributionParameters from '@src/components/PrizeDistribution/PrizeDistributionParameters';

import data from './data';
import { ModalSetPrizeDistribution } from './TableDrawAndPrizeDistribution.ModalSetPrizeDistribution';
import { SubTable } from './TableDrawAndPrizeDistribution.subtable';
import { columns } from './TableDrawAndPrizeDistribution.subtable.columns';

interface IRowExpanded {
  row: any;
}

export const RowExpanded = ({ row }: IRowExpanded) => (
  <div className="bg-gray-200 p-10">
    <div className="bg-gray-100 shadow-sm p-3 rounded-xl w-full">
      <div className="grid grid-cols-3 gap-x-6">
        <DrawCard className={'card'} {...row.original.draw} />
        <div className="card">
          <h3 className="font-bold text-xl border-b-2">
            Current <span className="font-normal">PrizeDistribution</span>
          </h3>
          <PrizeDistributionParameters value={row.original.prizeDistribution} />
        </div>
        <div className="card">
          <h3 className="font-bold text-xl border-b-2 mb-3">
            Expected <span className="font-normal">PrizeDistribution</span>
          </h3>
          <PrizeDistributionParameters value={row.original.prizeDistribution} />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 my-4">
      <div className="flex flex-col items-center justify-center p-2 text-center">
        <ModalSetPrizeDistribution>
          <button className="btn btn-red w-full">
            Reset PrizeDistribution <span className="font-light">(Executive Command)</span>
          </button>
        </ModalSetPrizeDistribution>
      </div>
    </div>
    <SubTable columns={columns} data={data} />
  </div>
);

interface DrawCardProps {
  className?: string;
  timestamp: any;
  drawId: any;
  winningRandomNumber: number;
}

const DrawCard = ({ className, drawId, winningRandomNumber }: DrawCardProps) => {
  return (
    <div className="">
      <div className={className}>
        <h3 className="font-bold text-xl border-b-2 mb-4">Draw Settings</h3>
        <span className="font-bold">Winning Random Number </span>
        <div className="break-words">
          <span className="block word-wrap break-word">{winningRandomNumber.toString()}</span>
        </div>
      </div>
    </div>
  );
};

export default RowExpanded;
