import { ReactElement } from 'react';

import { Component } from '@src/components/Component';
import { useGetContractABI } from '@src/hooks/useGetContractABI';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { useSafeContractCall } from '@src/hooks/useSafeContractCall';
import PropTypes from 'prop-types';

type IGenericReadFunction = {
  address: string;
  className?: string;
  name: string;
  functionName: string;
  args: Array<any>;
  defaultValue?: string | number;
  component: ReactElement;
};

/**
 * @name GenericReadFunction
 * @param {Object} props
 */
export const GenericReadFunction = ({
  name,
  functionName,
  args = [],
  component,
}: IGenericReadFunction): ReactElement | null => {
  const abi = useGetContractABI(name);
  const address = useGetContractAddress(name);
  const value = useSafeContractCall(address, abi, functionName, args);

  if (value && component) {
    return Component(component, { value });
  }
  return null;
};

GenericReadFunction.propTypes = {
  address: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
};

GenericReadFunction.defaultProps = {
  address: PropTypes.string,
  name: '',
};

export default GenericReadFunction;
