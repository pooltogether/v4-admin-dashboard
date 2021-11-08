export function getMethodInterface(abi: any, methodName: string) {
  if (!abi || !methodName) return null;
  return abi.find((method: any) => method.name === methodName);
}

export default getMethodInterface;
