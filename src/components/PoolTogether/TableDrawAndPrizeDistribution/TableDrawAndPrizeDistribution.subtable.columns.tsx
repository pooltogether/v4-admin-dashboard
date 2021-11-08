import React from 'react';

import EpochToCalendarDate from '@src/components/Time/EpochToCalendarDate';
import EpochToRelativeDate from '@src/components/Time/EpochToRelativeDate';
import { TokenBalance } from '@src/components/Token/TokenBalance';
import { BigNumberToString } from '@src/components/Web3/BigNumber/BigNumberToString';
import { IValueBigNumber } from '@src/types';
import { CheckCircle, XCircle } from 'react-feather';

interface IRow {
  row: any;
}

export const columns = [
  {
    Header: 'Network',
    accessor: 'network',
    Cell: ({ value, row }: IValueBigNumber) => (
      <div className="flex items-center">
        <img src={row.original.image} width={18} />
        <span className="font-semibold text-lg ml-2">{value && value}</span>
      </div>
    ),
  },
  {
    Header: 'Active',
    accessor: 'active',
    Cell: ({ value }: IValueBigNumber) => (
      <div className="flex items-center justify-center">
        {value && (
          <span className="tag tag-white -ml-8 cursor-pointer shadow-sm top-0 hover-up">
            <CheckCircle className="text-green-500" width={18} />
          </span>
        )}
        {!value && (
          <span className="tag tag-white -ml-8 cursor-pointer shadow-sm top-0 hover-up">
            <XCircle className="text-red-500" width={18} />
          </span>
        )}
      </div>
    ),
  },
  {
    Header: 'Draw ID',
    accessor: 'drawId',
    Cell: ({ value }: IValueBigNumber) => (
      <div className="flex items-center">
        <span className="font-bold text-xl ml-2">{value && value}</span>
      </div>
    ),
  },
  {
    Header: 'Timestamp',
    accessor: 'draw.timestamp',
    Cell: ({ value }: IValueBigNumber) => (
      <span className="">
        <EpochToCalendarDate className="block text-sm text-purple-700" epoch={value} />
        <EpochToRelativeDate className="block text-xs" epoch={value} />
      </span>
    ),
  },
  {
    Header: 'Prize',
    accessor: 'prizeDistribution.prize',
    Cell: ({ value }: IValueBigNumber) => (
      <span className="">
        <TokenBalance amount={value} decimals={6} />
      </span>
    ),
  },
  {
    Header: 'NumberOfPicks',
    accessor: 'prizeDistribution.numberOfPicks',
    Cell: ({ value }: IValueBigNumber) => (
      <span className="">
        <BigNumberToString bigNumber={value} commify />
      </span>
    ),
  },
  // {
  //   Header: 'Expiry',
  //   accessor: 'prizeDistribution.expiryDuration',
  //   Cell: ({ value }: IValueBigNumber) => <span className="">{value}</span>,
  // },
  // {
  //   Header: 'Timestamp Offset',
  //   accessor: 'prizeDistribution.endTimestampOffset',
  //   Cell: ({ value }: IValueBigNumber) => <span className="">{value}</span>,
  // },
  {
    Header: 'Max Picks',
    accessor: 'prizeDistribution.maxPicksPerUser',
    Cell: ({ value }: IValueBigNumber) => <span className="">{value}</span>,
  },
  {
    Header: 'Bitrange',
    accessor: 'prizeDistribution.bitRangeSize',
    Cell: ({ value }: IValueBigNumber) => <span className="">{value}</span>,
  },
  {
    Header: 'Match Cardinality',
    accessor: 'prizeDistribution.matchCardinality',
    Cell: ({ value }: IValueBigNumber) => <span className="">{value}</span>,
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
