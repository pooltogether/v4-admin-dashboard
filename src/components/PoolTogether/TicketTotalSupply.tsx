import { useERC20Call } from '@src/hooks/contracts/useERC20';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { transformAndCommifyBigNumber } from '@src/utils/convert';
import { isAddress } from '@src/utils/is';
import PropTypes from 'prop-types';

type ITicketTotalSupplyFetch = {
  address: string;
  className?: string;
};

const TicketTotalSupplyFetch = ({
  className,
  address,
}: ITicketTotalSupplyFetch) => {
  const value = useERC20Call(address, 'totalSupply', []);
  if (value)
    return (
      <span className={className}>{transformAndCommifyBigNumber(value)}</span>
    );
  return null;
};

type ITicketTotalSupply = {
  className?: string;
  defaultValue?: string | number;
};

/**
 * @name TicketTotalSupply
 * @param {Object} props
 */
export const TicketTotalSupply = ({
  className,
  defaultValue,
}: ITicketTotalSupply) => {
  const address = useGetContractAddress('Ticket');

  if (isAddress(address)) {
    return <TicketTotalSupplyFetch address={address} className={className} />;
  }
  return <span className={className}>{defaultValue}</span>;
};

TicketTotalSupply.propTypes = {
  className: PropTypes.string,
};

export default TicketTotalSupply;
