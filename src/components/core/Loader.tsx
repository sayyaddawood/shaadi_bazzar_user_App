import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {Colors} from '../../theme';

type LoaderTypes = {
  loaderSize?: number;
  area?: number;
  color?: string
};

const Loader = ({loaderSize, area, color = Colors.PrimaryColor}: LoaderTypes) => {
  const size = loaderSize ? loaderSize : 7;
  const dim = area ? area : 20;
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const inputRange = [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1];
  const left1 = animation.interpolate({
    inputRange,
    outputRange: [
      0,
      dim - size,
      dim - size,
      0,
      0,
      0,
      dim - size,
      dim - size,
      0,
    ],
  });
  const top1 = animation.interpolate({
    inputRange,
    outputRange: [
      0,
      0,
      dim - size,
      dim - size,
      0,
      dim - size,
      dim - size,
      0,
      0,
    ],
  });
  const left2 = animation.interpolate({
    inputRange,
    outputRange: [
      dim - size,
      0,
      0,
      dim - size,
      dim - size,
      dim - size,
      0,
      0,
      dim - size,
    ],
  });
  const top2 = animation.interpolate({
    inputRange,
    outputRange: [
      dim - size,
      dim - size,
      0,
      0,
      dim - size,
      0,
      0,
      dim - size,
      dim - size,
    ],
  });
  const left3 = animation.interpolate({
    inputRange,
    outputRange: [
      0,
      0,
      dim - size,
      dim - size,
      0,
      dim - size,
      dim - size,
      0,
      0,
    ],
  });
  const top3 = animation.interpolate({
    inputRange,
    outputRange: [
      dim - size,
      0,
      0,
      dim - size,
      dim - size,
      dim - size,
      0,
      0,
      dim - size,
    ],
  });
  const left4 = animation.interpolate({
    inputRange,
    outputRange: [
      dim - size,
      dim - size,
      0,
      0,
      dim - size,
      0,
      0,
      dim - size,
      dim - size,
    ],
  });
  const top4 = animation.interpolate({
    inputRange,
    outputRange: [
      0,
      dim - size,
      dim - size,
      0,
      0,
      0,
      dim - size,
      dim - size,
      0,
    ],
  });
  const angleValue = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });
  const backgroundColor = color;

  return (
    <View style={styles.container}>
      <View style={{width: dim, height: dim}}>
        <Animated.View
          style={{
            width: size,
            height: size,
            position: 'absolute',
            backgroundColor,
            transform: [
              {translateX: left1},
              {translateY: top1},
              {rotate: angleValue},
            ],
          }}
        />
        <Animated.View
          style={{
            width: size,
            height: size,
            position: 'absolute',
            backgroundColor,
            transform: [
              {translateX: left2},
              {translateY: top2},
              {rotate: angleValue},
            ],
          }}
        />
        <Animated.View
          style={{
            width: size,
            height: size,
            position: 'absolute',
            backgroundColor,
            transform: [
              {translateX: left3},
              {translateY: top3},
              {rotate: angleValue},
            ],
          }}
        />
        <Animated.View
          style={{
            width: size,
            height: size,
            position: 'absolute',
            backgroundColor,
            transform: [
              {translateX: left4},
              {translateY: top4},
              {rotate: angleValue},
            ],
          }}
        />
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
