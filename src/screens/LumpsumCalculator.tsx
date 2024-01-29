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
  const [amount, setAmount] = useState<string | undefined>()
  const [rate, setRate] = useState<string | undefined>()
  const [duration, setDuration] = useState<string | undefined>()
  const [showReturns, setShowReturns] = useState(false)
  const [returnsData, setReturnsData] = useState({
    investedAmount: 0,
    returns: 0,
    totalAmount: 0,
  })

  const calculateReturns = () => {
    if (!amount) setAmount('10000')
    if (!rate) setRate('12')
    if (!duration) setDuration('5')
    setShowReturns(true)
    setReturnsData(
      clacLumpSumReturn({ amount: amount || 10000, rate: rate || 12, duration: duration || 5 })
    )
  }

  return (
    <PageWrapper
      showHeader
      headerProps={{ title: 'Lumpsum Calculator', showInfo: true, infoPage: 'lumpSum' }}>
      <InputWithTitle
        name='Amount: '
        showWords
        inputProps={{
          onChangeText: setAmount,
          value: amount,
          placeholder: '₹ 10,000',
          keyboardType: 'numeric',
          type: 'amount',
        }}
      />
      <InputWithTitle
        name='Expected rate of return (P.A): '
        inputProps={{
          onChangeText: setRate,
          value: rate,
          placeholder: '12%',
          keyboardType: 'numeric',
          type: 'number',
        }}
      />
      <InputWithTitle
        name='Tenure (in years): '
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
