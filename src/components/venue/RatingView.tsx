import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Icons, TextView} from '../core';
import {IconsType} from '../core/Icons';
import {Colors} from '../../theme';

const RatingView = ({
  avgRating,
  style,
}: {
  avgRating: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[styles.rating, style]}>
      <Icons
        type={IconsType.Entypo}
        name={'star'}
        size={12}
        style={{marginRight: 2}}
        color={Colors.White}
      />
      <TextView type="h7" style={styles.txtRating}>
        {parseFloat(avgRating).toFixed(1)}
      </TextView>
    </View>
  );
};

export default RatingView;

const styles = StyleSheet.create({
  rating: {
    backgroundColor: Colors.PrimaryColor,
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 3,
  },

  txtRating: {
    color: Colors.White,
  },
});
