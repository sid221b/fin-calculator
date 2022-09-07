import React, { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import PageWrapper from 'components/PageWrapper'
import CustomText from 'components/CustomText'
import InputWithTitle from 'components/InputWithTitle'
import colors from 'utils/colors'
import ShowReturns from 'components/ShowReturns'
import { clacLumpSumReturn } from 'utils/calculate'

const styles = StyleSheet.create({
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTitle: {
    marginRight: 8,
  },
  input: {
    flex: 1,
  },
  cta: {
    flex: 1,
    backgroundColor: colors.dark.button.primary,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 16,
  },
  ctaTxt: {
    fontWeight: '500',
    fontSize: 14,
  },
})

const LumpsumCalculator: React.FC = () => {
  const [amount, setAmount] = useState(0)
  const [rate, setRate] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showReturns, setShowReturns] = useState(false)
  const [returnsData, setReturnsData] = useState({
    investedAmount: 0,
    returns: 0,
    totalAmount: 0,
  })

  const calculateReturns = () => {
    setShowReturns(true)
    setReturnsData(clacLumpSumReturn({ amount, rate, duration }))
  }

  return (
    <PageWrapper showHeader headerTitle="Lumpsum Calculator">
      <InputWithTitle
        name="Amount: "
        inputProps={{
          onChangeText: setAmount,
          value: amount,
          placeholder: '₹ 10,000',
          keyboardType: 'numeric',
          type: 'amount',
        }}
      />
      <InputWithTitle
        name="Expected rate of return (P.A): "
        inputProps={{
          onChangeText: setRate,
          value: rate,
          placeholder: '12%',
          keyboardType: 'numeric',
          type: 'number',
        }}
      />
      <InputWithTitle
        name="Tenure (in years): "
        inputProps={{
          onChangeText: setDuration,
          value: duration,
          placeholder: '5 Years',
          keyboardType: 'numeric',
          type: 'number',
        }}
      />
      <Pressable style={styles.cta} onPress={calculateReturns}>
        <CustomText style={styles.ctaTxt}>Calculate Returns</CustomText>
      </Pressable>
      {showReturns && (
        <ShowReturns
          investedAmount={returnsData.investedAmount}
          returns={returnsData.returns}
          totalAmount={returnsData.totalAmount}
        />
      )}
    </PageWrapper>
  )
}

export default LumpsumCalculator
