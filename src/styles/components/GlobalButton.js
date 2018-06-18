import { ScaledSheet, moderateScale } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '@styles/variables';


export default ScaledSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.mainBlue,
        height: moderateScale(38),
        borderRadius: Sizes.s1,
    },
    container__basic: {
        backgroundColor: Colors.darkGray,
    },

    buttonText: {
        color: Colors.white,
        fontSize: FontSizes.p,
    },
    buttonText__basic: {
        color: Colors.white,
    },
});
