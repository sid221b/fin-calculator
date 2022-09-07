/**
 * @format
 */

import { AppRegistry } from 'react-native'
// import App from './App';
import { name as appName } from './app.json'
import AppRoutes from './src/AppRoutes'

AppRegistry.registerComponent(appName, () => AppRoutes)
