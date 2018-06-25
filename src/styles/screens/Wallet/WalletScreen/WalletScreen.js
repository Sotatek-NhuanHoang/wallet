import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '@styles/variables';


export default ScaledSheet.create({
    coinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50@vs',
        marginBottom: '60@vs',
    },

    coinName: {
        fontSize: FontSizes.h2,
        color: Colors.darkGray,
        marginLeft: Sizes.s4,
    },

    walletInfo: {
        paddingLeft: Sizes.s10,
        paddingRight: Sizes.s10,
        marginBottom: Sizes.v5,
    },

    walletBalanceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: Sizes.v1,
    },

    walletBalance_Text: {
        fontSize: FontSizes.h1,
        marginRight: Sizes.s2,
        color: Colors.black,
    },

    walletBalance_Coin: {
        fontSize: FontSizes.p,
        bottom: '2@vs',
        position: 'relative',
        color: Colors.black,
    },

    coinPrice: {
        textAlign: 'right',
        fontSize: FontSizes.h5,
        color: Colors.darkGray,
    },

    currency: {
        textAlign: 'right',
        fontSize: FontSizes.paddingLeft,
        color: Colors.darkGray,
        marginBottom: Sizes.v1,
    },

    walletChange: {
        textAlign: 'right',
        fontSize: FontSizes.p,
        color: Colors.darkGray,
        fontWeight: 'bold',
    },

    actionContainer: {
        paddingLeft: Sizes.s10,
        paddingRight: Sizes.s10,
    },

    marginBottom: {
        marginBottom: '25@vs',
    },

    textRed: {
        color: Colors.red,
    },

    textGreen: {
        color: Colors.green,
    },
});
