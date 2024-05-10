import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Colors, Dimen} from '../theme';

type LineType = {
  style?: StyleProp<ViewStyle>;
};

const Line = ({style}: LineType) => {
  return <View style={[styles.line, style]} />;
};

export default Line;

const styles = StyleSheet.create({
  line: {
    width: Dimen.width,
    backgroundColor: Colors.Gray,
    height: 0.2,
  },
});
