import { AsyncStorage } from 'react-native'
import * as Keychain from 'react-native-keychain';
import AppConfig from './AppConfig';

export default class AppPreferences {
  static saveAccessToken(token) {
    AppConfig.ACCESS_TOKEN = token;
    Keychain.setGenericPassword('access_token', token, {accessible: Keychain.ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY});
    AsyncStorage.setItem('token_saved', 'true');
  }

  static async getAccessToken() {
    const tokenSaved = await AsyncStorage.getItem('token_saved');
    if (tokenSaved) {
      return await Keychain.getGenericPassword();
    } else {
      return Promise.resolve({});
    }
  }

  static removeAccessToken() {
    AppConfig.ACCESS_TOKEN = '';
    Keychain.resetGenericPassword();
    AsyncStorage.setItem('token_saved', 'false');
  }

  static saveLocale(locale) {
    AsyncStorage.setItem('user_locale', locale);
  }

  static async getLocale() {
    return await AsyncStorage.getItem('user_locale');
  }

  static async isHideSmallBalance() {
    return await AsyncStorage.getItem('isHideSmallBalance');
  }

  static setHideSmallBalance(isHideSmallBalance) {
    AsyncStorage.setItem('isHideSmallBalance', isHideSmallBalance);
  }
}