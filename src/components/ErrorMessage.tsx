import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import {Colors} from '../theme';
import {TextView} from './core';

type ErrorMessageType = {
  errorMessage?: string;
  errorTextStyle?: StyleProp<TextStyle>;
};

const ErrorMessage = ({errorMessage, errorTextStyle}: ErrorMessageType) => {
  return (
    <TextView
      type="h7"
      position="right"
      style={[styles.errorText, errorTextStyle]}>
      {errorMessage ? errorMessage : ''}
    </TextView>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  errorText: {color: Colors.Blue, marginTop: -7, marginRight: 35 },
});
