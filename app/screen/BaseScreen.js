import React from 'react';
import { View } from "react-native";

export default class BaseScreen extends React.Component {

  navigate(screen, params) {
    if (this.props.navigation) {
      const { navigate } = this.props.navigation;
      navigate(screen, params);
    }
  }

  push(screen, params) {
    if (this.props.navigation) {
      const { push } = this.props.navigation;
      push(screen, params);
    }
  }

  goBack(params) {
    if (this.props.navigation) {
      const { goBack } = this.props.navigation;
      goBack(params);
    }
  }

  replace(screen, params) {
    // const { dispatch } = this.props.navigation;
    // dispatch(NavigationActions.reset({
    //   index: 0,
    //   actions: [
    //     NavigationActions.navigate({ routeName: screen, params })
    //   ]
    // }))
    if (this.props.navigation) {
      const { replace } = this.props.navigation;
      replace(screen, params);
    }
  }

}
