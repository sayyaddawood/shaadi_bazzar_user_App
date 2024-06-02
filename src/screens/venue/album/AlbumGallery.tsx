import React, {useEffect, useRef} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {useNavigationHook} from '../../../hooks';
import {AppStatusBar, BackButton, ImageView} from '../../../components';
import {Colors, Dimen} from '../../../theme';
import {BlurView} from '@react-native-community/blur';
import useRouteHook from '../../../hooks/useRouteHook';
import {FlashList} from '@shopify/flash-list';

const AlbumGallery = () => {
  const navigation = useNavigationHook();
  const ref = useRef<FlashList<any>>(null);
  const {activeIndexImage} = useRouteHook({screenName: 'AlbumGallery'}).params;

  const onBackPress = () => navigation.goBack();

  const items = [
    'https://i.pinimg.com/564x/67/a9/03/67a903b932db6a326308e70a66c7e93b.jpg',
    'https://i.pinimg.com/564x/4f/96/d1/4f96d1769c0d96bae46f3b4371ccf0ef.jpg',
    'https://i.pinimg.com/564x/ae/34/f8/ae34f8e89d05d28e6287b3deac4bf59e.jpg',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/600',
  ];

  useEffect(() => {
    if (ref?.current && activeIndexImage) {
      setTimeout(() => {
        ref?.current?.scrollToIndex({index: activeIndexImage, animated: true});
      }, 1000);
    }
  }, []);

  return (
    <View style={styles.container}>
      <AppStatusBar hidden />
      <FlashList
        data={items}
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
                <ImageView
                  uri={item}
                  style={[styles.backImage]}
                  resizeMode="cover"
                />

                <BlurView
                  style={[
                    styles.blurView,
                    {opacity: Platform.OS == 'ios' ? 1 : 0.91},
                  ]}
                  blurType={Platform.OS == 'ios' ? 'dark' : 'dark'}
                  blurAmount={9}
                  reducedTransparencyFallbackColor="white"
                />
              </View>

              <ImageView
                uri={item}
                style={[styles.frontImage, {zIndex: 1}]}
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
    // top: 0,
    // right:0,
    // left:0,
    // bottom: 0,
  },

  backButton: {
    backgroundColor: Colors.Halfwit,
    position: 'absolute',
    top: 50,
    left: 10,
  },
});
