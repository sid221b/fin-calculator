interface CalculatorArgsType {
  amount: any
  rate: any
  duration: any
}

interface SwpArgsType extends CalculatorArgsType {
  withdrawalAmountPerMonth: any
}

export interface CalculatorFuncReturnType {
  totalAmount: any
  investedAmount: any
  returns: any
}

interface CagrCalcArgsType {
  amount: any
  finalAmount: any
  duration: any
}

const fixTwoPointDecimal = (val: number): number => {
  return String(val).split('.')[1] ? Number(val.toFixed(2)) : val
}

export const clacLumpSumReturn = ({
  amount,
  rate,
  duration,
}: CalculatorArgsType): CalculatorFuncReturnType => {
  // A = P (1 + r/n) ^ nt
  const totalAmount = fixTwoPointDecimal(amount * Math.pow(1 + rate / 100, duration))

  const returns = fixTwoPointDecimal(totalAmount - amount)
  return { totalAmount, investedAmount: amount, returns }
}

export const calculateSipReturns = ({
  amount,
  rate,
  duration,
}: CalculatorArgsType): CalculatorFuncReturnType => {
  const frequency = 1
  const numOfCompoundingPeriod = (12 / frequency) * duration

  const periodicRateOfInt = rate / (12 / frequency) / 100

  const totalAmount = fixTwoPointDecimal(
    amount *
      ((Math.pow(1 + periodicRateOfInt, numOfCompoundingPeriod) - 1) / periodicRateOfInt) *
      (1 + periodicRateOfInt)
  )

  const investedAmount = amount * 12 * duration
  const returns = fixTwoPointDecimal(totalAmount - investedAmount)
  return { totalAmount, investedAmount, returns }
}

export const calculateCagr = ({ amount, finalAmount, duration }: CagrCalcArgsType): number => {
  // CAGR = (FV / PV) ^ (1 / n) – 1
  return fixTwoPointDecimal((Math.pow(finalAmount / amount, 1 / duration) - 1) * 100)
}

// function calculateSwpWithrawal() {

//   const withdrawalAmountValue = Number(withdrawalPerMonth);
//   const tenureValue = Number(tenure);

//   return (withdrawalAmountValue*12)*tenureValue;
// }

// function calculateSwpReturn() {

//   const totalInvestmentValue = Number(totalInvestments);
//   const withdrawalAmountValue = Number(withdrawalPerMonth);
//   const tenureValue = Number(tenure);
//   const expectedReturnsValue = Number(expectedReturns);

// let finswp = (totalInvestmentValue * Math.pow((1 + expectedReturnsValue / 100), tenureValue)) - (withdrawalAmountValue * (Math.pow((1 + (Math.pow((1 + expectedReturnsValue / 100), (1 / 12)) - 1)), (tenureValue * 12)) - 1) / (Math.pow((1 + expectedReturnsValue / 100), (1 / 12)) - 1));

//   if(isNaN(finswp)){
//      finswp = 0;
//   }
//   return Math.round(finswp);
// }

interface SwpFuncReturnType {
  investedAmount: any
  finalAmount: any
  totalWithdrawalAmount: any
}

export const calculateSwpReturns = ({
  amount,
  duration,
  withdrawalAmountPerMonth,
  rate,
}: SwpArgsType): SwpFuncReturnType => {
  // const FV = PMT((1+r/n)^nt-1)  /(r/n))
  const futureValue =
    amount * Math.pow(1 + rate / 100, duration) -
    (withdrawalAmountPerMonth *
      (Math.pow(1 + (Math.pow(1 + rate / 100, 1 / 12) - 1), duration * 12) - 1)) /
      (Math.pow(1 + rate / 100, 1 / 12) - 1)
  const totalWithdrawal = withdrawalAmountPerMonth * 12 * duration
  return {
    investedAmount: amount,
    finalAmount: fixTwoPointDecimal(futureValue),
    totalWithdrawalAmount: fixTwoPointDecimal(totalWithdrawal),
  }
}
