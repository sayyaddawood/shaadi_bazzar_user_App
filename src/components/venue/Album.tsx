import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Button, ImageView, TextView} from '../core';
import {AssetsIcons, Colors, Dimen} from '../../theme';
import Icons, {IconsType} from '../core/Icons';
import Line from '../Line';

type AlbumType = {
  items: string[];
};

const Album = ({items}: AlbumType) => {
  return (
    <View>
      <TextView position="left" type="h5">
        Albums {items.length}
      </TextView>

      <FlatList
        data={items}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => {
          return (
            <View style={{marginTop: 20}}>
              <ImageView uri={item} style={styles.image} resizeMode="cover" />

              <View style={styles.row}>
                <TextView position="left" type="h7">
                  Albums {items.length}
                </TextView>

                <View style={styles.totalnumView}>
                  <Icons
                    type={IconsType.FontAwesome}
                    name={'photo'}
                    size={13}
                    color={Colors.Black}
                  />

                  <TextView position="left" type="h8" style={{marginLeft: 3}}>
                    {items.length}
                  </TextView>
                </View>
              </View>
            </View>
          );
        }}
        numColumns={2}
        keyExtractor={(_, i) => i.toString()}
      />

      <Button
        type="outline"
        text="View All Albums"
        textColor={Colors.PrimaryColor}
        style={styles.btn}
        onPress={() => {}}
      />

      <Line style={[styles.line, {marginTop: 25}]} />
    </View>
  );
};

export default Album;

const styles = StyleSheet.create({
  image: {
    height: 160,
    width: Dimen.width / 2.3,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  contentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginTop: 5,
  },

  totalnumView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  line: {
    height: 5,
    backgroundColor: Colors.Halfwit,
    marginLeft: -20,
    marginVertical: 15,
  },
  btn: {marginHorizontal: 5, marginTop: 25},
});
