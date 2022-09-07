import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

const Information = ({}) => {
  const params = useRoute()
  console.log(
    '🚀 ~ file: Information.js ~ line 7 ~ Information ~ params',
    params
  )
  return (
    <View>
      <Text>Information</Text>
    </View>
  )
}

export default Information

const styles = StyleSheet.create({})
