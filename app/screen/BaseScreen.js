import React from 'react';
import { View } from "react-native";
import { NavigationActions } from 'react-navigation';

export default class BaseScreen extends React.Component {
  
  navigate(screen, params) {
    const { navigate } = this.props.navigation;
    navigate(screen, params);
  }

  push(screen, params) {
    const { push } = this.props.navigation;
    push(screen, params);
  }

  goBack(params) {
    const { goBack } = this.props.goBack;
    goBack(params);
  }

  replace(screen, params) {
    // const { dispatch } = this.props.navigation;
    // dispatch(NavigationActions.reset({
    //   index: 0,
    //   actions: [
    //     NavigationActions.navigate({ routeName: screen, params })
    //   ]
    // }))

    const { replace } = this.props.navigation;
    replace(screen, params);
  }
}
