export function range(size: number, startAt: number = 0): Array<number> {
  if (!size) return [];
  return [...Array(size).keys()].map((i) => i + startAt);
}

export default range;
