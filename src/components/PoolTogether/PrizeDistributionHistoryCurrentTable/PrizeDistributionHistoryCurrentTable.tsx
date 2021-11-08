// @ts-nocheck
import React, { useEffect, useState } from 'react';

import { TableBody } from '@src/components/Layout/Table/TableBody';
import { TableHead } from '@src/components/Layout/Table/TableHead';
import { TablePagination } from '@src/components/Layout/Table/TablePagination';
import PrizeDistributionParameters from '@src/components/PrizeDistribution/PrizeDistributionParameters';
import { useGetContractABI } from '@src/hooks/useGetContractABI';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { useSafeContractCall } from '@src/hooks/useSafeContractCall';
import { IPrizeDistributionHistoryCurrentTable } from '@src/types';
import { range } from '@src/utils/range';
import { useTable, usePagination, useExpanded } from 'react-table';

import { columns } from './PrizeDistributionHistoryCurrentTable.columns';

interface IRowExpanded {
  row: any;
}

const RowExpanded = ({ row }: IRowExpanded) => (
  <div className="bg-gray-100 shadow-sm p-3 w-full">
    <div className="grid grid-cols-3 gap-x-6">
      <div className="p-2">
        <h3 className="font-normal text-lg border-b-2">Current Settings</h3>
        <PrizeDistributionParameters value={row.original} />
      </div>
      <div className="p-2">
        <h3 className="font-normal text-lg border-b-2">Expected Settings</h3>
        <PrizeDistributionParameters value={row.original} />
      </div>
      <div className="flex flex-col items-center justify-center p-2 text-center">
        <button className="btn btn-red w-full">Update Prize Distribution</button>
      </div>
    </div>
  </div>
);

/**
 * @name PrizeDistributionHistoryCurrentTable
 * @param {Object} props
 */
export const PrizeDistributionHistoryCurrentTable = ({
  settings,
}: IPrizeDistributionHistoryCurrentTable) => {
  const abi = useGetContractABI('PrizeDistributionBuffer');
  const address = useGetContractAddress('PrizeDistributionBuffer');
  const getNewestPrizeDistribution = useSafeContractCall(
    address,
    abi,
    'getNewestPrizeDistribution',
    []
  );
  const getOldestPrizeDistribution = useSafeContractCall(
    address,
    abi,
    'getOldestPrizeDistribution',
    []
  );

  const [rangeIds, setRange] = useState<any>([]);
  useEffect(() => {
    if (getNewestPrizeDistribution && getNewestPrizeDistribution.drawId && rangeIds.length === 0) {
      const start = getOldestPrizeDistribution.drawId;
      const end = getNewestPrizeDistribution.drawId;
      const rangeLength = end - start + 1;
      setRange(range(rangeLength, start));
    }
  }, [getNewestPrizeDistribution, getOldestPrizeDistribution.drawId, rangeIds.length]);

  const [data] = useSafeContractCall(address, abi, 'getPrizeDistributions', [[...rangeIds]]);

  if (!data) return null;
  const idToPrizeDistributuion = data.map((dist, idx) => ({
    drawId: rangeIds[idx],
    ...dist,
  }));
  return <Table columns={columns} data={idToPrizeDistributuion} />;
};
export default PrizeDistributionHistoryCurrentTable;

interface ITable {
  columns: Array<any>;
  data: Array<any>;
}

function Table({ columns, data }: ITable) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useExpanded,
    usePagination
  );

  // Render the UI for your table
  return (
    <div className="border-2 shadow-sm bg-white rounded-xl overflow-a">
      <table className="w-full" {...getTableProps()}>
        <TableHead headerGroups={headerGroups} />
        <TableBody
          page={page}
          prepareRow={prepareRow}
          props={getTableBodyProps()}
          rowExpanded={RowExpanded}
        />
      </table>
      <div className="mb-6 px-4">
        <TablePagination
          pageSize={pageSize}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
        />
      </div>
    </div>
  );
}
