import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ImageView, TextView} from '../core';
import {categoriesData} from '../../data';
import {Colors} from '../../theme';

const Categories = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={[...categoriesData, {flag: true}]}
        renderItem={({item, index}) => {
          return <CategoryItem {...{item, index}} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
      />
    </View>
  );
};

export default Categories;

const CategoryItem = ({item, index}) => {
  if (item?.flag) {
    return (
      <View style={styles.itemContainer}>
        <View style={[styles.image, styles.viewAllContainer]}>
          <TextView type="h5" style={[styles.text, styles.viewAllText]}>
            +19
          </TextView>
        </View>
        <TextView
          type="h8"
          numberOfLines={2}
          style={[styles.text, styles.txtAllCategory]}>
          All Categories
        </TextView>
      </View>
    );
  }

  return (
    <View style={styles.itemContainer}>
      <ImageView uri={item?.image} style={styles.image} resizeMode="cover" />
      <TextView type="h8" numberOfLines={2} style={styles.text}>
        {item?.title}
      </TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  txtAllCategory: {color: Colors.PrimaryColor},
  viewAllText: {marginTop: 0, color: Colors.White},
  viewAllContainer: {
    backgroundColor: Colors.PrimaryColor,
    justifyContent: 'center',
  },
  mainContainer: {
    marginTop: 5,
    marginLeft: 15,
  },
  image: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
    borderRadius: 65 / 2,
  },
  itemContainer: {
    alignItems: 'center',
    paddingEnd: 15,
  },
  text: {
    marginTop: 5,
    maxWidth: 85,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
