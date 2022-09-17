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

const CagrCalculator: React.FC = () => {
  const [amount, setAmount] = useState<any>('')
  const [finalAmount, setFinalAmount] = useState<any>('')
  const [duration, setDuration] = useState('')
  const [showReturns, setShowReturns] = useState(false)
  const [returnsData, setReturns] = useState({
    cagr: 0,
    investedAmount: 0,
    finalAmount: 0,
  })

  const calculateReturns = () => {
    setShowReturns(true)
    setReturns({
      cagr: calculateCagr({ amount, finalAmount, duration }),
      finalAmount,
      investedAmount: amount,
    })
  }

  return (
    <PageWrapper
      showHeader
      headerProps={{ title: 'CAGR Calculator', showInfo: true, infoPage: 'cagr' }}
    >
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
