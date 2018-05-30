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
const LogoIcon = require('../../../assets/common/ic_logo.png');

class Header extends Component {
  render() {
    return (
      <View style = { styles.outerContainer } >
        <StatusBar barStyle = 'light-content'/>
        <View style = { styles.innerContainer }>
          <Image
            style = { styles.leftImage }
            source = { LogoIcon }/>
          <View style = { styles.titleContainer }>
            <Text
              style = { styles.title }>
              { this.props.title }
            </Text>
          </View>
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
    paddingTop: getStatusBarHeight()
  },

  outerContainer: {
    backgroundColor: 'black',
    height: 44 + getStatusBarHeight()
  },

  title: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'center'
  },

  titleContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getStatusBarHeight()
  },

  leftImage: {
    resizeMode: 'contain',
    marginLeft: 8,
    height: '100%'
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