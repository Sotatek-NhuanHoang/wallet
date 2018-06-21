import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes } from '@styles/variables';


export default ScaledSheet.create({
    container: {
        flex: 1,
    },

    titleText: {
        textAlign: 'center',
        fontSize: FontSizes.h5,
        color: Colors.white,
    },
});
