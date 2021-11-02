interface ITableHead {
  headerGroups: any;
}

/**
 * @name TableHead
 * @param {Object} props
 */
export const TableHead = ({ headerGroups }: ITableHead) => {
  return (
    <thead className="bg-whites rounded-xl shadow-sm border-b-2 border-blue-300 h-16 pb-5 z-10">
      {headerGroups.map((headerGroup: any, ihg: any) => (
        <tr key={ihg} className="mt-3" {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any, ihgh: number) => (
            <th key={ihgh} className="text-left px-3 mt-3" {...column.getHeaderProps()}>
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
export default TableHead;
