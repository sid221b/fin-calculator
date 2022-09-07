import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import CustomText from './CustomText'
import colors from 'utils/colors'
import { scale } from 'utils/scaling'

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 10,
    borderColor: colors.dark.bg.bg2,
    borderWidth: 2
  },
  lineWrapper: {
    // flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center'
  },
  label: {
    width: scale(150),
    marginRight: 8,
    fontSize: 14
  },
  value: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right'
  }
})

const ShowReturns = ({ totalAmount, investedAmount, returns }) => {
  return (
    <View style={styles.container}>
      <View style={styles.lineWrapper}>
        <CustomText style={styles.label}>Invested Amount:</CustomText>
        <CustomText style={styles.value}>₹ {investedAmount}</CustomText>
      </View>
      <View style={styles.lineWrapper}>
        <CustomText style={styles.label}>Estimated Returns:</CustomText>
        <CustomText style={styles.value}>₹ {returns}</CustomText>
      </View>
      <View style={[styles.lineWrapper, { marginBottom: 0 }]}>
        <CustomText style={styles.label}>Total Value:</CustomText>
        <CustomText style={styles.value}>₹ {totalAmount}</CustomText>
      </View>
    </View>
  )
}

export default memo(ShowReturns)
