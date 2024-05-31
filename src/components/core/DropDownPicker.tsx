import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import ErrorMessage from '../ErrorMessage';

type DropDownPickerType = {
  style?: any;
  selectedValue?: string;
  onChangeValue: (value: string) => void;
  options?: any[]; // TODO remove any
  errorMessage?: string;
};

const DropDownPicker = ({
  style,
  selectedValue,
  onChangeValue,
  options,
  errorMessage,
}: DropDownPickerType) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (selectedValue) {
      setValue(selectedValue);
    }
  }, [options]);

  return (
    <>
      <Dropdown
        style={[styles.dropdown, style]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={options}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={value}
        itemTextStyle={{color: '#000'}}
        onChange={item => {
          // TODO: Change Any to type
          setValue(item.value);
          onChangeValue(item.value);
        }}
      />
      <ErrorMessage {...{errorMessage, errorTextStyle: {marginTop: 0}}} />
    </>
  );
};

export default DropDownPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    color: '#000',
  },
  dropdown: {
    marginHorizontal: 35,
    borderWidth: 1.2,
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 45,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#000',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#000',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000',
  },
});
