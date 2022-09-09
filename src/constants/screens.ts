import { RouteProp } from '@react-navigation/native'

const screens = {
  home: 'home',
  lumpSum: 'lumpSum',
  sip: 'sip',
  swp: 'swp',
  information: 'information',
}

export type RootStackParamList = {
  home: undefined
  lumpSum: undefined
  sip: undefined
  swp: undefined
  information: { screen: string }
}

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  RouteName
>

export default screens
