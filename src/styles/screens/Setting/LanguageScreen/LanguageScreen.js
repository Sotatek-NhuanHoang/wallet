import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '../../../variables';


export default ScaledSheet.create({
    container: {
        padding: 0,
    },

    languageContainer: {
        flexDirection: 'row',
        height: '50@ms',
        alignItems: 'center',
        paddingRight: Sizes.s5,
        paddingLeft: Sizes.s5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
    },

    language_Text: {
        color: Colors.black,
        fontSize: FontSizes.p,
    },

    language_Icon: {
        color: Colors.secondaryBlue,
        fontSize: FontSizes.p,
    },
});
