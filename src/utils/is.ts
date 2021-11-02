import { BigNumber } from "@ethersproject/bignumber";
import { utils } from "ethers";

export const isUndefined = (value: any | undefined): Boolean => {
  return typeof value === "undefined";
};

export const isAddress = (value: any | undefined): Boolean => {
  return utils.isAddress(value);
};

export const isTransactionHash = (number: BigNumber | any): Boolean => {
  return !!BigNumber.isBigNumber(number);
};

export const isBigNumber = (number: BigNumber | any): Boolean => {
  return !!BigNumber.isBigNumber(number);
};

export const isPositiveBigNumber = (number: BigNumber | undefined): Boolean => {
  return BigNumber.isBigNumber(number) && number.gt(0);
};

export const isTypeOfString = (value: any): Boolean => {
  return typeof value === "string";
};

export const isTypeOfNumber = (value: any): Boolean => {
  return typeof value === "number";
};

export const isBigNumberUnformatted = (bigNumberUnformatted: any): Boolean => {
  return !!(bigNumberUnformatted && bigNumberUnformatted.type === "BigNumber");
};
