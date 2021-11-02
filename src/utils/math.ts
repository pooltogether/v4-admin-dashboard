import { BigNumber } from "@ethersproject/bignumber";

export function addBigNumbers(number1: BigNumber, number2: BigNumber): BigNumber {
  return number1.add(number2);
}

export function subBigNumbers(number1: BigNumber, number2: BigNumber): BigNumber {
  return number1.sub(number2);
}

export function mulBigNumbers(number1: BigNumber, number2: BigNumber): BigNumber {
  return number1.mul(number2);
}

export function divBigNumbers(number1: BigNumber, number2: BigNumber): BigNumber {
  return number1.div(number2);
}

export function powBigNumbers(number1: BigNumber, number2: BigNumber): BigNumber {
  return number1.pow(number2);
}
