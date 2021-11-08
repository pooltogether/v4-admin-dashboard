import React from 'react';

import { TokenBalance } from '@src/components/Token/TokenBalance';
import { BigNumberToString } from '@src/components/Web3/BigNumber/BigNumberToString';
import { IValueBigNumber } from '@src/types';
import { CheckCircle } from 'react-feather';

interface IRow {
  row: any;
}

export const columns = [
  {
    Header: 'Draw ID',
    accessor: 'drawId',
    Cell: ({ value }: IValueBigNumber) => (
      <div className="flex items-center">
        <span className="tag tag-white -ml-8 cursor-pointer shadow-sm top-0 hover-up">
          <CheckCircle className="text-green-500" width={18} />
        </span>
        <span className="font-bold text-xl ml-2">{value && value}</span>
      </div>
    ),
  },
  {
    Header: 'NumberOfPicks',
    accessor: 'numberOfPicks',
    Cell: ({ value }: IValueBigNumber) => (
      <span className="">
        <BigNumberToString bigNumber={value} />
      </span>
    ),
  },
  {
    Header: 'Expiry',
    accessor: 'expiryDuration',
    Cell: ({ value }: IValueBigNumber) => <span className="">{value}</span>,
  },
  {
    Header: 'Timestamp Offset',
    accessor: 'endTimestampOffset',
    Cell: ({ value }: IValueBigNumber) => <span className="">{value}</span>,
  },
  {
    Header: 'Max Picks',
    accessor: 'maxPicksPerUser',
    Cell: ({ value }: IValueBigNumber) => <span className="">{value}</span>,
  },
  {
    Header: 'Bitrange',
    accessor: 'bitRangeSize',
    Cell: ({ value }: IValueBigNumber) => <span className="">{value}</span>,
  },
  {
    Header: 'Match Cardinality',
    accessor: 'matchCardinality',
    Cell: ({ value }: IValueBigNumber) => <span className="">{value}</span>,
  },
  {
    Header: 'Prizes',
    accessor: 'prize',
    Cell: ({ value }: IValueBigNumber) => (
      <span className="">
        <TokenBalance amount={value} decimals={6} />
      </span>
    ),
  },
  {
    Header: 'Tiers',
    accessor: 'tiers',
    Cell: ({ value }: IValueBigNumber) => (
      <span className="">
        <TokenBalance amount={4} decimals={0} />
      </span>
    ),
  },
  {
    Header: () => null,
    key: 'options',
    accessor: 'options',
    Cell: ({ row }: IRow) => (
      <div className="flex justify-end">
        <span {...row.getToggleRowExpandedProps()}>
          {row.isExpanded ? (
            <span className="tag tag-cloud cursor-pointer">Close</span>
          ) : (
            <span className="tag tag-cloud cursor-pointer">Full Parameters</span>
          )}
        </span>
      </div>
    ),
  },
];

export default columns;
