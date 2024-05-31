import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {EditText, Icons} from '../core';
import {Colors} from '../../theme';
import {IconsType} from '../core/Icons';

type SearchItem = {
  editable?: boolean;
  onPress?: () => void;
};

const SearchItem = ({editable = true, onPress}: SearchItem) => {
  return (
    <EditText
      onChangeText={() => {}}
      placeholder="Search..."
      style={styles.con}
      inputStyle={styles.inputStyle}
      input={styles.input}
      onPress={onPress}
      pointerEvent={editable ? undefined : 'none'}
      rightIcon={() => {
        return (
          <Icons
            type={IconsType.AntDesign}
            name="search1"
            size={18}
            color={Colors.Gray}
            style={styles.iconStyle}
          />
        );
      }}
    />
  );
};

export default memo(SearchItem);

const styles = StyleSheet.create({
  inputStyle: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: Colors.LightGray,
    borderColor: Colors.LightGray,
  },
  input: {marginLeft: 7},
  iconStyle: {marginLeft: 5},
  con: {marginHorizontal: 0},
});
