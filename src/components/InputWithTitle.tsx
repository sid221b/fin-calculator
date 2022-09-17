import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { numberToLocalText } from 'utils/amount'
import colors from 'utils/colors'
import CustomInput, { CustomTextPropsType } from './CustomInput'
import CustomText from './CustomText'

const styles = StyleSheet.create({
  inputWrap: {
    marginBottom: 12,
  },
  inputTitle: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '400',
    marginRight: 8,
  },
  input: {
    flex: 1,
  },
  amountInWords: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: colors.dark.text.secondary,
  },
})

interface InputWithTitlePropsType {
  name: string
  showWords?: boolean
  inputProps: CustomTextPropsType
}
const InputWithTitle: React.FC<InputWithTitlePropsType> = ({ name, showWords, inputProps }) => {
  return (
    <View style={styles.inputWrap}>
      <CustomText style={styles.inputTitle}>{name}</CustomText>
      <CustomInput
        style={styles.input}
        placeholderTextColor={colors.dark.text.secondary}
        {...inputProps}
      />
      {showWords && (
        <CustomText style={styles.amountInWords}>{numberToLocalText(inputProps.value)}</CustomText>
      )}
    </View>
  )
}

export default memo(InputWithTitle)
