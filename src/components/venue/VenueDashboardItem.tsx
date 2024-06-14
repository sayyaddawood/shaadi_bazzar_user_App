import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Icons, ImageView, TextView} from '../core';
import {Colors} from '../../theme';
import {IconsType} from '../core/Icons';
import {useNavigationHook} from '../../hooks';
import {Vendor} from '../../models/RequestTypes';

type VenueDashboardItemProps = {
  item: Vendor;
};

const VenueDashboardItem = ({item}: VenueDashboardItemProps) => {
  const {navigation} = useNavigationHook();

  const onPress = () =>
    navigation.navigate('VenueDetail', {
      id: item?.id,
    });

  return (
    <Pressable
      style={({pressed}) => [
        {opacity: pressed ? 0.9 : 1},
        styles.itemContainer,
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
        {item?.f_price}
      </TextView>

      <View style={styles.rating}>
        <Icons
          type={IconsType.Entypo}
          name={'star'}
          size={12}
          style={{marginRight: 2}}
          color={Colors.White}
        />
        <TextView type="h7" style={styles.txtRating}>
          {parseFloat(item.avgRating).toFixed(1)}
        </TextView>
      </View>
    </Pressable>
  );
};

export default VenueDashboardItem;

const styles = StyleSheet.create({
  txtPrice: {marginTop: 5, color: Colors.PrimaryColor},
  txtLocation: {marginTop: 5, color: Colors.LightestGray},
  rating: {
    backgroundColor: Colors.PrimaryColor,
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    paddingHorizontal: 5,
    top: 5,
    borderRadius: 3,
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
