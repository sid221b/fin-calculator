import { ScrollView, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header, { HeaderPropsType } from './Header'
import colors from 'utils/colors'

interface PageWrapperPropsType {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  showHeader: boolean
  headerProps: HeaderPropsType
}
const PageWrapper: React.FC<PageWrapperPropsType> = ({
  children,
  showHeader,
  headerProps,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.pageWrapper, style]}>
      {showHeader && <Header {...headerProps} />}
      <ScrollView style={styles.contentWrapper}>{children}</ScrollView>
    </SafeAreaView>
  )
}

export default PageWrapper

const styles = StyleSheet.create({
  pageWrapper: {
    backgroundColor: colors.dark.bg.bg0,
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    padding: 24,
  },
})
