import React from 'react';
import {Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../theme';
import TextView from './TextView';

type Button = {
  style?: StyleProp<ViewStyle>;
  text: string;
  onPress: () => void;
};

const Button = ({text, style, onPress}: Button) => {
  return (
    <Pressable
      style={({pressed}) => [{opacity: pressed ? 0.9 : 1}, styles.btn, style]}
      onPress={onPress}>
      <TextView type='h6' color={Colors.White} style={styles.text}>{text}</TextView>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.PrimaryColor,
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4,
  },
  text: {
    textTransform: 'uppercase'
  }
});
