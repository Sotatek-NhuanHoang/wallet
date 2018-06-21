import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '@styles/variables';


export default ScaledSheet.create({
    container: {
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.mainBlue,
    },

    appNameText: {
        fontSize: FontSizes.h1,
        color: Colors.white,
    },
});
