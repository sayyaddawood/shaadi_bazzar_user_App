import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {ImageView, TextView} from '../core';
import {Colors} from '../../theme';
import {useHelper, useNavigationHook} from '../../hooks';
import {Vendor} from '../../models/RequestTypes';
import RatingView from './RatingView';

type VenueDashboardItemProps = {
  item: Vendor;
};

const VenueDashboardItem = ({item}: VenueDashboardItemProps) => {
  const {navigation} = useNavigationHook();
  const {formatCurrency} = useHelper();

  const onPress = () =>
    navigation.navigate('VenueDetail', {
      id: item?.id,
    });

  return (
    <Pressable
      style={({pressed}) => [
        {opacity: pressed ? 0.9 : 1},
        styles.itemContainer,
        {flex: 1},
      ]}
      onPress={onPress}>
      <ImageView
        uri={item?.vendorMedia[0].path}
        type="ONLINE"
        style={styles.image}
        resizeMode="cover"
      />
      <TextView type="h6" numberOfLines={1} style={styles.text}>
        {item.business_name}
      </TextView>
      <TextView type="h7" numberOfLines={1} style={styles.txtLocation}>
        {item?.address?.full_address}
      </TextView>
      <TextView type="h6" numberOfLines={1} style={styles.txtPrice}>
        Rs: {formatCurrency(Number(item?.f_price)) ?? 0}
      </TextView>

      <RatingView avgRating={item?.avgRating} style={styles.rating} />
    </Pressable>
  );
};

export default VenueDashboardItem;

const styles = StyleSheet.create({
  txtPrice: {marginTop: 5, color: Colors.PrimaryColor},
  txtLocation: {marginTop: 5, color: Colors.LightestGray, maxWidth: 180},
  rating: {
    position: 'absolute',
    right: 20,
    top: 5,
  },
  txtRating: {
    color: Colors.White,
  },
  mainContainer: {
    marginTop: 5,
    marginLeft: 10,
  },
  image: {
    width: 180,
    height: 125,
    marginRight: 15,
    resizeMode: 'contain',
    borderRadius: 7,
  },
  itemContainer: {},
  text: {
    marginTop: 8,
    letterSpacing: 0.8,
    maxWidth: 180,
  },
});
