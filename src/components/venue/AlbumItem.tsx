import React from 'react';
import {Pressable} from 'react-native';
import {ImageView} from '../core';
import {Dimen} from '../../theme';
import {useNavigationHook} from '../../hooks';

type AlbumItemType = {
  it: string;
  index: number;
};

const AlbumItem = ({it, index}: AlbumItemType) => {
  const navigation = useNavigationHook();
  const onPress = () =>
    navigation.navigate('AlbumGallery', {activeIndexImage: index});

  return (
    <Pressable
      style={({pressed}) => [
        {opacity: pressed ? 0.9 : 1},
        {
          width: Dimen.width,
          marginBottom: 1,
        },
      ]}
      onPress={onPress}
      key={index}>
      <ImageView
        uri={it}
        style={{width: Dimen.width, height: 200}}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default AlbumItem;
