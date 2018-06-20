import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '../../../variables';

export default ScaledSheet.create({
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '70@ms',
  },
  coinName: {
    fontSize: FontSizes.h2,
    color: Colors.darkGray,
    marginLeft: Sizes.s4,
  },
});