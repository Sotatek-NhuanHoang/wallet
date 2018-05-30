import {
  API_SERVER as DEV_API_SERVER,
  SOCKET_SERVER as DEV_SOCKET_SERVER,
  CLIENT_SECRET as DEV_CLIENT_SECRET,
  ASSET_SERVER as DEV_ASSET_SERVER
} from 'react-native-dotenv'

export default class AppConfig {
  static API_SERVER = '';
  static API_VERSION = 'v1';
  static SOCKET_SERVER = '';
  static CLIENT_SECRET = ''; 
  static ACCESS_TOKEN = '';

  static getApiServer() {
    return __DEV__ ? DEV_API_SERVER : AppConfig.API_SERVER;
  }

  static getApiVersion() {
    return AppConfig.API_VERSION;
  }

  static getSocketServer() {
    return __DEV__ ? DEV_SOCKET_SERVER : AppConfig.SOCKET_SERVER;
  }

  static getClientSecret() {
    return __DEV__ ? DEV_CLIENT_SECRET : AppConfig.CLIENT_SECRET;
  }

  static getAssetServer() {
    return __DEV__ ? DEV_ASSET_SERVER : AppConfig.ASSET_SERVER;
  }
}
