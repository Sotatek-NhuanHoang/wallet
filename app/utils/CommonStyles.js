import {
  PixelRatio,
  StyleSheet
} from 'react-native';

class CommonColors {
  static screenBgColor = 'darkgray';
  static bgLoginColor = '#43d8e0';
  static bgSignUpColor = '#42f459';
  static bgAlertColor = '#262523';
  static bgSendColor = '#FF3300'
};

class CommonSize {
  static contentPadding = 10;
  static contentPadding15px = 15;
};

const CommonStyles = {
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  background: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
};

export {
  CommonStyles,
  CommonColors,
  CommonSize
};