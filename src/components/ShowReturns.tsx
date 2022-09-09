import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from './CustomText'
import colors from 'utils/colors'
import { scale } from 'utils/scaling'
import { CalculatorFuncReturnType } from 'utils/calculate'
import { formatWithComma } from 'utils/amount'

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 10,
    borderColor: colors.dark.bg.bg2,
    borderWidth: 2,
  },
  lineWrapper: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
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
  zeroSp: { marginBottom: 0 },
})

const ShowReturns: React.FC<CalculatorFuncReturnType> = ({
  totalAmount,
  investedAmount,
  returns,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.lineWrapper}>
        <CustomText style={styles.label}>Invested Amount:</CustomText>
        <CustomText style={styles.value}>
          ₹ {formatWithComma(investedAmount)}
        </CustomText>
      </View>
      <View style={styles.lineWrapper}>
        <CustomText style={styles.label}>Estimated Returns:</CustomText>
        <CustomText style={styles.value}>
          ₹ {formatWithComma(returns)}
        </CustomText>
      </View>
      <View style={[styles.lineWrapper, styles.zeroSp]}>
        <CustomText style={styles.label}>Total Value:</CustomText>
        <CustomText style={styles.value}>
          ₹ {formatWithComma(totalAmount)}
        </CustomText>
      </View>
    </View>
  )
}

export default memo(ShowReturns)
