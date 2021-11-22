import React from 'react';

import { JustifyBetween } from '@src/components/Layout/Flex/JustifyBetween';
import { shortenAddress } from '@src/utils/convert';

export const DrawParameters = ({ value }: { value: any }) => {
  if (!value) return null;
  return (
    <div className="">
      <JustifyBetween>
        <span className="text-sm">drawId:</span>
        <span className="text-sm"> {value.drawId}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">winningRandomNumber:</span>
        <span className="text-sm font">
          {shortenAddress(value.winningRandomNumber.toString(), 10)}
        </span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">beaconPeriodSeconds:</span>
        <span className="text-sm"> {value.beaconPeriodSeconds}</span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">beaconPeriodStartedAt:</span>
        <span className="text-sm">
          {' '}
          {value.beaconPeriodStartedAt.toString()}
        </span>
      </JustifyBetween>
      <JustifyBetween>
        <span className="text-sm">timestamp:</span>
        <span className="text-sm"> {value.timestamp.toString()}</span>
      </JustifyBetween>
    </div>
  );
};

export default DrawParameters;
