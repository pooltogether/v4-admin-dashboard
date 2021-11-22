import { DashboardAreaTitle } from '@src/components/Layout/Dashboard/DashboardAreaTitle';
import { DashboardStatistic } from '@src/components/Layout/Dashboard/DashboardStatistic';
import { JustifyBetween } from '@src/components/Layout/Flex/JustifyBetween';
import { BigNumberToString } from '@src/components/Web3/BigNumber/BigNumberToString';
import { GenericReadFunction } from '@src/components/Web3/Contracts/GenericReadFunction';
import idx from 'idx';

interface IGenericComponent {
  className: any;
}

/**
 * @name DrawHistoryOverviewCards
 * @param {Object} props
 */
export const DrawHistoryOverviewCards = ({ className }: IGenericComponent) => {
  return (
    <div className={className}>
      <DashboardAreaTitle title="DrawHistory" body="Manage new draws" />
      <Cards />
      <Footer className="mt-5" />
    </div>
  );
};

const Footer = ({ className }: IGenericComponent) => {
  return (
    <div className={`flex justify-end ${className}`}>
      <FindDrawPanel />
      <FullDrawHistoryLink />
    </div>
  );
};

const FindDrawPanel = (props) => {
  return <button className="btn btn-sm btn-white mx-2">Find Draw</button>;
};

const FullDrawHistoryLink = (props) => {
  return <button className="btn btn-sm btn-white mx-2">Full Draw History</button>;
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
              name="DrawBuffer"
              functionName="getOldestDraw"
              className="text-xl font-black block"
              component={({ value }) => <DrawHistoryDrawValues value={idx(value, (_) => _[0])} />}
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
              name="DrawBuffer"
              functionName="getNewestDraw"
              className="text-xl font-black block"
              component={({ value }) => <DrawHistoryDrawValues value={idx(value, (_) => _[0])} />}
            />
          }
        />
      </div>
    </div>
  );
};

const DrawHistoryDrawValues = ({ value }) => {
  if (!value) return null;
  return (
    <div className="">
      <JustifyBetween>
        <span className="text-sm">Timestamp:</span>
        <span className="text-sm">
          <BigNumberToString bigNumber={value.timestamp} />
        </span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">DrawId:</span>
        <span className="text-sm">{value.drawId}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Winning Random Number:</span>
        <span className="text-sm">
          <BigNumberToString bigNumber={value.winningRandomNumber} trim={7} />
        </span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Beacon Period StartedAt:</span>
        <BigNumberToString
          className="text-sm"
          bigNumber={value.beaconPeriodStartedAt}
          decimals={18}
        />
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">Beacon Period Seconds:</span>
        <BigNumberToString
          className="text-sm"
          bigNumber={value.beaconPeriodSeconds}
          decimals={18}
        />
      </JustifyBetween>
    </div>
  );
};

export default DrawHistoryOverviewCards;
