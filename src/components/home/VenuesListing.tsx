import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Button, Icons, TextView} from '../core';
import VenueDashboardItem from '../venue/VenueDashboardItem';
import {Colors} from '../../theme';
import {IconsType} from '../core/Icons';
import {useNavigationHook} from '../../hooks';
import {Vendor} from '../../models/RequestTypes';

type VenuesListingProps = {
  title: string;
  data: Vendor[];
};

const VenuesListing = ({title, data}: VenuesListingProps) => {
  const {navigation} = useNavigationHook();

  return (
    <View style={styles.mainContainer}>
      <TextView type="h6" numberOfLines={2} style={styles.text}>
        {title}
      </TextView>
      <FlatList
        data={data}
        style={{marginTop: 15}}
        renderItem={({item}) => {
          return <VenueDashboardItem {...{item}} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
      />

      <Button
        type="outline"
        text={'View ALL ' + title}
        textColor={Colors.PrimaryColor}
        style={styles.btn}
        onPress={() =>
          navigation.navigate('VenueCategoriesList', {title, list: data})
        }
        rightIcon={() => (
          <Icons
            type={IconsType.Entypo}
            name={'chevron-small-right'}
            size={25}
            color={Colors.PrimaryColor}
            style={styles.btnIcon}
          />
        )}
      />
    </View>
  );
};

export default VenuesListing;

const styles = StyleSheet.create({
  btnIcon: {marginLeft: 3, marginTop: 1},
  btn: {
    marginHorizontal: 0,
    marginRight: 15,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainContainer: {
    marginTop: 25,
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
    marginHorizontal: 10,
  },
  text: {},
});
