import React, { useEffect, useState } from 'react';

import { DateTime } from 'luxon';

const UTCToRelativeDate = (props) => {
  const [date] = useState(props.date);
  const [relative, setRelative] = useState<any>(0);

  useEffect(() => {
    const DateFromMillis = DateTime.fromISO(date);
    if (DateFromMillis.isValid) setRelative(DateFromMillis.toRelative());
  }, [date]);

  return relative ? <span>{relative}</span> : null;
};

export default UTCToRelativeDate;
