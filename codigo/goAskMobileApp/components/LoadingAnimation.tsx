import React, {useEffect, useRef} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle, Animated} from 'react-native';
import {CONTAINER_STYLE_COLORS} from '../utils/colors';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const LoadingAnimation: React.FC<Props> = (props) => {
  const {style} = props;
  const animationBlueHeight = useRef(new Animated.Value(50)).current;
  const animationGreenHeight = useRef(new Animated.Value(50)).current;
  const animationOrangeHeight = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(animationBlueHeight, {
            toValue: 90,
            duration: 50,
            delay: 500,
            useNativeDriver: false,
          }),
          Animated.timing(animationBlueHeight, {
            toValue: 60,
            duration: 80,
            useNativeDriver: false,
          }),
        ]),
        Animated.sequence([
          Animated.timing(animationGreenHeight, {
            toValue: 90,
            duration: 50,
            delay: 550,
            useNativeDriver: false,
          }),
          Animated.timing(animationGreenHeight, {
            toValue: 60,
            duration: 80,
            useNativeDriver: false,
          }),
        ]),
        Animated.sequence([
          Animated.timing(animationOrangeHeight, {
            toValue: 90,
            duration: 50,
            delay: 650,
            useNativeDriver: false,
          }),
          Animated.timing(animationOrangeHeight, {
            toValue: 60,
            duration: 80,
            useNativeDriver: false,
          }),
        ]),
      ]),
    ).start();
  });
  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          styles.animated,
          styles.animatedBlue,
          {height: animationBlueHeight},
        ]}
      />
      <Animated.View
        style={[
          styles.animated,
          styles.animatedGreen,
          {height: animationGreenHeight},
        ]}
      />
      <Animated.View
        style={[
          styles.animated,
          styles.animatedOrange,
          {height: animationOrangeHeight},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 200,
  },
  animated: {
    width: 22,
    height: 50,
    marginHorizontal: 5,
  },
  animatedBlue: {
    backgroundColor: CONTAINER_STYLE_COLORS.DARK_BLUE,
  },
  animatedGreen: {
    backgroundColor: CONTAINER_STYLE_COLORS.DARK_GREEN,
  },
  animatedOrange: {
    backgroundColor: CONTAINER_STYLE_COLORS.ORANGE,
  },
});

export default LoadingAnimation;
