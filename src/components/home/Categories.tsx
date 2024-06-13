import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ImageView, TextView} from '../core';
import {AssetsIcons, Colors} from '../../theme';
import useVendor from '../../hooks/useVendor';

const Categories = () => {
  const {categories} = useVendor({fetchCategory: true});
  const trimCategories = categories?.filter((_, index) => index < 5);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={
          categories?.length > 5
            ? [...trimCategories, {flag: true}]
            : trimCategories
        }
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

type CategoryItemType = {
  item: VendorCategory;
  index: number;
};

const CategoryItem = ({item, index}: CategoryItemType) => {
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
      <ImageView
        uri={item?.icon || AssetsIcons.placeholder}
        style={styles.image}
        resizeMode="cover"
      />
      <TextView type="h8" numberOfLines={2} style={styles.text}>
        {item?.name}
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
    borderWidth: 0.1,
    borderColor: Colors.LightestGray,
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
