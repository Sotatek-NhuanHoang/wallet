/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
import Screens from './app/screen/Screens';
import Transitions from './app/utils/Transitions';

console.disableYellowBox = true;

export default App = StackNavigator(Screens, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: Transitions.opacityTransition
});