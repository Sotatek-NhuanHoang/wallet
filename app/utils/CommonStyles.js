import {
  PixelRatio,
  StyleSheet
} from 'react-native';

class CommonColors {
  static screenBgColor = 'darkgray';
  static bgLoginColor = '#43d8e0';
  static bgSignUpColor = '#42f459';
  static bgAlertColor = '#262523';
};

class CommonSize {
  static contentPadding = PixelRatio.getPixelSizeForLayoutSize(10);
  static contentPadding15px = PixelRatio.getPixelSizeForLayoutSize(15);
};

const CommonStyles = {
  screen: {
    flex: 1,
    backgroundColor: CommonColors.screenBgColor,
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