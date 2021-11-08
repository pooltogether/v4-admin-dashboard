import { useGetDrawsAndPrizeDistributions } from '@src/hooks/pooltogether/useGetDrawsAndPrizeDistributions';
import { ITableDrawAndPrizeDistribution } from '@src/types';

import { columns as tableColumns } from './TableDrawAndPrizeDistribution.columns';
import { Loading } from './TableDrawAndPrizeDistribution.loading';
import { Table } from './TableDrawAndPrizeDistribution.table';

export const TableDrawAndPrizeDistribution = ({ settings }: ITableDrawAndPrizeDistribution) => {
  const drawsAndPrizeDistributions = useGetDrawsAndPrizeDistributions();
  if (!drawsAndPrizeDistributions.status) return <Loading />;
  return <Table columns={tableColumns} data={drawsAndPrizeDistributions.data} />;
};
export default TableDrawAndPrizeDistribution;
