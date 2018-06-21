import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '@styles/variables';


export default ScaledSheet.create({
    coinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40@ms',
        marginBottom: '60@ms',
    },

    coinName: {
        fontSize: FontSizes.h2,
        color: Colors.darkGray,
        marginLeft: Sizes.s4,
    },

    walletInfo: {
        paddingLeft: Sizes.s10,
        paddingRight: Sizes.s10,
        marginBottom: Sizes.s5,
    },

    walletBalanceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: Sizes.s1,
    },

    walletBalance_Text: {
        fontSize: FontSizes.large,
        marginRight: Sizes.s2,
        color: Colors.black,
    },

    walletBalance_Coin: {
        fontSize: FontSizes.h5,
        bottom: '2@ms',
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
        marginBottom: Sizes.s1,
    },

    walletChange: {
        textAlign: 'right',
        fontSize: FontSizes.p,
        color: Colors.green,
        fontWeight: 'bold',
    },

    actionContainer: {
        paddingLeft: Sizes.s10,
        paddingRight: Sizes.s10,
    },

    marginBottom: {
        marginBottom: Sizes.s9,
    },
});
