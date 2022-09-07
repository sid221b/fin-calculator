import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import colors from 'utils/colors'
import CustomInput from './CustomInput'
import CustomText from './CustomText'

const styles = StyleSheet.create({
  inputWrap: {
    marginBottom: 12
  },
  inputTitle: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '400',
    marginRight: 8
  },
  input: {
    flex: 1
  }
})

const InputWithTitle = ({ name, inputProps }) => {
  return (
    <View style={styles.inputWrap}>
      <CustomText style={styles.inputTitle}>{name}</CustomText>
      <CustomInput
        style={styles.input}
        placeholderTextColor={colors.dark.text.secondary}
        {...inputProps}
      />
    </View>
  )
}

export default memo(InputWithTitle)
