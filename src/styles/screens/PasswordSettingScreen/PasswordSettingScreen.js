import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    container: {
        paddingLeft: Sizes.s10,
        paddingRight: Sizes.s10,
    },

    passwordInput: {
        marginTop: '100@vs'
    },

    confirmInput: {
        marginTop: '35@vs'
    },

    notes: {
        marginTop: '60@vs',
        color: Colors.darkGray,
        fontSize: FontSizes.small,
        lineHeight: FontSizes.h3,
    },

    nextButton: {
        marginTop: '100@vs'
    },
});
