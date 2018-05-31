import { Animated, Easing } from 'react-native';

export default {
  opacityTransition() {
    return {
      transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: sceneProps => {      
        const { layout, position, scene } = sceneProps
    
        const thisSceneIndex = scene.index
        
        const opacity = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [0, 1],
        })
        
        return { opacity };
      }
    }
  } 
}