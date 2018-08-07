import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    container: {
        paddingRight: Sizes.s3,
    },

    buttonIcon: {
        color: Colors.white,
        fontSize: FontSizes.h2,
    },
});
