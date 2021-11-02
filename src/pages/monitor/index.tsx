import { PrizeDistributionHistoryCurrentTable } from '@src/components/PoolTogether/PrizeDistributionHistoryCurrentTable/PrizeDistributionHistoryCurrentTable';
import { NetworkSelector } from '@src/components/Web3/Network/NetworkSelector';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { Admin } from '@src/templates/Admin';

export default function PrizeDistributions() {
  const address = useGetContractAddress('PrizeDistributionBuffer');
  return (
    <div className="mt-0">
      <div className="grid grid-cols-12 pb-4">
        <div className="col-span-6 flex items-center">
          <h3 className="font-light text-3xl m-0">
            <span className="text-gray-600">Status:</span>{' '}
            <span className="font-bold text-purple-700">Success</span>
          </h3>
          <span className="tag tag-white ml-4 mt-2">Validate the prize distribution</span>
        </div>
        <div className="col-span-6 flex justify-end">
          <NetworkSelector />
        </div>
      </div>
      <PrizeDistributionHistoryCurrentTable address={address} />
    </div>
  );
}

PrizeDistributions.layout = Admin;
