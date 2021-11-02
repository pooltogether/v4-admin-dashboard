import { BigNumber } from "ethers";

export const validateInputs = (inputs: Array<string | number | BigNumber>) => {
  let valid = true;
  inputs.forEach((input) => {
    if (input === undefined || input === null) valid = false;
  });
  return valid;
};
