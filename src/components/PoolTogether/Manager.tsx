import { useManageableCall } from '@src/hooks/contracts/useManageable';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { isAddress } from '@src/utils/is';
import PropTypes from 'prop-types';

type IManager = {
  address: string;
  className?: string;
  name: string;
  defaultValue?: string | number;
};

/**
 * @name Manager
 * @param {Object} props
 */
export const Manager = ({ className, name, defaultValue }: IManager) => {
  const address = useGetContractAddress(name);
  if (isAddress(address)) {
    return <ManagerFetch address={address} className={className} />;
  }
  return <span className={className}>{defaultValue}</span>;
};

Manager.propTypes = {
  address: PropTypes.string,
  className: PropTypes.string,
};

type IManagerFetch = {
  address: string;
  className?: string;
};

const ManagerFetch = ({ className, address }: IManagerFetch) => {
  const value = useManageableCall(address, 'manager', []);
  if (value) return <span className={className}>{value}</span>;
  return null;
};

export default Manager;
