import React, { memo } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import colors from 'utils/colors'

const CustomText: React.FC<TextProps> = ({
  children,
  style = styles.styleProp,
  ...props
}) => {
  return (
    <Text style={[styles.default, style]} allowFontScaling {...props}>
      {children}
    </Text>
  )
}

export default memo(CustomText)

const styles = StyleSheet.create({
  default: {
    color: colors.dark.text.primary,
  },
  styleProp: {},
})
