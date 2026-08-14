import LottieView from 'lottie-react-native';
import React from 'react';
import {AssetAnimation} from '../theme';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {StyleProp} from 'react-native';
import {TextView} from './core';

type NoViewProps = {
  style?: StyleProp<ViewStyle>;
};

const NoView = ({style}: NoViewProps) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={AssetAnimation.noData}
        autoPlay={true}
        loop={true}
        style={[styles.con, style]}
      />
      <TextView position="center" type="h6" style={styles.txt}>
        Oops! Looks like there's nothing here.
      </TextView>
    </View>
  );
};

export default NoView;

const styles = StyleSheet.create({
  con: {height: 200, width: 200, alignSelf: 'center', marginTop: -50},
  txt: {marginTop: -20},
  container: {flex: 1, justifyContent: 'center'},
});
