import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '../../../variables';

export default ScaledSheet.create({
  contain: {
    flex: 1
  },
  itemContain: {
    flex: 1, 
    paddingTop: Sizes.s3, 
    paddingBottom: Sizes.s3
  },
  itemHeader: {
    flex: 1, 
    flexDirection: 'row' ,
    alignItems: 'center',
  },
  itemStatus: {
    flex: 1, 
    textAlign: 'left',
    fontSize: FontSizes.p,
    color: Colors.darkGray
  },
  itemMount: {
    flex: 1, 
    textAlign: 'right',
    fontSize: FontSizes.p,
    color: Colors.darkGray
  },
  itemAddress: {
    fontSize: FontSizes.p,
    color: Colors.darkGray
  },
  seperator: {
     flex: 1, 
     height: 1, 
     backgroundColor: Colors.gray,
     alignItems: 'center',
  },
  dateTrans: {
    paddingLeft: Sizes.s5,
    paddingRight: Sizes.s5, 
    fontSize: FontSizes.p,
    textAlign: 'center',
    color: Colors.gray
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Sizes.s3,
    marginBottom:'35@ms',
  },
  coinName: {
    fontSize: FontSizes.h2,
    color: Colors.darkGray,
    marginLeft: Sizes.s4,
  }
 
});