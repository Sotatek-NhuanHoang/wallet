import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '../../variables';

export default ScaledSheet.create({
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Sizes.s8,
    marginBottom: '40@ms',
  },
  coinName: {
    fontSize: FontSizes.h2,
    color: Colors.darkGray,
    marginLeft: Sizes.s4,
  },
  qrContainer: {
    flex: 1, 
    paddingTop: Sizes.s3, 
    alignItems: 'center'
  },
  address: {
    paddingTop: '30@ms',
    color: Colors.darkGray 
  },
  copyButton: {
    flex: 1,
    paddingStart: Sizes.s8, 
    paddingEnd: Sizes.s8,
    alignItems: 'center',
    justifyContent:'center', 
  }


});