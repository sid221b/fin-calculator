import React, { memo } from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import images from 'assets/images'
import CustomText from './CustomText'
import colors from 'utils/colors'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    shadowColor: '#222',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderBottomColor: colors.dark.bg.bg1,
    borderBottomWidth: 1
  },
  home: {
    position: 'absolute',
    left: 24,
    top: 10
  },
  homeIcon: {
    height: 26,
    width: 26
  },
  header: {
    fontSize: 18,
    fontWeight: '500'
  }
})

const Header = ({ title }) => {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.home} onPress={goBack}>
        <Image
          source={images.homeIcon}
          resizeMode='contain'
          style={styles.homeIcon}
        />
      </Pressable>
      <CustomText style={styles.header}>{title}</CustomText>
    </View>
  )
}

export default memo(Header)
