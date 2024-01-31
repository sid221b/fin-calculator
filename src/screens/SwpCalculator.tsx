import React, { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import PageWrapper from 'components/PageWrapper'
import CustomText from 'components/CustomText'
import InputWithTitle from 'components/InputWithTitle'
import colors from 'utils/colors'
import ShowReturns, { ShowCagrReturns } from 'components/ShowReturns'
import { calculateCagr, calculateSwpReturns } from 'utils/calculate'

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

const defaultValues = {
  rate: '12',
  duration: '5',
  amount: '1000000',
  withdrawalPerMonth: '10000',
}

const SwpCalculator: React.FC = () => {
  const [amount, setAmount] = useState<string | undefined>()
  const [withdrawalPerMonth, setWithdrawalPerMonth] = useState<string | undefined>()
  const [rate, setRate] = useState<string | undefined>()
  const [duration, setDuration] = useState<string | undefined>()
  const [showReturns, setShowReturns] = useState(false)
  const [returnsData, setReturns] = useState({
    investedAmount: 0,
    finalAmount: 0,
    totalWithdrawalAmount: 0,
  })

  const calculateReturns = () => {
    if (!amount) setAmount(defaultValues.amount)
    if (!rate) setRate(defaultValues.rate)
    if (!duration) setDuration(defaultValues.duration)
    if (!withdrawalPerMonth) setWithdrawalPerMonth(defaultValues.withdrawalPerMonth)
    setShowReturns(true)
    setReturns(
      calculateSwpReturns({
        amount: amount || defaultValues.amount,
        rate: rate || defaultValues.rate,
        duration: duration || defaultValues.duration,
        withdrawalAmountPerMonth: withdrawalPerMonth || defaultValues.withdrawalPerMonth,
      })
    )
  }

  return (
    <PageWrapper
      showHeader
      headerProps={{ title: 'SWP Calculator', showInfo: true, infoPage: 'swp' }}>
      <InputWithTitle
        name='Invested Amount: '
        showWords
        inputProps={{
          onChangeText: setAmount,
          value: amount,
          placeholder: '₹ 10,00,000',
          keyboardType: 'numeric',
          type: 'amount',
        }}
      />
      <InputWithTitle
        name='Withdrawal Amount Per Month: '
        showWords
        inputProps={{
          onChangeText: setWithdrawalPerMonth,
          value: withdrawalPerMonth,
          placeholder: '₹ 10,000',
          keyboardType: 'numeric',
          type: 'amount',
        }}
      />
      <InputWithTitle
        name='Expected rate of return (annually): '
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
          totalWithdrawalAmount={returnsData.totalWithdrawalAmount}
          totalAmount={returnsData.finalAmount}
        />
      )}
    </PageWrapper>
  )
}

export default SwpCalculator
