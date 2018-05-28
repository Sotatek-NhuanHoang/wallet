import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import I18n from '../../res/i18n/i18n';
const MenuIcon = required('../../assets/common/ic_menu.png');

export default class Header extends Component {
  render() {
    return (
      <View
        style = { styles.container }>
        <Image
          style = { styles.image }
          source = { MenuIcon }/>
        <Text
          style = { styles.title }>
          { I18n.t('wallet').toUpperCase() }
        </Text>
        <TouchableOpacity
          style = { styles.leftButton }>
          <Image
            source = { MenuIcon }/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  image: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'contain',
    alighSelf: 'flex-start'
  },

  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17
  },

  leftButton: {
    flex:  1,
    alighSelf: 'flex-end'
  }
});