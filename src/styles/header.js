import { Colors, FontSizes } from './variables';
import { moderateScale } from '@react-native-size-matters';

export default {
    headerStyle: {
        backgroundColor: Colors.mainBlue,
        height: moderateScale(50),
    },

    headerTintColor: Colors.white,

    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        fontSize: FontSizes.h4,
    },
};
