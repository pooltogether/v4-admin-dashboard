export function convertDrawTupleToFormDefaults(drawTuple: any) {
  return {
    beaconPeriodSeconds: drawTuple.beaconPeriodSeconds,
    beaconPeriodStartedAt: drawTuple.beaconPeriodStartedAt,
    drawId: drawTuple.drawId,
    timestamp: drawTuple.timestamp,
    winningRandomNumber: drawTuple.winningRandomNumber,
  };
}

export default convertDrawTupleToFormDefaults;
