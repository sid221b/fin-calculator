import React, { memo } from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import images from 'assets/images'
import CustomText from './CustomText'
import colors from 'utils/colors'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'constants/screens'
import { CalcInfoType } from 'constants/calculatorInfo'

export interface HeaderPropsType {
  title: string
  showInfo?: boolean
  infoPage?: CalcInfoType
  backIcon?: string
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderBottomColor: colors.dark.bg.bg2,
    borderBottomWidth: 1,
  },
  home: {
    position: 'absolute',
    left: 24,
    top: 10,
  },
  homeIcon: {
    height: 26,
    width: 26,
  },
  header: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
  },
  info: {
    position: 'absolute',
    right: 24,
    top: 10,
  },
})

const Header: React.FC<HeaderPropsType> = ({
  title,
  showInfo,
  infoPage,
  backIcon = images.homeIcon,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const goBack = () => {
    navigation.goBack()
  }

  const navigateToInfo = () => {
    if (infoPage) {
      navigation.navigate('information', { screen: infoPage })
    }
  }

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.home} onPress={goBack}>
        <Image source={backIcon} resizeMode='contain' style={styles.homeIcon} />
      </Pressable>
      <CustomText style={styles.header}>{title}</CustomText>
      {showInfo && infoPage && (
        <Pressable style={styles.info} onPress={navigateToInfo}>
          <Image source={images.infoIcon} resizeMode='contain' style={styles.homeIcon} />
        </Pressable>
      )}
    </View>
  )
}

export default memo(Header)
