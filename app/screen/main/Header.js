import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform
} from 'react-native'
import { getStatusBarHeight } from '../../utils/StatusBarUtils';
const MenuIcon = require('../../../assets/common/ic_menu.png');

class Header extends Component {
  render() {
    return (
      <View style = { styles.outerContainer } >
        <StatusBar barStyle = 'light-content'/>
        <View style = { styles.innerContainer }>
          <Image
            style = { styles.leftImage }
            source = { MenuIcon }/>
          <Text
            style = { styles.title }>
            { this.props.title }
          </Text>
          <TouchableOpacity
            style = { styles.rightButton }
            onPress = { this.props.onOpenMenu }>
            <Image
              style = { styles.rightButtonImage }
              source = { MenuIcon }/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
    ...Platform.select({
      ios: {
        paddingTop: getStatusBarHeight(),
      },
    })
  },

  outerContainer: {
    backgroundColor: 'black',
    height: 44 + (Platform.OS === 'ios' ? getStatusBarHeight() : 0)
  },

  title: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'center'
  },

  leftImage: {
    resizeMode: 'contain',
    marginLeft: 8
  },

  rightButton: {
    height: '100%',
    alignItems: 'center',
    aspectRatio: 1,
  },

  rightButtonImage: {
    flex: 1,
    resizeMode: 'contain'
  }
});

export default Header;