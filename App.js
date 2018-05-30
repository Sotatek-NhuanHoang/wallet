/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';

console.disableYellowBox = true;

import Screens from './app/screen/Screens';
export default App = StackNavigator(Screens, {headerMode:'screen'});



