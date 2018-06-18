import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes } from '../variables';


export default ScaledSheet.create({
    container: {
        flex: 1,
    },

    titleText: {
        textAlign: 'center',
        fontSize: FontSizes.h4,
        color: Colors.white,
    },
});
