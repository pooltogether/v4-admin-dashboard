import { useOwnableCall } from '@src/hooks/contracts/useOwnable';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { isAddress } from '@src/utils/is';
import PropTypes from 'prop-types';

type IOwner = {
  address: string;
  className?: string;
  name: string;
  defaultValue?: string | number;
};

/**
 * @name Owner
 * @param {Object} props
 */
export const Owner = ({ className, name, defaultValue }: IOwner) => {
  const address = useGetContractAddress(name);
  if (isAddress(address)) {
    return <OwnerFetch address={address} className={className} />;
  }
  return <span className={className}>{defaultValue}</span>;
};

Owner.propTypes = {
  address: PropTypes.string,
  className: PropTypes.string,
};

type IOwnerFetch = {
  address: string;
  className?: string;
};

const OwnerFetch = ({ className, address }: IOwnerFetch) => {
  const value = useOwnableCall(address, 'owner', []);
  if (value) return <span className={className}>{value}</span>;
  return null;
};

export default Owner;
