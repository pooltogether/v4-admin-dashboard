interface IUseMultiContractMuiltiCall {
  contractAddressList: string[];
  contractInterfaceList: any[];
  contractMethodList: [string][];
  contractArgumentList: [any][];
}

export const useMultiContractMuiltiCall = ({
  contractAddressList,
  contractInterfaceList,
  contractMethodList,
  contractArgumentList,
}: IUseMultiContractMuiltiCall) => {};

export default useMultiContractMuiltiCall;
