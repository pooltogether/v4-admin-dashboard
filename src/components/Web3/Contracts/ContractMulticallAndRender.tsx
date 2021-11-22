import { ReactElement, ReactNode } from 'react';

import { Component } from '@src/components/Component';
import { ContractIsolatedMulticall } from '@src/components/Web3/Contracts/ContractIsolatedMulticall';
import { useGetContractABI } from '@src/hooks/useGetContractABI';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { addTypesToMulticallValues } from '@src/utils/addTypesToMulticallValues';
import { createContractCalls } from '@src/utils/createContractCalls';
import { useContractCalls } from '@usedapp/core';
import classNames from 'classnames';

const debug = require('debug')('web3:hooks:useDrawBeacon');

const Render = ({ abi, address, methods, args, calls, component }: any) => {
  const data = useContractCalls(address && calls) ?? [];
  const values = addTypesToMulticallValues(data, methods, abi);
  debug('ContractMulticallAndRender:Render:data', data);
  debug('ContractMulticallAndRender:Render:values', values);
  if (!component) return null;
  return Component(component, { values });
};

interface ContractMulticallAndRenderProps {
  className?: string;
  isolated?: boolean;
  contractName?: string;
  contractInterface?: any;
  methods?: any;
  args?: any;
  component?: ReactNode | ReactNode[] | ReactElement | ReactElement[];
}

export const ContractMulticallAndRender = ({
  className,
  contractName,
  contractInterface,
  methods,
  args,
  component,
  isolated,
}: ContractMulticallAndRenderProps) => {
  const address = useGetContractAddress(contractName);
  const abi = useGetContractABI(contractName);
  const calls = createContractCalls(contractInterface, address, methods, args);
  const styleBase = classNames(className, 'ContractMulticallAndRender');
  if (!address || !calls) return null;
  if (isolated) return <ContractIsolatedMulticall calls={calls} />;
  return (
    <Render
      className={styleBase}
      address={address}
      abi={abi}
      methods={methods}
      args={args}
      calls={calls}
      component={component}
    />
  );
};

export default ContractMulticallAndRender;
