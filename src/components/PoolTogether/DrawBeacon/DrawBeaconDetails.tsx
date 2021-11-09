import React from 'react';

import { ContractAddressUnavailable } from '@src/components/Web3/Contracts/ContractAddressUnavailable';
import { useDrawBeaconCalls } from '@src/hooks/contracts/useDrawBeacon';
import { useGetContractABI } from '@src/hooks/useGetContractABI';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import classNames from 'classnames';

interface DrawBeaconDetailsProps {
  className?: string;
}

function findMethodInterface(abi: any, methodName: string) {
  if (!abi || !methodName) return null;
  return abi.find((method: any) => method.name === methodName);
}

function getMulticallValues(values: string[], methods: any, abi: any) {
  if (!values || !methods || !abi) return null;
  return values.map((value, idx) => {
    const methodInterface = findMethodInterface(abi, methods[idx]);
    if (!methodInterface) return null;
    return {
      value: value[0],
      type: methodInterface.outputs[0].type,
      internalType: methodInterface.outputs[0].internalType,
      status: 1,
    };
  });
}

export const DrawBeaconDetails = ({ className }: DrawBeaconDetailsProps) => {
  const address = useGetContractAddress('DrawBeacon');
  const styleBase = classNames(className, 'draw-beacon-details');
  if (!address) return <ContractAddressUnavailable />;
  return (
    <div className={styleBase}>
      <ContractInitialized address={address} />{' '}
    </div>
  );
};

export default DrawBeaconDetails;

interface ContractInitializedProps {
  className?: string;
  address?: string;
}

const ContractInitialized = ({ address, children }: ContractInitializedProps) => {
  const abi = useGetContractABI('DrawBeacon');
  const methods = [
    'canStartDraw',
    'canCompleteDraw',
    'calculateNextBeaconPeriodStartTimeFromCurrentTime',
  ];
  const inputs = [[], [], []];

  // @ts-ignore
  const data = getMulticallValues(useDrawBeaconCalls(address, methods, inputs), methods, abi);
  return <div></div>;
};
