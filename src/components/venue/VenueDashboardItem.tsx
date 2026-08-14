import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {ImageView, TextView} from '../core';
import {Colors} from '../../theme';
import {useHelper, useNavigationHook} from '../../hooks';
import {Vendor} from '../../models/RequestTypes';
import RatingView from './RatingView';
import SelectBudgetItem from '../planner/SelectBudgetItem';
import useBudgetPlannerStore from '../../store/useBudgetPlanner';

type VenueDashboardItemProps = {
  item: Vendor;
  budgetSelect?: boolean;
  category?: string;
};

const VenueDashboardItem = ({
  item,
  budgetSelect = false,
  category,
}: VenueDashboardItemProps) => {
  const {navigation} = useNavigationHook();
  const {formatCurrency} = useHelper();

  const isSelected = useBudgetPlannerStore(
    budgetSelect
      ? state => state?.selectedVendors?.[category]?.vId === item.id
      : () => false,
  );
  console.log("🚀 ~ VenueDashboardItem ~ isSelected:", isSelected)

  const onPress = () =>
    navigation.navigate('VenueDetail', {
      id: item?.id,
    });

  return (
    <Pressable
      style={({pressed}) => [
        {opacity: pressed ? 0.9 : 1},
        styles.itemContainer,
        isSelected && styles.selectedBorder,
      ]}
      onPress={onPress}>
      <ImageView
        uri={item?.vendorMedia ? item?.vendorMedia[0]?.path : item?.cover_photo}
        type="ONLINE"
        style={styles.image}
        resizeMode="cover"
      />
      <View
        style={[
          styles.content,
          isSelected && {
            backgroundColor: Colors.PrimaryColorLight,
          },
        ]}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.row}>
            <TextView numberOfLines={1} type="h6" style={styles.text}>
              {item.business_name}
            </TextView>

            {budgetSelect && (
              <SelectBudgetItem
                vId={item.id}
                isSelected={isSelected}
                price={
                  item?.price_type == 'Full'
                    ? Number(item.f_price)
                    : Number(item.f_price) *
                      useBudgetPlannerStore?.getState()?.guest
                }
                category={category}
              />
            )}
          </View>
        </View>
        <TextView
          type="h7"
          numberOfLines={1}
          style={[styles.txtLocation, budgetSelect && {marginTop: -2}]}>
          {item?.address?.full_address ?? item?.full_address}
        </TextView>
        <TextView type="h7" numberOfLines={1} style={styles.txtPrice}>
          Starting at Rs: {formatCurrency(Number(item?.f_price)) ?? 0}{' '}
          {item?.price_type && item?.price_type != 'Full' && (
            <TextView type="h8" style={{marginLeft: 5}}>
              Per head
            </TextView>
          )}
        </TextView>
      </View>

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
    right: 5,
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
    width: '100%',
    height: 125,
    resizeMode: 'contain',
    borderRadius: 7,
  },
  itemContainer: {
    width: 180,
    flex: 1,
    marginRight: 15,
  },
  text: {
    marginTop: 8,
    letterSpacing: 0.8,
    flex: 1,
  },
  row: {flexDirection: 'row', alignItems: 'flex-start', flex: 1},
  selectedBorder: {
    borderWidth: 0.3,
    borderColor: Colors.PrimaryColor,
    borderRadius: 7,
  },
  content: {
    backgroundColor: Colors.Whitet,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    paddingLeft: 5,
    paddingBottom: 5,
  },
});
