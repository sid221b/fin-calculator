import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from 'constants/screens'

// Screens
import Home from 'screens/Home'
import LumpsumCalculator from 'screens/LumpsumCalculator'
import SipCalculator from 'screens/SipCalculator'
import React from 'react'
import Information from 'screens/Information'

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name='lumpSum'
          component={LumpsumCalculator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='sip' component={SipCalculator} options={{ headerShown: false }} />
        <Stack.Screen name='information' component={Information} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes
