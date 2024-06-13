import React from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {Button, ImageView, TextView} from '../core';
import {Colors, Dimen} from '../../theme';
import Icons, {IconsType} from '../core/Icons';
import Line from '../Line';
import {useNavigationHook} from '../../hooks';
import useAlbums from '../../hooks/useAlbum';

type AlbumType = {
  isViewAll?: boolean;
  id: string;
};

const Album = ({id, isViewAll = false}: AlbumType) => {
  const navigation = useNavigationHook();

  const {data: items} = useAlbums({id});

  return (
    <View>
      {!isViewAll && (
        <TextView position="left" type="h5" style={isViewAll && styles.albums}>
          Albums {items?.length}
        </TextView>
      )}

      <FlatList
        data={!isViewAll ? items.filter((_, index) => index < 4) : items}
        contentContainerStyle={[
          styles.contentContainer,
          isViewAll && {
            paddingBottom: 80,
          },
        ]}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          const onPress = () => {
            navigation.navigate('AlbumListing', {
              list: item?.vendorMedia,
            });
          };

          return (
            <Pressable
              style={({pressed}) => [
                {opacity: pressed ? 0.9 : 1, marginTop: 20},
              ]}
              onPress={onPress}>
              <ImageView
                uri={item?.vendorMedia[0].path}
                style={[styles.image]}
                type="ONLINE"
                resizeMode="cover"
              />

              <View style={styles.row}>
                <TextView position="left" type="h7">
                  {item?.name}
                </TextView>

                <View style={styles.totalnumView}>
                  <Icons
                    type={IconsType.FontAwesome}
                    name={'photo'}
                    size={13}
                    color={Colors.Black}
                  />

                  <TextView position="left" type="h8" style={{marginLeft: 3}}>
                    {item?.vendorMedia.length}
                  </TextView>
                </View>
              </View>
            </Pressable>
          );
        }}
        numColumns={2}
        keyExtractor={(_, i) => i.toString()}
      />

      {!isViewAll && (
        <>
          <Button
            type="outline"
            text="View All Albums"
            textColor={Colors.PrimaryColor}
            style={styles.btn}
            onPress={() => navigation.navigate('ViewAllAlbums')}
          />

          <Line style={[styles.line, {marginTop: 25}]} />
        </>
      )}
    </View>
  );
};

export default Album;

const styles = StyleSheet.create({
  albums: {marginLeft: 25, marginTop: 10},

  image: {
    height: 160,
    width: Dimen.width / 2.3,
    borderRadius: 10,
  },
  contentContainer: {
    marginHorizontal: 20,
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
