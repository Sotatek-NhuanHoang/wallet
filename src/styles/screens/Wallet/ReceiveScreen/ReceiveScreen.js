import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '@styles/variables';

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
    paddingTop: Sizes.s3, 
    alignItems: 'center'
  },
  address: {
    paddingTop: Sizes.s8,
    color: Colors.darkGray,
    fontSize: FontSizes.p 
  },
  copyButton: {
    paddingTop: '50@ms',
    paddingStart: Sizes.s10, 
    paddingEnd: Sizes.s10,
    
  }


});