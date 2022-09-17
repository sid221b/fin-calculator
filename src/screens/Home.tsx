import React from 'react'
import { Pressable, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import colors from 'utils/colors'
import CustomText from 'components/CustomText'
import { RootStackParamList } from 'constants/screens'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colors.dark.bg.bg0,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    alignSelf: 'center',
    marginBottom: 24,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '500',
  },
  sub: {
    marginBottom: 18,
    color: colors.dark.text.secondary,
  },
  btnWrapper: {
    paddingVertical: 8,
    marginBottom: 16,
    borderColor: colors.dark.button.primary,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: colors.dark.text.primary,
    fontWeight: '500',
    fontSize: 14,
  },
})

const Home: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const navigateToLumpSum = () => {
    navigation.navigate('lumpSum')
  }

  const navigateToSip = () => {
    navigation.navigate('sip')
  }

  const navigateToCagr = () => {
    navigation.navigate('cagr')
  }

  const navigateToSwp = () => {
    navigation.navigate('swp')
  }

  return (
    <SafeAreaView style={styles.pageContainer}>
      <StatusBar backgroundColor={colors.dark.bg.bg0} />
      <ScrollView style={styles.contentWrapper}>
        <CustomText style={styles.title}>Calculators</CustomText>
        <CustomText style={styles.sub}>These are some useful finance calculators</CustomText>

        <Pressable onPress={navigateToLumpSum} style={styles.btnWrapper}>
          <CustomText style={styles.btnTxt}>Lumpsum Calculator</CustomText>
        </Pressable>

        <Pressable onPress={navigateToSip} style={styles.btnWrapper}>
          <CustomText style={styles.btnTxt}>SIP Calculator</CustomText>
        </Pressable>

        <Pressable onPress={navigateToSwp} style={styles.btnWrapper}>
          <CustomText style={styles.btnTxt}>SWP Calculator</CustomText>
        </Pressable>

        <Pressable onPress={navigateToCagr} style={styles.btnWrapper}>
          <CustomText style={styles.btnTxt}>CAGR Calculator</CustomText>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
