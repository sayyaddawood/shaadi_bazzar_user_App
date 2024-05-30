import React from 'react';
import {Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../theme';
import TextView from './TextView';

type Button = {
  style?: StyleProp<ViewStyle>;
  text: string;
  onPress: () => void;
  type?: string;
  disabled?: boolean;
  textColor?: string;
  rightIcon?: () => React.ReactNode;
  leftIcon?: () => React.ReactNode;
};

const Button = ({
  rightIcon,
  leftIcon,
  type = 'fill',
  textColor,
  text,
  style,
  onPress,
  disabled = false,
}: Button) => {
  return (
    <Pressable
      disabled={disabled}
      style={({pressed}) => [
        {opacity: pressed ? 0.9 : 1},
        styles.btn,
        type == 'outline' && styles.outline,
        disabled && styles.disabledBtn,
        style,
      ]}
      onPress={onPress}>
      {leftIcon && leftIcon()}
      <TextView type="h6" color={textColor ?? Colors.White} style={styles.text}>
        {text}
      </TextView>
      {rightIcon && rightIcon()}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  disabledBtn: {
    backgroundColor: Colors.DarkGray,
  },
  btn: {
    backgroundColor: Colors.PrimaryColor,
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 4,
  },
  text: {
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  outline: {
    borderWidth: 1,
    backgroundColor: Colors.White,
    borderColor: Colors.PrimaryColor,
  },
});
