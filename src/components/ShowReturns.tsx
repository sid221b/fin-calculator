import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from './CustomText'
import colors from 'utils/colors'
import { scale } from 'utils/scaling'
import { CalculatorFuncReturnType } from 'utils/calculate'
import { formatWithComma, numberToLocalText } from 'utils/amount'

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 10,
    borderColor: colors.dark.bg.bg2,
    borderWidth: 2,
  },
  lineWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacing: {
    marginBottom: 8,
  },
  label: {
    width: scale(150),
    marginRight: 8,
    fontSize: 14,
  },
  value: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
  },
  zeroSp: {
    marginBottom: 0,
  },
  moneyWords: {
    textAlign: 'right',
    color: colors.dark.text.secondary,
    fontSize: 10,
    lineHeight: 14,
    marginBottom: 14,
  },
})

interface CagrReturnPropTypes {
  investedAmount: number
  finalValue: number
  cagr: number
}

export const ShowCagrReturns: React.FC<CagrReturnPropTypes> = ({
  investedAmount,
  finalValue,
  cagr,
}) => (
  <View style={styles.container}>
    <View style={[styles.lineWrapper, styles.spacing]}>
      <CustomText style={styles.label}>Invested Amount:</CustomText>
      <CustomText style={styles.value}>{`₹ ${formatWithComma(investedAmount)}`}</CustomText>
    </View>
    <View style={[styles.lineWrapper, styles.spacing]}>
      <CustomText style={styles.label}>Final Amount:</CustomText>
      <CustomText style={styles.value}>{`₹ ${formatWithComma(finalValue)}`}</CustomText>
    </View>
    <View style={[styles.lineWrapper, styles.zeroSp]}>
      <CustomText style={styles.label}>CAGR:</CustomText>
      <CustomText style={styles.value}>{`${cagr}%`}</CustomText>
    </View>
  </View>
)

interface ShowReturnProps extends Omit<CalculatorFuncReturnType, 'returns'> {
  totalWithdrawalAmount?: number
  returns?: number
}

const ShowReturns: React.FC<ShowReturnProps> = ({
  totalAmount,
  investedAmount,
  returns,
  totalWithdrawalAmount,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.lineWrapper}>
        <CustomText style={styles.label}>Invested Amount:</CustomText>
        <CustomText style={styles.value}>{`₹ ${formatWithComma(investedAmount)}`}</CustomText>
      </View>
      <CustomText style={styles.moneyWords}>{numberToLocalText(investedAmount)}</CustomText>

      {!!returns && (
        <>
          <View style={styles.lineWrapper}>
            <CustomText style={styles.label}>Estimated Returns:</CustomText>
            <CustomText style={styles.value}>{`₹ ${formatWithComma(returns)}`}</CustomText>
          </View>
          <CustomText style={styles.moneyWords}>{numberToLocalText(returns)}</CustomText>
        </>
      )}

      {!!totalWithdrawalAmount && (
        <>
          <View style={styles.lineWrapper}>
            <CustomText style={styles.label}>Total Withdrawal Amount:</CustomText>
            <CustomText style={styles.value}>{`₹ ${formatWithComma(
              totalWithdrawalAmount
            )}`}</CustomText>
          </View>
          <CustomText style={styles.moneyWords}>
            {numberToLocalText(totalWithdrawalAmount)}
          </CustomText>
        </>
      )}

      <View style={[styles.lineWrapper, styles.zeroSp]}>
        <CustomText style={styles.label}>Total Value:</CustomText>
        <CustomText style={styles.value}>{`₹ ${formatWithComma(totalAmount)}`}</CustomText>
      </View>
      <CustomText style={styles.moneyWords}>{numberToLocalText(totalAmount)}</CustomText>
    </View>
  )
}

export default memo(ShowReturns)
