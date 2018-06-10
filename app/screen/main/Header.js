import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform
} from 'react-native';
import { getStatusBarHeight } from '../../utils/StatusBarUtils';
import I18n from '../../res/i18n/i18n';
const MenuIcon = require('../../../assets/common/ic_menu.png');
const LogoIcon = require('../../../assets/common/ic_logo.png');
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { exportPrivateKey, logOut } from '../../../redux/actions/Actions';
import RNRestart from 'react-native-restart';

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
          <Menu
            ref = { ref => this._menu = ref }
            button = { this._renderRightButton() }
            style = { styles.menu }>
            <MenuItem
              textStyle = { styles.menuItemText }>
              { this.props.userEmail }
            </MenuItem>
            <MenuItem
              textStyle = { styles.menuItemText }
              underlayColor = '#404040'
              onPress={ this._onExportPrivateKey.bind(this) }>
              { I18n.t('menu.export_private_key') }
            </MenuItem>
            <MenuItem
              textStyle = { styles.menuItemText }
              underlayColor = '#404040'
              onPress={ this._onLogout.bind(this) }>
              { I18n.t('menu.logout') }
            </MenuItem>
          </Menu>
        </View>
      </View>
    )
  }

  _renderRightButton() {
    return (
      <TouchableOpacity
        style = { styles.rightButton }
        onPress = { this._onOpenMenu.bind(this) }>
        <Image
          style = { styles.rightButtonImage }
          source = { MenuIcon }/>
      </TouchableOpacity>
    )
  }

  _onOpenMenu() {
    this._menu.show()
  }

  _onExportPrivateKey() {
    this.props.onExportPrivateKey();
    this._menu.hide();
  }

  _onLogout() {
    RNRestart.Restart();
  }
}

Header.defaultProps = {
  title: I18n.t('common.wallet').toUpperCase(),
  userEmail: 'bitkoex@bitkoex.com'
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
  },

  menu: {
    flex: 1,
    width: 200,
    backgroundColor: '#595959'
  },

  menuItemText: {
    color: 'white',
    fontSize: 14
  }
});

function mapStateToProps (state) {
  return {
    title: state.navigation.headerTitle,
    userEmail: state.global.userEmail
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onExportPrivateKey: () => dispatch(exportPrivateKey())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);