import React, { useEffect, useState } from 'react';

import { DateTime } from 'luxon';

interface EpochToRelativeDateProps {
  className?: string;
  epoch?: string | number;
}

export const EpochToRelativeDate = ({ className, epoch }: EpochToRelativeDateProps) => {
  const SecondsToMill = 1000;
  const [relative, setRelative] = useState<any>(0);

  useEffect(() => {
    const DateFromMillis = DateTime.fromMillis(Number(epoch) * SecondsToMill);
    if (DateFromMillis.isValid) setRelative(DateFromMillis.toRelative());
  }, [epoch]);

  return relative ? <span className={className}>{relative}</span> : null;
};

export default EpochToRelativeDate;
