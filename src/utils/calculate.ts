interface CalculatorReturnsArgsType {
  amount: number
  rate: number
  duration: number
}

interface CalculatorFuncReturnType {
  totalAmount: number
  investedAmount: number
  returns: number
}

type NumberLike = number

const fixTwoPointDecimal = (val: NumberLike): number => {
  return Number(val.toFixed(2))
}

export const clacLumpSumReturn = ({
  amount,
  rate,
  duration,
}: CalculatorReturnsArgsType): CalculatorFuncReturnType => {
  // A = P (1 + r/n) ^ nt
  const totalAmount = fixTwoPointDecimal(
    amount * Math.pow(1 + rate / 100, duration)
  )

  const returns = fixTwoPointDecimal(totalAmount - amount)
  return { totalAmount, investedAmount: amount, returns }
}

export const calculateSipReturns = ({
  amount,
  rate,
  duration,
}: CalculatorReturnsArgsType): CalculatorFuncReturnType => {
  const frequency = 1
  const numOfCompoundingPeriod = (12 / frequency) * duration

  const periodicRateOfInt = rate / (12 / frequency) / 100

  const totalAmount = fixTwoPointDecimal(
    amount *
      ((Math.pow(1 + periodicRateOfInt, numOfCompoundingPeriod) - 1) /
        periodicRateOfInt) *
      (1 + periodicRateOfInt)
  )

  const investedAmount = amount * 12 * duration
  const returns = fixTwoPointDecimal(totalAmount - investedAmount)
  return { totalAmount, investedAmount, returns }
}
