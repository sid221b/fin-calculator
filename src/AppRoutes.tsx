import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import screens from 'utils/screens'

// Screens
import Home from 'screens/Home'
import LumpsumCalculator from 'screens/LumpsumCalculator'
import SipCalculator from 'screens/SipCalculator'
import React from 'react'

const Stack = createNativeStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screens.home}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.lumpSum}
          component={LumpsumCalculator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.sip}
          component={SipCalculator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes
