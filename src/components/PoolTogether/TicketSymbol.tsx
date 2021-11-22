import { useERC20Call } from '@src/hooks/contracts/useERC20';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { isAddress } from '@src/utils/is';
import PropTypes from 'prop-types';

type ITicketSymbol = {
  address: string;
  className?: string;
  defaultValue?: string | number;
};

/**
 * @name TicketSymbol
 * @param {Object} props
 */
export const TicketSymbol = ({ className, defaultValue }: ITicketSymbol) => {
  const address = useGetContractAddress('Ticket');

  if (isAddress(address)) {
    return <TicketSymbolFetch address={address} className={className} />;
  }
  return <span className={className}>{defaultValue}</span>;
};

TicketSymbol.propTypes = {
  address: PropTypes.string,
  className: PropTypes.string,
};

type ITicketSymbolFetch = {
  address: string;
  className?: string;
};

const TicketSymbolFetch = ({ className, address }: ITicketSymbolFetch) => {
  const value = useERC20Call(address, 'symbol', []);
  if (value) return <span className={className}>{value}</span>;
  return null;
};

export default TicketSymbol;
