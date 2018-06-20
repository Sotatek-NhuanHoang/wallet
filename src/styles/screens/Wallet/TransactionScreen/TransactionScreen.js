import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from '../../../variables';

export default ScaledSheet.create({
  contain:{
    flex:1
  },
  itemContain:{
    flex:1, 
    paddingTop:'10@ms', 
    paddingBottom:'10@ms'
  },
  itemHeader:{
    flex: 1, 
    flexDirection: 'row' ,
    alignItems:'center',
  },
  itemStatus:{
    flex: 1, 
    textAlign: 'left',
    fontSize: FontSizes.p,
  },
  itemMount:{
    flex: 1, 
    textAlign: 'right',
    fontSize: FontSizes.p
  },
  itemAddress:{
    fontSize: FontSizes.p,
  },
  seperator:{
     flex: 1, 
     height: 1, 
     backgroundColor: Colors.black,
     alignItems:'center',
  },
  dateTrans:{
    flex: 1, 
    flexWrap: 'wrap',
    fontSize: FontSizes.p,
    textAlign:'center',
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:  '10@ms',
    marginBottom:  '35@ms',
  },
  coinName: {
    fontSize: FontSizes.h2,
    color: Colors.darkGray,
    marginLeft: Sizes.s4,
  }
 
});