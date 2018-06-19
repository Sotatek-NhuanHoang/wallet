import { ScaledSheet, moderateScale } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '../variables';


export default ScaledSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.mainBlue,
        height: moderateScale(40),
        borderRadius: Sizes.s1,
        marginBottom: Sizes.s2,
    },
    buttonText: {
        color: Colors.white,
        fontSize: FontSizes.small,
    },

    container__secondary: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: Colors.secondaryBlue,
    },
    buttonText__secondary: {
        color: Colors.secondaryBlue,
    },

    container__basic: {
        backgroundColor: Colors.gray,
    },
    buttonText__basic: {
        color: Colors.white,
    },
});
