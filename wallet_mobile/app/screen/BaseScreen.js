import React from 'react';
import { View } from "react-native";

export default class BaseScreen extends React.Component {
  static navigationOptions = {
    headerLeft: (<View />)
  };

  navigate(screen, params) {
    const { navigate } = this.props.navigation;
    navigate(screen, params)
  }
}
