import { useGetDrawsAndPrizeDistributions } from '@src/hooks/pooltogether/useGetDrawsAndPrizeDistributions';
import _ from 'lodash';

import { columns as tableColumns } from './TableDrawAndPrizeDistribution.columns';
import { Loading } from './TableDrawAndPrizeDistribution.loading';
import { Table } from './TableDrawAndPrizeDistribution.table';

export const TableDrawAndPrizeDistribution = () => {
  const drawsAndPrizeDistributions = useGetDrawsAndPrizeDistributions();
  if (!drawsAndPrizeDistributions.status) return <Loading />;
  const reverse = _.reverse(drawsAndPrizeDistributions.data);
  return <Table columns={tableColumns} data={reverse} />;
};
export default TableDrawAndPrizeDistribution;
