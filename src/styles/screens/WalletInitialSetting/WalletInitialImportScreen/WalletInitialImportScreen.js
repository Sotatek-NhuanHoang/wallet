import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    coinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '70@vs',
        marginBottom: '70@vs',
    },

    coinName: {
        fontSize: FontSizes.h2,
        color: Colors.darkGray,
        marginLeft: Sizes.s4,
    },

    textInput: {
        textAlignVertical: 'center',
    },

    actionContainer: {
        paddingLeft: Sizes.s10,
        paddingRight: Sizes.s10,
    },

    marginBottom: {
        marginBottom: '80@vs',
    },
});
