import { DashboardAreaTitle } from '@src/components/Layout/Dashboard/DashboardAreaTitle';
import { DashboardStatistic } from '@src/components/Layout/Dashboard/DashboardStatistic';
import { JustifyBetween } from '@src/components/Layout/Flex/JustifyBetween';
import { TokenBalance } from '@src/components/Token/TokenBalance';
import { GenericReadFunction } from '@src/components/Web3/Contracts/GenericReadFunction';
import idx from 'idx';

interface IGenericComponent {
  className: any;
}

/**
 * @name PrizeDistributionOverviewCards
 * @param {Object} props
 */
export const PrizeDistributionOverviewCards = ({ className }: IGenericComponent) => {
  return (
    <div className={className}>
      <DashboardAreaTitle title="PrizeDistributionBuffer" body="Manage new draws" />
      <Cards />
      <Footer className="mt-5" />
    </div>
  );
};

const Footer = ({ className }: IGenericComponent) => {
  return (
    <div className={`flex justify-end ${className}`}>
      <FindPPrizeDistrubtionPanel />
      <FullPrizeDistributionHistoryLink />
    </div>
  );
};

const FindPPrizeDistrubtionPanel = (props) => {
  return <button className="btn btn-sm btn-white mx-2">Find Prize Distribution</button>;
};

const FullPrizeDistributionHistoryLink = (props) => {
  return <button className="btn btn-sm btn-white mx-2">Full Prize Distribution History</button>;
};

const Cards = ({ className }: IGenericComponent) => {
  return (
    <div className={`grid grid-cols-2 gap-x-5 gap-y-5 ${className}`}>
      <div className="">
        <DashboardStatistic
          labelStyle="font-bold"
          label="Oldest Draw Settings"
          render={
            <GenericReadFunction
              name="PrizeDistributionBuffer"
              functionName="getPrizeDistribution"
              args={[1]}
              className="text-xl font-black block"
              component={({ value }) => (
                <PrizeDistributionHistoryDrawValues value={idx(value, (_) => _[0])} />
              )}
            />
          }
        />
      </div>
      <div className="">
        <DashboardStatistic
          labelStyle="font-bold"
          label="Newest Draw Settings"
          render={
            <GenericReadFunction
              name="PrizeDistributionBuffer"
              functionName="getNewestPrizeDistribution"
              className="text-xl font-black block"
              component={({ value }) => (
                <PrizeDistributionHistoryDrawValues value={idx(value, (_) => _[0])} />
              )}
            />
          }
        />
      </div>
    </div>
  );
};

const PrizeDistributionHistoryDrawValues = ({ value }) => {
  if (!value) return null;
  return (
    <div className="">
      <JustifyBetween>
        <span className="text-sm">Bitrange:</span>
        <span className="text-sm"> {value.bitRangeSize}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Cardinality:</span>
        <span className="text-sm">{value.matchCardinality}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Bitrange:</span>
        <span className="text-sm"> {value.bitRangeSize}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Prize:</span>
        <TokenBalance className="text-sm" amount={value.prize} decimals={6} />
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Distributions:</span>
        <div className="">
          <Distributions distributions={value.distributions} />
        </div>
      </JustifyBetween>
    </div>
  );
};

const Distributions = ({ distributions }) => {
  const Dists = !distributions
    ? null
    : distributions.map((dist) => (
        <span className="mx-1">
          <TokenBalance className="text-sm" amount={dist} decimals={9} />,
        </span>
      ));

  return <div className="">[{Dists}]</div>;
};

export default PrizeDistributionOverviewCards;
