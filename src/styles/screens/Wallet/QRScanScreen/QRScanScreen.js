import { ScaledSheet } from '@react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';
import { Dimensions } from 'react-native';

import Header from 'styles/header'

const { width, height } = Dimensions.get('window');

export default ScaledSheet.create({
   container:{ 
       position: 'relative',
   },
   camera:{ 
       height: height - Header.headerStyle.height, 
       width: width,
   },
   scanContainer:{
       height: height - Header.headerStyle.height, 
       width: width, 
       flexDirection: 'column', 
       position: 'absolute', 
       top: 0, 
       backgroundColor: 'rgba(0,0,0,0)'
    },
    blurContent:{ 
        backgroundColor: 'rgba(0,0,0, 0.4)', 
        flex: 1
    },
    scanContent:{ 
        flexDirection: 'row', 
    },
    squareContent:{
        height: 200, 
        width: 200, 
        position: 'relative' 
    }

});
