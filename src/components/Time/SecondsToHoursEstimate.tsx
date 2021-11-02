import { useEffect, useState } from 'react';

import { Duration } from 'luxon';

interface ISecondsToHoursEstimate {
  className?: string;
  seconds: any | number | bigint;
}

/**
 * @name SecondsToHoursEstimate
 * @param {*} props
 */
export const SecondsToHoursEstimate = ({ className, seconds }: ISecondsToHoursEstimate) => {
  const [date, setDate] = useState('Loading...');

  useEffect(() => {
    setDate(Duration.fromMillis(seconds * 1000).toFormat("hh'h' ss's'"));
  }, [seconds]);

  return <span className={className}>{date}</span>;
};

export default SecondsToHoursEstimate;
