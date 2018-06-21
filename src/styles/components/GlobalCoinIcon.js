import { ScaledSheet, moderateScale } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '@styles/variables';


const IconSizes = {
    default: moderateScale(40),
    small:  moderateScale(30),
    extraSmall: moderateScale(20),
    large: moderateScale(50),
};

export default ScaledSheet.create({
    iconStyle: {
        width: IconSizes.default,
        height: IconSizes.default,
    },

    iconStyle__extraSmall: {
        width: IconSizes.extraSmall,
        height: IconSizes.extraSmall,
    },

    iconStyle__small: {
        width: IconSizes.small,
        height: IconSizes.small,
    },

    iconStyle__large: {
        width: IconSizes.large,
        height: IconSizes.large,
    },
});
