import React, { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import PageWrapper from 'components/PageWrapper'
import CustomText from 'components/CustomText'
import InputWithTitle from 'components/InputWithTitle'
import colors from 'utils/colors'
import { ShowCagrReturns } from 'components/ShowReturns'
import { calculateCagr } from 'utils/calculate'

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
  duration: '5',
  finalAmount: '10000',
  amount: '1000',
}

const CagrCalculator: React.FC = () => {
  const [amount, setAmount] = useState<string | undefined>()
  const [finalAmount, setFinalAmount] = useState<string | undefined>()
  const [duration, setDuration] = useState<string | undefined>()
  const [showReturns, setShowReturns] = useState(false)
  const [returnsData, setReturns] = useState<any>({
    cagr: '',
    investedAmount: '',
    finalAmount: '',
  })

  const calculateReturns = () => {
    if (!amount) setAmount(defaultValues.amount)
    if (!finalAmount) setFinalAmount(defaultValues.finalAmount)
    if (!duration) setDuration(defaultValues.duration)
    setShowReturns(true)
    setReturns({
      cagr: calculateCagr({
        amount: amount || defaultValues.amount,
        finalAmount: finalAmount || defaultValues.finalAmount,
        duration: duration || defaultValues.duration,
      }),
      finalAmount: finalAmount || defaultValues.finalAmount,
      investedAmount: amount || defaultValues.amount,
    })
  }

  return (
    <PageWrapper
      showHeader
      headerProps={{ title: 'CAGR Calculator', showInfo: true, infoPage: 'cagr' }}>
      <InputWithTitle
        name='Invested Amount: '
        showWords
        inputProps={{
          onChangeText: setAmount,
          value: amount,
          placeholder: '₹ 1,000',
          keyboardType: 'numeric',
          type: 'amount',
        }}
      />
      <InputWithTitle
        name='Final Amount: '
        showWords
        inputProps={{
          onChangeText: setFinalAmount,
          value: finalAmount,
          placeholder: '₹ 10,000',
          keyboardType: 'numeric',
          type: 'amount',
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
        <ShowCagrReturns
          investedAmount={returnsData.investedAmount}
          finalValue={returnsData.finalAmount}
          cagr={returnsData.cagr}
        />
      )}
    </PageWrapper>
  )
}

export default CagrCalculator
