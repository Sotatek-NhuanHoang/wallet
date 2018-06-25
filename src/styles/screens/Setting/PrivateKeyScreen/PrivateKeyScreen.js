import { ScaledSheet, moderateScale } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '@styles/variables';


export default ScaledSheet.create({
    container: {
        paddingLeft: Sizes.s10,
        paddingRight: Sizes.s10,
        marginTop: '80@vs',
    },

    label: {
        fontSize: FontSizes.p,
        color: Colors.black,
        marginBottom: Sizes.v5,
    },

    textInput: {
        marginBottom: '40@vs',
    },

    coinItemContainer: {
        marginBottom: Sizes.v5,
    },

    coinName: {
        fontSize: FontSizes.p,
        color: Colors.black,
    },

    privateKeyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    privateKey: {
        fontSize: FontSizes.p,
        color: Colors.darkGray,
        marginRight: Sizes.s2,
    },

    copyButton: {
        paddingLeft: Sizes.s3,
        paddingRight: Sizes.s3,
        height: moderateScale(35),
    },
});
