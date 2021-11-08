export function createContractCalls(abi: any, address: string, methods: any[], inputs: any[]) {
  if (!methods || !inputs) return [];
  const calls = methods.map((method, index) => ({
    abi,
    address,
    method,
    args: inputs[index],
  }));

  return calls;
}

export default createContractCalls;
