import React, {useEffect, useRef} from 'react';
import {Animated, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useNavigationHook} from '../../../hooks';
import {BackButton, Header, Icons, ImageView} from '../../../components';
import {Colors, Dimen} from '../../../theme';
import {BlurView} from '@react-native-community/blur';
import {IconButton} from 'react-native-paper';
import {IconsType} from '../../../components/core/Icons';
import useRouteHook from '../../../hooks/useRouteHook';

const AlbumGallery = () => {
  const navigation = useNavigationHook();
  const ref = useRef<FlatList>(null);
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
      <Animated.FlatList
        data={items}
        horizontal
        ref={ref}
        decelerationRate="fast"
        bounces={false}
        scrollEventThrottle={1}
        keyExtractor={(_, index) => index.toString()}
        snapToInterval={Dimen.width}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={{}}>
              <View>
                <ImageView
                  uri={item}
                  style={styles.backImage}
                  resizeMode="cover"
                />

                <BlurView
                  style={styles.blurView}
                  blurType="dark"
                  blurAmount={3}
                  reducedTransparencyFallbackColor="white"
                />
              </View>

              <ImageView
                uri={item}
                style={styles.frontImage}
                resizeMode="contain"
              />
            </View>
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
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  backButton: {
    backgroundColor: Colors.Halfwit,
    position: 'absolute',
    top: 50,
    left: 10,
  },
});
