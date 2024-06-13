import React from 'react';
import {Pressable} from 'react-native';
import {ImageView} from '../core';
import {Dimen} from '../../theme';
import {useNavigationHook} from '../../hooks';

type AlbumItemType = {
  it: VendorAlbumMedia;
  index: number;
  onPress: () => void;
};

const AlbumItem = ({it, index, onPress}: AlbumItemType) => {
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
        uri={it.path}
        type="ONLINE"
        style={{width: Dimen.width, height: 200}}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default AlbumItem;
