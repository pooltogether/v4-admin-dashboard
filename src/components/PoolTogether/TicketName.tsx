import { useERC20Call } from '@src/hooks/contracts/useERC20';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { isAddress } from '@src/utils/is';
import PropTypes from 'prop-types';

type ITicketNameFetch = {
  address: string;
  className?: string;
};

const TicketNameFetch = ({ className, address }: ITicketNameFetch) => {
  const value = useERC20Call(address, 'name', []);
  if (value) return <span className={className}>{value}</span>;
  return null;
};

type ITicketName = {
  address: string;
  className?: string;
  defaultValue?: string | number;
};

/**
 * @name TicketName
 * @param {Object} props
 */
export const TicketName = ({
  className,
  // address,
  defaultValue,
}: ITicketName) => {
  const address = useGetContractAddress('Ticket');

  if (isAddress(address)) {
    return <TicketNameFetch address={address} className={className} />;
  }
  return <span className={className}>{defaultValue}</span>;
};

TicketName.propTypes = {
  address: PropTypes.string,
  className: PropTypes.string,
};

export default TicketName;
