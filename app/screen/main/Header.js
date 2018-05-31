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
import I18n from '../../res/i18n/i18n';
const MenuIcon = require('../../../assets/common/ic_menu.png');
const LogoIcon = require('../../../assets/common/ic_logo.png');

class Header extends Component {
  render() {
    return (
      <View style = { styles.outerContainer } >
        <StatusBar barStyle = 'light-content'/>
        <View style = { styles.innerContainer }>
          <View style = { styles.logoContainer }>
            <Image
              style = { styles.leftImage }
              source = { LogoIcon }/>
            <Text
              style = { styles.logoTitle }>
              { I18n.t('welcome.brand') }
            </Text>
          </View>
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

  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },

  logoTitle: {
    marginLeft: 5,
    color: 'white',
    fontSize: 14
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