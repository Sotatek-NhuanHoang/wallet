import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    coinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '90@ms',
        marginBottom: '70@ms',
    },

    coinName: {
        fontSize: FontSizes.h2,
        color: Colors.darkGray,
        marginLeft: Sizes.s4,
    },

    actionContainer: {
        paddingLeft: Sizes.s10,
        paddingRight: Sizes.s10,
    },

    marginBottom: {
        marginBottom: '20@ms',
    },
});
