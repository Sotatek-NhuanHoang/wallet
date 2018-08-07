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

    pasteQrContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Sizes.v3,
    },

    pasteButton: {
        width: '120@s',
        marginBottom: 0,
    },

    qrCodeButton: {
        width: '35@s',
        height: '35@s',
    },

    inputContainer: {
        marginBottom: '30@vs',
    },

    nextButton: {
        marginTop: '40@vs',
    }
});