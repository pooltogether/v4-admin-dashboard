// @ts-nocheck
import { useEffect, useState } from "react";

import ContractMapping from "@src/data/contractNetworks.json";
import { useEthers } from "@usedapp/core";

const debug = require("debug")("web3");

export const useGetContractAddress = (name: string): string => {
  const { chainId } = useEthers();
  const [address, setAddress] = useState("");

  useEffect(() => {
    const contract = Object.keys(ContractMapping).filter(
      (contract) => contract.toLowerCase() === name.toLowerCase()
    )[0];
    if (contract) {
      setAddress(ContractMapping[contract][chainId]);
    }
    debug(contract, "contract");
  }, [name, chainId]);

  return address;
};
