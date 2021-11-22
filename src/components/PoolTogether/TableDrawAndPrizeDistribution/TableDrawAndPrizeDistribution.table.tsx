import React from 'react';

import { TableBody } from '@src/components/Layout/Table/TableBody';
import { TableHead } from '@src/components/Layout/Table/TableHead';
import { TablePagination } from '@src/components/Layout/Table/TablePagination';
import { useTable, usePagination, useExpanded } from 'react-table';

import { RowExpanded } from './TableDrawAndPrizeDistribution.expanded';

interface ITable {
  columns: Array<any>;
  data: Array<any>;
}

export function Table({ columns, data }: ITable) {
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
    usePagination,
  );

  // Render the UI for your table
  return (
    <div className="border-2 shadow-sm bg-white rounded-xl overflow-a">
      <table className="w-full" {...getTableProps()}>
        <TableHead defaultStyle headerGroups={headerGroups} />
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
