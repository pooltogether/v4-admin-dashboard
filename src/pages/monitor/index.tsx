import React from 'react';

import { TableDrawAndPrizeDistribution } from '@src/components/PoolTogether/TableDrawAndPrizeDistribution';
import { ChainSwitch } from '@src/components/Web3/Chain/ChainSwitch';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { Admin } from '@src/templates/Admin';
import Link from 'next/link';

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
          <Link passHref href="/manage">
            <span className="tag tag-white ml-4 mt-2 hover-up cursor-pointer ">
              Set PrizeDistribution Parameters
            </span>
          </Link>
        </div>
        <div className="col-span-6 flex justify-end">
          <ChainSwitch />
        </div>
      </div>
      <TableDrawAndPrizeDistribution address={address} />
    </div>
  );
}

PrizeDistributions.layout = Admin;
