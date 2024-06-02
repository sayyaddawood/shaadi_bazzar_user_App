import React, {memo} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import Fonts, {FontScale} from '../../theme/Fonts';
import {Colors} from '../../theme';

type TextView = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  numberOfLines?: number;
  onPress?: () => void;
  position?: 'center' | 'right' | 'left';
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8';
  [key: string]: any;
};

const TextView = ({
  children,
  color,
  type = 'h6',
  position = 'left',
  style,
  onPress,
  numberOfLines,
  ...props
}: TextView) => {
  const fontStyle = styles[type];
  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      onPress={onPress}
      style={[
        styles.text,
        fontStyle,
        {color: color ?? Colors.Black, textAlign: position ?? 'center'},
        style,
      ]}>
      {children}
    </Text>
  );
};

export default memo(TextView);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.Black,
    fontFamily: Fonts.regular,
  },
  h1: {
    fontSize: FontScale.large22,
    fontWeight: '500',
    color: Colors.Black,
    fontFamily: Fonts.regular,
  },
  h2: {
    fontSize: FontScale.large20,
    fontWeight: '500',
    color: Colors.Black,
    fontFamily: Fonts.regular,
  },
  h3: {
    fontSize: FontScale.extraLarge,
    fontWeight: '500',
    color: Colors.Black,
    fontFamily: Fonts.regular,
  },
  h4: {
    fontSize: FontScale.large,
    color: Colors.Black,
    fontFamily: Fonts.regular,
  },
  h5: {
    fontSize: FontScale.semiMedium,
    color: Colors.Black,
    fontFamily: Fonts.regular,
  },
  h6: {
    fontSize: FontScale.medium,
    color: Colors.Black,
    fontFamily: Fonts.regular,
  },
  h7: {
    fontSize: FontScale.small,
    color: Colors.Black,
    fontFamily: Fonts.regular,
  },
  h8: {
    fontSize: FontScale.mini,
    color: Colors.Black,
    fontFamily: Fonts.regular,
  },
});
