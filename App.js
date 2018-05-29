/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
import Screens from './app/screen/Screens';
/*
import WelcomeScreen from './app/screen/WelcomeScreen';
import LoginScreen from './app/screen/login/LoginScreen';
import React, {Component} from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'WelcomeScreen' };
    console.log('Start doing 1s')
    setTimeout(() => {
      console.log('Done 1s');
      this.setState({currentScreen:'LoginScreen'});
    }, 1000);
  }
  render() {
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === 'WelcomeScreen' ? <WelcomeScreen /> : <LoginScreen />
    return mainScreen;
  }
}
export default App = Main;
*/
export default App = StackNavigator(Screens, {headerMode:'screen'});



