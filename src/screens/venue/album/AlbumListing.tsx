import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {AlbumItem, Header} from '../../../components';
import {Colors} from '../../../theme';
import {useNavigationHook, useRouteHook} from '../../../hooks';

const AlbumListing = () => {
  const {navigation} = useNavigationHook();
  const {list} = useRouteHook({screenName: 'AlbumListing'}).params;

  const onBackPress = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={onBackPress} title={'Photos'} />

      <FlatList
        data={list}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <AlbumItem
              {...{it: item, index}}
              onPress={() => {
                navigation.navigate('AlbumGallery', {
                  activeIndexImage: index,
                  itemsImages: list,
                });
              }}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default AlbumListing;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},
});
