// @ts-nocheck
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { ethers, utils } from 'ethers';

import { isTypeOfString, isTypeOfNumber, isBigNumberUnformatted } from './is';

/**
 * @name convertNumberToBigNumber
 * @param number
 * @param decimals
 * @returns {BigNumber}
 */
export function convertNumberToBigNumber(
  number: BigNumber | string | number,
  decimals: number = 18
): BigNumber {
  if (isTypeOfString(number)) {
    return BigNumber.from(utils.parseUnits(String(number), decimals));
  }
  if (isTypeOfNumber(number)) {
    return BigNumber.from(utils.parseUnits(String(number), decimals));
  }

  if (isBigNumberUnformatted(number)) {
    // @ts-ignore: Manual Check
    return BigNumber.from(number.hex);
  }

  return BigNumber.from(10);
}

export function convertBigNumberToUSD(number: BigNumber): number | string {
  const formatted = commifyNumber(converNumberToFixed(utils.formatUnits(number)));
  return formatted;
}

export function convertBigNumberToString(number: BigNumber): string | undefined {
  if (BigNumber.isBigNumber(number)) {
    return number.toString();
  }
  return undefined;
}

/**
 * @name commifyNumber
 * @param number
 */
export function commifyNumber(number: string | number) {
  return utils.commify(number);
}

/**
 * @name transformBigNumberToHuman
 * @param x
 * @param precision
 */
export function transformBigNumberToHuman(
  amount: string | number | BigNumber,
  decimals: number | string = 18
) {
  if (!amount) return null;
  if (BigNumber.isBigNumber(amount)) {
    return utils.formatUnits(amount, decimals);
  }
  const bn = BigNumber.from(amount);
  return utils.formatUnits(bn, decimals);
}

/**
 * @name numberTrimDecimals
 * @param x
 * @param precision
 */
export function numberTrimDecimals(x: number | string | undefined, precision = 2) {
  return Number.parseFloat(`${x}`).toFixed(precision);
}

/**
 * @name transformAndCommifyBigNumber
 * @param number
 */
export function transformAndCommifyBigNumber(
  number: BigNumberish,
  decimals: number | string = 18,
  decimalsTrim: number | string = 6
) {
  if (number) {
    return utils.commify(
      numberTrimDecimals(transformBigNumberToHuman(number, decimals), decimalsTrim)
    );
  }
  return null;
}

/**
 * @name commifyTokenBalance
 * @param number
 */
export function commifyTokenBalance(number: number, decimalsTrim: number = 7) {
  if (number) return utils.commify(numberTrimDecimals(number, decimalsTrim));
  return null;
}
/**
 * @name commifyTokenBalanceFromHuman
 * @param number
 */
export function commifyTokenBalanceFromHuman(number, decimalsTrim = 7) {
  if (number) return utils.commify(numberTrimDecimals(number, decimalsTrim));
  return null;
}

/**
 * @name converNumberToFixed
 * @param number
 * @param decimals Decimal precision
 */
export function converNumberToFixed(number: string | number, decimals: number = 2) {
  return Number(number).toFixed(decimals);
}

/**
 * @name parseEther
 * @param number
 * @returns {BigNumber}
 */
export function parseEther(number: string) {
  return utils.parseEther(number);
}

/**
 * @name convertDecimalsToWad
 * @param x
 * @param precision
 */
export function convertDecimalsToWad(amount, decimals = 18) {
  if (!amount) return null;
  const number = BigNumber.isBigNumber(amount) ? amount.toString() : amount;
  return ethers.utils.parseUnits(number, decimals);
}

/**
 * @name parseUnits
 * @param number
 * @param decimals
 * @returns {BigNumber}
 */
export function parseUnits(number: string, decimals: number = 18) {
  return utils.parseUnits(number, decimals);
}

export function shortenAddress(address: string, num = 7, showEnd = true) {
  if (!address) return null;
  return num
    ? `${address.slice(0).slice(0, num)}...${showEnd ? address.slice(0).slice(-num) : ''}`
    : address;
}

export function shortenTransactionHash(txHash, num = 10, showEnd = true) {
  if (!txHash) return null;
  return `${txHash.slice(0).slice(0, num)}...${showEnd ? txHash.slice(0).slice(-num) : ''}`;
}

export function shortenBlockHash(txHash, num, showEnd = true) {
  if (!txHash) return null;
  return `${txHash.slice(0).slice(0, num)}...${showEnd ? txHash.slice(0).slice(-60 - num) : ''}`;
}

export function trimString(stringish: string, num: number, showEnd = true) {
  if (!stringish) return null;
  return `${stringish.slice(0).slice(0, num)}...${
    showEnd ? stringish.slice(0).slice(stringish.length - num, stringish.length) : ''
  }`;
}
