import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '@styles/variables';

export default ScaledSheet.create({
    container: {
        flex: 1,
        paddingStart: Sizes.s10, 
        paddingEnd: Sizes.s10 
    },
    coinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.s8,
        marginBottom: '40@vs',
    },
    coinName: {
        fontSize: FontSizes.h2,
        color: Colors.darkGray,
        marginLeft: Sizes.s4,
    },
    pasteQrContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Sizes.s8,
        marginBottom: '10@vs',
    },
    pasteButton: {
        width: '120@s', 
        marginBottom: 0,
    },
    qrCodeButton: {
        width: '45@s', 
        height: '45@s', 
    },
    inputContainer: {
        marginBottom: '40@vs',
    },
    nextButton: {
        marginTop: '20@vs',
    }
});