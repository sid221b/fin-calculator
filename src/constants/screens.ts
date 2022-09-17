import { RouteProp } from '@react-navigation/native'
import { CalcInfoType } from './calculatorInfo'

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
  cagr: undefined
  information: { screen: CalcInfoType }
}

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  RouteName
>

export default screens
