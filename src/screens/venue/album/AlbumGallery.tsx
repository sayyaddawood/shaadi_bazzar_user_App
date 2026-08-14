import React, {useEffect, useRef} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigationHook} from '../../../hooks';
import {AppStatusBar, BackButton, ImageView} from '../../../components';
import {Colors, Dimen} from '../../../theme';
import useRouteHook from '../../../hooks/useRouteHook';
import {FlashList} from '@shopify/flash-list';
import {BASE_URL_IMAGE} from '../../../network/const';

const AlbumGallery = () => {
  const {navigation} = useNavigationHook();
  const ref = useRef<FlashList<any>>(null);
  const {activeIndexImage, itemsImages} = useRouteHook({
    screenName: 'AlbumGallery',
  }).params;

  const onBackPress = () => navigation.goBack();

  useEffect(() => {
    if (ref?.current && activeIndexImage) {
      setTimeout(() => {
        ref?.current?.scrollToIndex({index: activeIndexImage, animated: true});
      }, 500);
    }
  }, []);


  return (
    <View style={styles.container}>
      <AppStatusBar hidden />

      <FlashList
        data={itemsImages}
        horizontal
        ref={ref}
        decelerationRate="fast"
        bounces={false}
        keyExtractor={(_, index) => index.toString()}
        snapToInterval={Dimen.width}
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        removeClippedSubviews={true}
        renderItem={({item, index}) => {
          return (
            <>
              <View style={{}}>
                <Image
                  source={{uri: BASE_URL_IMAGE + item.path}}
                  style={[styles.backImage]}
                  resizeMode="cover"
                  blurRadius={10}
                />
              </View>

              <ImageView
                uri={item.path}
                type="ONLINE"
                style={[styles.frontImage]}
                resizeMode="contain"
              />
            </>
          );
        }}
        showsVerticalScrollIndicator={false}
      />

      <BackButton onBackPress={onBackPress} style={styles.backButton} />
    </View>
  );
};

export default AlbumGallery;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backImage: {height: Dimen.height, width: Dimen.width},
  frontImage: {
    height: Dimen.height,
    width: Dimen.width,
    position: 'absolute',
  },

  backButton: {
    backgroundColor: Colors.Halfwit,
    position: 'absolute',
    top: 50,
    left: 10,
  },
});
