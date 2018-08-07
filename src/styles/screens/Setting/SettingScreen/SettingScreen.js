import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    container: {
        padding: 0,
    },

    settingContainer: {
        flexDirection: 'row',
        height: '50@ms',
        alignItems: 'center',
        paddingRight: Sizes.s5,
        paddingLeft: Sizes.s5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
    },

    setting_Text: {
        color: Colors.black,
        fontSize: FontSizes.p,
    },

    setting_Icon: {
        color: Colors.black,
        fontSize: FontSizes.h2,
    },
});
