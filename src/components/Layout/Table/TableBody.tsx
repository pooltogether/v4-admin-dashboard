import React from 'react';

import Component from '@src/components/Component';
import classNames from 'classnames';

interface ITableBody {
  className?: any;
  style?: any;
  role?: any;
  page: Array<any>;
  props: any;
  prepareRow: any;
  rowExpanded: any;
}

/**
 * @name TableBody
 * @param {Object} props
 */
export const TableBody = ({
  page,
  prepareRow,
  rowExpanded,
  ...props
}: ITableBody) => {
  const styleCell = classNames('border-b-1 border-gray-100 py-2 px-4');
  return (
    <tbody {...props} className="z-">
      {page.map((row, idx) => {
        prepareRow(row);
        const styleRow = classNames('row', {
          'bg-gray-100 text-gray-500': row.original.disabled,
          'bg-white': !row.original.disabled,
        });
        return (
          <>
            <tr {...row.getRowProps()} className={styleRow} key={idx}>
              {row.cells.map((cell: any, cIdx: number) => {
                return (
                  <td key={cIdx} className={styleCell} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
            <tr>
              <td colSpan={row.cells.length}>
                {row.isExpanded && Component(rowExpanded, { row })}
              </td>
            </tr>
          </>
        );
      })}
    </tbody>
  );
};
export default TableBody;
