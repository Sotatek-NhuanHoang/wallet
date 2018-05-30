import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native'
const MenuIcon = require('../../../assets/common/ic_menu.png');

export default class Header extends Component {
  render() {
    return (
      <View style = { styles.container } >
        <StatusBar barStyle = 'light-content'/>
        <View>
          <Text
            style = { styles.title }>
            { this.props.title }
          </Text>
          <View style = { styles.innerContainer }>
            <Image
              style = {{
                resizeMode: 'contain',
                marginleft: 8
              }}
              source = { MenuIcon }/>
            <TouchableOpacity
              style = { styles.rightButton }
              onPress = { this.props.onOpenMenu }>
              <Image
                style = {{
                  flex: 1,
                  resizeMode: 'contain'
                }}
                source = { MenuIcon }/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingTop: 20,
    width: '100%',
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  container: {
    flexDirection: 'column',
    height: 64,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    alignSelf: 'center'
  },

  rightButton: {
    height: '100%',
    marginEnd: 8,
    alignItems: 'center',
    aspectRatio: 1
  }
});