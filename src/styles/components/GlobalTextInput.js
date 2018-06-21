import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '@styles/variables';


export default ScaledSheet.create({
    textInput: {
        width: '100%',
        height: '40@ms',
        paddingLeft: Sizes.s3,
        paddingRight: Sizes.s3,
        fontSize: FontSizes.p,
        color: Colors.black,
        borderBottomWidth: 2,
        borderBottomColor: Colors.mainBlue,
    },

    textInput__basic: {
        borderWidth: 1,
        borderColor: Colors.gray,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        borderRadius: Sizes.s1,
    },

    textInput__multiline: {
        height: '150@ms',
        textAlignVertical: 'top',
    },
});
