import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '@styles/variables';


export default ScaledSheet.create({
    passwordInput: {
        marginTop: '100@ms'
    },
    confirmInput: {
        marginTop: '50@ms'
    },
    notes: {
        marginTop: '60@ms',
        color: Colors.darkGray,
        fontSize: FontSizes.p
    },
    nextButton: {
        marginTop: '100@ms'
    }
});
