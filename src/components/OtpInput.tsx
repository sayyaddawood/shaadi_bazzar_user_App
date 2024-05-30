import React from 'react';
import {StyleSheet, Platform, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {TextView} from './core';
import {Colors} from '../theme';
import Fonts from '../theme/Fonts';

const CELL_COUNT = 4;

type OTPInputType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const OTPInput = ({value, setValue}: OTPInputType) => {
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({
          android: 'sms-otp',
          default: 'one-time-code',
        })}
        renderCell={({index, symbol, isFocused}) => (
          <TextView
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </TextView>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  codeFieldRoot: {marginTop: 0},
  cell: {
    width: 50,
    height: 45,
    borderRadius: 3,
    lineHeight: 50,
    fontSize: 24,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: Fonts.bold,
    fontWeight: 'bold',
    borderWidth: 1,
    marginHorizontal: 5,
    backgroundColor: 'white',
    paddingHorizontal: 0,
    borderColor: Colors.LightestGray,
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default OTPInput;
