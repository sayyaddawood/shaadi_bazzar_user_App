import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {EditText, Icons} from '../core';
import {Colors} from '../../theme';
import {IconsType} from '../core/Icons';

type SearchItem = {
  editable?: boolean;
  onPress?: () => void;

  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
};

const SearchItem = ({
  editable = true,
  onPress,
  search,
  setSearch,
}: SearchItem) => {
  return (
    <EditText
      onChangeText={txt => setSearch && setSearch(txt)}
      placeholder="Search..."
      style={styles.con}
      value={search}
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
