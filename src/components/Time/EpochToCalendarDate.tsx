import { useEffect, useState } from 'react';

import { DateTime } from 'luxon';

interface IEpochToCalendarDate {
  className?: string;
  epoch: any | number | bigint;
}

/**
 * @name EpochToCalendarDate
 * @param {*} props
 */
export const EpochToCalendarDate = ({
  className,
  epoch = 0,
}: IEpochToCalendarDate) => {
  const SecondsToMill = 1000;
  const [date, setDate] = useState('Loading...');

  useEffect(() => {
    const DateFromMillis = DateTime.fromMillis(epoch * SecondsToMill);
    if (DateFromMillis.isValid)
      setDate(DateFromMillis.toLocaleString(DateTime.DATE_FULL));
  }, [epoch]);

  return <span className={className}>{date}</span>;
};

export default EpochToCalendarDate;
