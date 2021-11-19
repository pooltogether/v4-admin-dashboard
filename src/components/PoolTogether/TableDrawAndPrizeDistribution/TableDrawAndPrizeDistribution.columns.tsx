import React from 'react';

import { PrizeDistributionIsValidIconAndModal } from '@src/components/PoolTogether/PrizeDistribution/PrizeDistributionIsValidIconAndModal';
import EpochToCalendarDate from '@src/components/Time/EpochToCalendarDate';
import EpochToRelativeDate from '@src/components/Time/EpochToRelativeDate';
import { TokenBalance } from '@src/components/Token/TokenBalance';
import { BigNumberToString } from '@src/components/Web3/BigNumber/BigNumberToString';
import { IValueBigNumber } from '@src/types';
import { ModalDrawAndPrizeDistributionAllParametersCard } from './ModalDrawAndPrizeDistributionAllParametersCard'

interface IRow {
  value: any;
  row: any;
}

export const columns = [
  {
    Header: 'Draw ID',
    accessor: 'drawId',
    Cell: ({ value, row }: IRow) => (
      <div className="flex flex-col">
        <span className="font-bold text-2xl text-purple-800">{value && value}</span>
        <PrizeDistributionIsValidIconAndModal
          drawId={value.toString()}
          draw={row?.original?.draw}
          prizeDistribution={row?.original?.prizeDistribution}
        />
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
    Header: () => null,
    key: 'options',
    accessor: 'options',
    Cell: ({ row }: IRow) => (
      <div className="flex justify-end">
        <span {...row.getToggleRowExpandedProps()}>
          {row.isExpanded ? (
            <span className="tag tag-cloud cursor-pointer">Close</span>
          ) : (
            <span className="tag tag-cloud cursor-pointer">Manage</span>
          )}
        </span>
        <div className='ml-2'>
          <ModalDrawAndPrizeDistributionAllParametersCard draw={row?.original?.draw} prizeDistribution={row?.original?.prizeDistribution} >
          <span className='tag tag-green-light tag-sm'>Parameters</span>
          </ModalDrawAndPrizeDistributionAllParametersCard>

        </div>
      </div>
    ),
  },
];

export default columns;
