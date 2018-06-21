import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '@styles/variables';


export default ScaledSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: Sizes.s3,
    },

    buttonText: {
        color: Colors.white,
        fontSize: FontSizes.p,
    },

    buttonIcon: {
        marginRight: Sizes.s2,
        color: Colors.white,
        fontSize: FontSizes.small,
        top: '1@ms',
        position: 'relative',
    },
});
