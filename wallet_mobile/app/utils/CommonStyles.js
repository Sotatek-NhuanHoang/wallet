import { PixelRatio, StyleSheet } from 'react-native';

class CommonColors {
    static screenBgColor = 'darkgray';
    static bgColorLogin = '#43d8e0';
    static bgColorSignup = '#42f459';

};

class CommonSize {
    static contentPadding = PixelRatio.getPixelSizeForLayoutSize(10);
    static contentPadding15px = PixelRatio.getPixelSizeForLayoutSize(15);
};

const CommonStyles = {
    screen: {
        flex: 1,
        backgroundColor: CommonColors.screenBgColor,
    }
};

export { CommonStyles, CommonColors, CommonSize };