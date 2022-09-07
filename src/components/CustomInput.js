import { StyleSheet, TextInput } from 'react-native'
import React, { memo } from 'react'
import colors from 'utils/colors'
import { formatAmount, removeSymbolsFromAmount } from 'utils/amount'

const styles = StyleSheet.create({
  default: {
    color: colors.dark.text.primary,
    backgroundColor: colors.dark.bg.bg1,
    borderColor: colors.dark.bg.bg3,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 4
  },
  styleProp: {}
})

const CustomText = ({
  children,
  style = styles.styleProp,
  type,
  value,
  onChangeText,
  ...props
}) => {
  const formattedVal = type === 'amount' ? formatAmount(value) : value

  const onTextChange = txt => {
    if (type === 'amount') {
      return onChangeText(removeSymbolsFromAmount(txt))
    }
    if (type === 'number') {
      return onChangeText(removeSymbolsFromAmount(txt))
    }
    onChangeText(txt)
  }

  return (
    <TextInput
      style={[styles.default, style]}
      value={formattedVal}
      onChangeText={onTextChange}
      allowFontScaling
      {...props}
    />
  )
}

export default memo(CustomText)
