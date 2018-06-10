import React from 'react';
import { View } from "react-native";
import BaseScreen from './BaseScreen';

class BaseNavigatorWrapperScreen extends BaseScreen {
  navigationRef = (ref) => this.navigator = ref;

  shouldComponentUpdate(nextProps, nextStates) {
    const navigationAction = nextProps.navigationAction;
    if (navigationAction) {
      this.navigator.dispatch(navigationAction);
      
      return false;
    }
  }
}

export default BaseNavigatorWrapperScreen;

export function mapStateToProps (state) {
  return {
    navigationAction: state.navigation.navigationAction 
  }
}