import { useGetDrawsAndPrizeDistributions } from '@src/hooks/pooltogether/useGetDrawsAndPrizeDistributions';
import { ITableDrawAndPrizeDistribution } from '@src/types';
import _ from 'lodash';

import { columns as tableColumns } from './TableDrawAndPrizeDistribution.columns';
import { Loading } from './TableDrawAndPrizeDistribution.loading';
import { Table } from './TableDrawAndPrizeDistribution.table';

export const TableDrawAndPrizeDistribution = ({ settings }: ITableDrawAndPrizeDistribution) => {
  const drawsAndPrizeDistributions = useGetDrawsAndPrizeDistributions();
  if (!drawsAndPrizeDistributions.status) return <Loading />;

  console.log('TableDrawAndPrizeDistribution', drawsAndPrizeDistributions.data);
  const reverse = _.reverse(drawsAndPrizeDistributions.data);
  return <Table columns={tableColumns} data={reverse} />;
};
export default TableDrawAndPrizeDistribution;
