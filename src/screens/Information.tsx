import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import calculatorInfo, { FaqType } from 'constants/calculatorInfo'
import { RootRouteProps } from 'constants/screens'
import PageWrapper from 'components/PageWrapper'
import CustomText from 'components/CustomText'
import colors from 'utils/colors'

const styles = StyleSheet.create({
  content: {
    marginBottom: 32,
  },
  faqWrapper: {
    marginBottom: 12,
  },
  ques: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
  },
  ans: {
    color: colors.dark.text.secondary,
  },
})

const Information = () => {
  const { params } = useRoute<RootRouteProps<'information'>>()
  const data = params.screen ? calculatorInfo[params.screen] : undefined

  if (!data || !params.screen) return null

  const { title, faqs } = data || {}

  return (
    <PageWrapper showHeader headerProps={{ title, showCross: true }}>
      <View style={styles.content}>
        {(faqs || []).map(({ ques, ans }: FaqType) => (
          <View key={ques} style={styles.faqWrapper}>
            <CustomText style={styles.ques}>{ques}</CustomText>
            <CustomText style={styles.ans}>{ans}</CustomText>
          </View>
        ))}
      </View>
    </PageWrapper>
  )
}

export default Information
