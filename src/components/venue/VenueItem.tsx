import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Button, Icons, ImageView, TextView} from '../core';
import {AssetsIcons, Colors} from '../../theme';
import Fonts from '../../theme/Fonts';
import {IconsType} from '../core/Icons';
import {IconButton} from 'react-native-paper';
import {useNavigationHook} from '../../hooks';
import {Vendor} from '../../models/RequestTypes';

type VenueItemType = {
  item: Vendor;
};

const VenueItem = ({item}: VenueItemType) => {
  const navigation = useNavigationHook();
  return (
    <Pressable
      style={styles.itemCon}
      onPress={() => navigation.navigate('VenueDetail', {id: item.id})}>
      <ImageView
        uri={item?.vendorMedia[0]?.path ?? AssetsIcons.placeholder}
        resizeMode="cover"
        type="ONLINE"
        style={styles.image}
      />
      <TextView type="h7" color={Colors.Black} style={styles.mt}>
        {item.address.full_address}
      </TextView>
      <TextView type="h6" color={Colors.Black} style={styles.textTitle}>
        {item.business_name}
      </TextView>
      <TextView type="h6" style={styles.priceText}>
        Rs {item.f_price ?? '0'}{' '}
        <TextView position="left" type="h8" style={styles.des}>
          per day
        </TextView>
      </TextView>

      <View style={styles.btnCon}>
        <Button
          type="outline"
          text="Message"
          textColor={Colors.PrimaryColor}
          style={styles.btn}
          onPress={() => {}}
          leftIcon={() => (
            <Icons
              type={IconsType.AntDesign}
              name={'message1'}
              size={20}
              color={Colors.PrimaryColor}
              style={{marginRight: 5}}
            />
          )}
        />

        <IconButton
          icon={() => (
            <Icons
              type={IconsType.Ionicons}
              name={'call'}
              size={20}
              color={Colors.Green}
            />
          )}
          size={22}
          style={styles.btnCall}
          onPress={() => {}}
        />
      </View>
    </Pressable>
  );
};

export default VenueItem;

const styles = StyleSheet.create({
  itemCon: {
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom: 5,
    marginTop: 5,
  },

  textTitle: {marginTop: 5, fontFamily: Fonts.light},

  mt: {marginTop: 10},

  btnCall: {
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.Green,
    padding: 3,
  },

  btnCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  image: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
    alignSelf: 'center',
  },

  priceText: {marginTop: 5, fontFamily: Fonts.bold},

  btn: {
    marginHorizontal: 0,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 25,
  },

  des: {
    color: Colors.Gray,
    marginTop: 2,
  },
});
