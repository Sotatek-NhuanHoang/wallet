import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '@styles/variables';


export default ScaledSheet.create({
    coinContainer: {
        flexDirection: 'row',
        height: '60@ms',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingLeft: Sizes.s3,
        paddingRight: Sizes.s3,
    },
    coinContainer__gray: {
        backgroundColor: Colors.lightGray,
    },

    coinInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    coinInfo_CoinName: {
        marginLeft: Sizes.s4,
        fontSize: FontSizes.h4,
        color: Colors.darkGray,
    },

    coinBalanceText: {
        fontSize: FontSizes.h5,
        color: Colors.darkGray,
        textAlign: 'right',
    },

    coinChangeText: {
        fontSize: FontSizes.p,
        color: Colors.gray,
        textAlign: 'right',
    },
    coinChangeText__green: {
        color: Colors.green,
    },
    coinChangeText__red: {
        color: Colors.red,
    },

    unregistedText: {
        fontSize: FontSizes.h5,
        color: Colors.secondaryBlue,
    },
});
