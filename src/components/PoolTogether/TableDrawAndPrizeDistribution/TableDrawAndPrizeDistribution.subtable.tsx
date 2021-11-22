import { TableBody } from '@src/components/Layout/Table/TableBody';
import { TableHead } from '@src/components/Layout/Table/TableHead';
import { useTable, useExpanded, usePagination } from 'react-table';

interface ITable {
  columns: Array<any>;
  data: Array<any>;
}

export function SubTable({ columns, data }: ITable) {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0 },
      },
      useExpanded,
      usePagination
    );

  return (
    <div className="border-2 shadow-sm bg-white rounded-xl overflow-a">
      <table className="w-full" {...getTableProps()}>
        <TableHead defaultStyle headerGroups={headerGroups} />
        <TableBody
          page={page}
          prepareRow={prepareRow}
          props={getTableBodyProps()}
        />
      </table>
    </div>
  );
}
