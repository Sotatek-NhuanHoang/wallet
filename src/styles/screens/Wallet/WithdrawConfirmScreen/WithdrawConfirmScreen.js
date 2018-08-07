import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

export default ScaledSheet.create({
    container: {
        flex: 1,
        paddingLeft: Sizes.s10,
        paddingRight: Sizes.s10
    },

    coinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40@vs',
        marginBottom: '60@vs',
    },

    coinName: {
        fontSize: FontSizes.h2,
        color: Colors.darkGray,
        marginLeft: Sizes.s4,
    },

    transactionItemContainer: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.secondaryBlue,
        paddingBottom: Sizes.v1,
        marginBottom: '28@vs',
    },

    transactionItem_Label: {
        fontSize: FontSizes.p,
        color: Colors.black,
    },

    transactionItem_Value: {
        marginTop: Sizes.v3,
        fontSize: FontSizes.small,
        color: Colors.darkGray,
        textAlign: 'right',
    },

    sendCoinButton: {
        marginTop: '30@vs',
    },
});