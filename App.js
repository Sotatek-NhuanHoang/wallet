/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import { YellowBox, BackHandler, Animated, Easing } from 'react-native';

console.disableYellowBox = true;

import Screens from './app/screen/Screens';


const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      
      const opacity = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [0, 1],
      })
      
      return { opacity };
    },
  }
}

export default App = StackNavigator(Screens, { headerMode: 'screen', navigationOptions: {
  gesturesEnabled: false,
}, transitionConfig });