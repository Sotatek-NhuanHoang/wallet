import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

export default ScaledSheet.create({
    coinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30@vs',
        marginBottom: '60@vs',
    },
    coinName: {
        fontSize: FontSizes.h2,
        color: Colors.darkGray,
        marginLeft: Sizes.s4,
    },
    qrContainer: {
        alignItems: 'center'
    },
    address: {
        paddingTop: Sizes.v10,
        color: Colors.darkGray,
        fontSize: FontSizes.p,
        paddingStart: Sizes.s10,
        paddingEnd: Sizes.s10,
    },
    copyButton: {
        paddingTop: '50@vs',
        paddingStart: Sizes.s10,
        paddingEnd: Sizes.s10,
    },
});
