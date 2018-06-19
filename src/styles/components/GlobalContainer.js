import { ScaledSheet } from '@react-native-size-matters';
import { Colors, Sizes } from '../variables';


export default ScaledSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: Colors.white,
        padding: Sizes.s5,
    },
});
