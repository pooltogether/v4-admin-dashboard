import React from 'react';

import Component from '@src/components/Component';

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
export const TableBody = ({ page, prepareRow, rowExpanded, ...props }: ITableBody) => {
  return (
    <tbody {...props} className="z-">
      {page.map((row, idx) => {
        prepareRow(row);
        return (
          <>
            <tr {...row.getRowProps()} key={idx}>
              {row.cells.map((cell: any, cIdx: number) => {
                return (
                  <td
                    key={cIdx}
                    className="bg-white border-b-1 border-gray-100 py-2 px-4"
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
            <tr>
              <td colSpan={8}>{row.isExpanded && Component(rowExpanded, { row })}</td>
            </tr>
          </>
        );
      })}
    </tbody>
  );
};
export default TableBody;
