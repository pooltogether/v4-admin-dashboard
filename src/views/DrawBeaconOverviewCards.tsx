import { DashboardAreaTitle } from '@src/components/Layout/Dashboard/DashboardAreaTitle';
import { DashboardStatistic } from '@src/components/Layout/Dashboard/DashboardStatistic';
import { EpochToCalendarDate } from '@src/components/Time/EpochToCalendarDate';
import { SecondsToHoursEstimate } from '@src/components/Time/SecondsToHoursEstimate';
import { Address } from '@src/components/Web3/Address/Address';
import { BigNumberToString } from '@src/components/Web3/BigNumber/BigNumberToString';
import { GenericReadFunction } from '@src/components/Web3/Contracts/GenericReadFunction';

interface IGenericComponent {
  className: any;
}

/**
 * @name DrawBeaconOverviewCards
 * @param {Object} props
 */
export const DrawBeaconOverviewCards = ({ className }: IGenericComponent) => {
  return (
    <div className={className}>
      <DashboardAreaTitle title="DrawBeacon" body="Manage new draws" />
      <Cards />
      <Footer className="mt-5" />
    </div>
  );
};

const Footer = ({ className }: IGenericComponent) => {
  return (
    <div className={`flex justify-end ${className}`}>
      <StartDrawFunctionCall />
      <CompleteDrawFunctionCall />
      <CancelDrawFunctionCall />
    </div>
  );
};

const StartDrawFunctionCall = (props) => {
  return <button className="btn btn-sm btn-green mx-2">Start Draw</button>;
};

const CancelDrawFunctionCall = (props) => {
  return <button className="btn btn-sm btn-gray mx-2">Cancel Draw</button>;
};
const CompleteDrawFunctionCall = (props) => {
  return <button className="btn btn-sm btn-blue mx-2">Complete Draw</button>;
};

const Cards = (props) => {
  return (
    <div className={`grid grid-cols-4 gap-x-5 gap-y-5 ${props.className}`}>
      <DashboardStatistic
        className="text-xl font-black block"
        render={
          <GenericReadFunction
            name="DrawBeacon"
            functionName="getNextDrawId"
            component={(props) => (
              <>
                <BigNumberToString className="text-xl font-black block" bigNumber={props.value} />
              </>
            )}
          />
        }
        label="Next Draw ID"
      />
      <DashboardStatistic
        className="text-xl font-black block"
        render={
          <GenericReadFunction
            name="DrawBeacon"
            functionName="getBeaconPeriodSeconds"
            component={(props) => (
              <span className="text-xl font-black block">
                <SecondsToHoursEstimate seconds={props.value} />
              </span>
            )}
          />
        }
        label="Beacon Period Secs"
      />
      <DashboardStatistic
        className="text-xl font-black block"
        render={
          <GenericReadFunction
            name="DrawBeacon"
            functionName="getBeaconPeriodStartedAt"
            component={(props) => (
              <span className="text-xl font-black block">
                <EpochToCalendarDate epoch={props.value} />
                {/* <SecondsToHoursEstimate seconds={props.value} /> */}
              </span>
            )}
          />
        }
        label="Beacon Draw Period"
      />
      <DashboardStatistic
        className="text-xl font-black block"
        render={
          <GenericReadFunction
            name="DrawBeacon"
            functionName="getRngService"
            component={(props) => (
              <span className="text-xl font-black block">
                <Address address={props.value} trim={6} />
              </span>
            )}
          />
        }
        label="RNG Service"
      />
    </div>
  );
};

export default DrawBeaconOverviewCards;
