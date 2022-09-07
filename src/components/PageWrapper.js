import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import colors from 'utils/colors'

const PageWrapper = ({ children, showHeader, headerTitle, style = {} }) => {
  return (
    <SafeAreaView style={[styles.pageWrapper, style]}>
      {showHeader && <Header title={headerTitle} />}
      <ScrollView style={styles.contentWrapper}>{children}</ScrollView>
    </SafeAreaView>
  )
}

export default PageWrapper

const styles = StyleSheet.create({
  pageWrapper: {
    backgroundColor: colors.dark.bg.bg0,
    flex: 1
  },
  contentWrapper: {
    flex: 1,
    padding: 24
  }
})
