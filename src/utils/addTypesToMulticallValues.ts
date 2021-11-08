import { getMethodInterface } from '@src/utils/getMethodInterface';

export function addTypesToMulticallValues(values: any[], methods: any[], abi: any[] | undefined) {
  if (!values || !methods || !abi) return null;
  return values.map((value, idx) => {
    const methodInterface = getMethodInterface(abi, methods[idx]);
    if (!value || !methodInterface) return null;
    return {
      value: value[0],
      type: methodInterface.outputs[0].type,
      internalType: methodInterface.outputs[0].internalType,
      status: 1,
      name: methodInterface.name,
      stateMutability: methodInterface.stateMutability,
    };
  });
}
