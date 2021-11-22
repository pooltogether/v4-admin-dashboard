import { ReactElement } from 'react';

import classNames from 'classnames';

interface ITablePagination {
  canPreviousPage: Function;
  canNextPage: Function;
  pageCount: number;
  pageIndex: number;
  pageSize: number;
  pageOptions: Function;
  gotoPage: Function;
  nextPage: Function;
  previousPage: Function;
  setPageSize: Function;
}

/**
 * @name TablePagination
 * @param {Object} props
 */
export const TablePagination = ({
  canPreviousPage,
  canNextPage,
  pageCount,
  pageOptions,
  pageIndex,
  gotoPage,
  nextPage,
  previousPage,
  pageSize,
  setPageSize,
}: ITablePagination): ReactElement => {
  const styleBase = classNames(
    'pagination flex justify-between items-center bg-white shadow-sm mt-4 px-3 py-1 rounded-lg'
  );

  return (
    <div className={styleBase}>
      <div className="">
        <button className="tag tag-smoke" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button
          className="tag tag-smoke"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>{' '}
        <button className="tag tag-smoke" onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button
          className="tag tag-smoke"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>{' '}
        <span className="mx-2">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        |
        <span className="tag tag-cloud px-2 mx-2">
          <span className="p-2">
            Go to page:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '100px' }}
            />
          </span>
        </span>{' '}
      </div>
      <div className="">
        <select
          className="tag tag-smoke text-xl"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option className="text-xl" key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default TablePagination;
