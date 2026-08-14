import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Colors, Dimen} from '../../theme';
import {ImageView, TextView} from '../core';

const PlannerServiceItem = ({
  item,
  onPress,
  isCategorySelected,
  selectedCategoryIcon,
}) => {
  if (item.lastItem) {
    return (
      <View
        style={{
          width: Dimen.width / 3.5,
        }}
      />
    );
  }

  return (
    <Pressable
      style={[
        styles.itemContainer,
        {backgroundColor: `#${item?.color_code}`},
        isCategorySelected && {
          borderColor: Colors.PrimaryColor,
          borderWidth: 0.3,
        },
      ]}
      onPress={onPress}>
      <ImageView
        uri={item?.icon_2}
        type="ONLINE"
        resizeMode="contain"
        style={styles.searchItem}
      />
      <TextView
        numberOfLines={1}
        type="h8"
        style={styles.txt}
        position="center">
        {item.name}
      </TextView>

      {selectedCategoryIcon && 
      <TextView
        numberOfLines={1}
        type="h8"
        style={{
          position: 'absolute', right: 5, top: 5,
           fontSize: 7, color: Colors.PrimaryColor}}
        position="center">
        {selectedCategoryIcon}
      </TextView>}

      {/* {selectedCategoryIcon && (
        <ImageView
          uri={selectedCategoryIcon}
          type="OFFLINE"
          resizeMode="contain"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 30,
            height: 30,
          }}
        />
      )} */}
    </Pressable>
  );
};

export default PlannerServiceItem;

const styles = StyleSheet.create({
  searchItem: {
    width: 50,
    height: 40,
    borderRadius: 5,
    marginTop: 6
  },

  itemContainer: {
    width: Dimen.width / 3.5,
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: Colors.White,

    borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  txt: {marginTop: 10},
});
