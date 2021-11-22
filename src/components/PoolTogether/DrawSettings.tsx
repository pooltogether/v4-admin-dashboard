import { usePrizeDistributionBufferCall } from '@src/hooks/contracts/usePrizeDistributionBuffer';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { isAddress } from '@src/utils/is';
import PropTypes from 'prop-types';

type IDrawSettingsFetch = {
  address: string;
  drawId: string | number;
  className?: string;
};

const DrawSettingsFetch = ({
  className,
  address,
  drawId,
}: IDrawSettingsFetch) => {
  const value = usePrizeDistributionBufferCall(address, 'getDrawSetting', [
    drawId,
  ]);
  if (value)
    return (
      <div className={className}>
        <div className="block">
          <span className="font-bold">BitRange:</span>{' '}
          <span className="">{value.bitRangeSize.toString()}</span>
        </div>
        <div className="block">
          <span className="font-bold">MatchCardinality:</span>{' '}
          <span className="">{value.matchCardinality.toString()}</span>
        </div>
        <div className="block">
          <span className="font-bold">Picks Per User:</span>{' '}
          <span className="">{value.maxPicksPerUser.toString()}</span>
        </div>
        <div className="block">
          <span className="font-bold">Number of Picks:</span>{' '}
          <span className="">{value.numberOfPicks.toString()}</span>
        </div>
        <div className="block">
          <span className="font-bold">Prize:</span>{' '}
          <span className="">{value.prize.toString()}</span>
        </div>
      </div>
    );
  return null;
};

type IDrawSettings = {
  address?: string;
  className?: string;
  name: string;
  drawId: string | number;
  defaultValue?: string | number;
};

/**
 * @name DrawSettings
 * @param {Object} props
 */
export const DrawSettings = ({
  className,
  name,
  drawId,
  defaultValue,
}: IDrawSettings) => {
  const address = useGetContractAddress(name);
  if (isAddress(address)) {
    return (
      <DrawSettingsFetch
        address={address}
        className={className}
        drawId={drawId}
      />
    );
  }
  return <span className={className}>{defaultValue}</span>;
};

DrawSettings.propTypes = {
  address: PropTypes.string,
  className: PropTypes.string,
};

export default DrawSettings;
