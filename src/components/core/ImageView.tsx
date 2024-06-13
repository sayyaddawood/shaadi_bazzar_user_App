import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import FastImage, {ResizeMode} from 'react-native-fast-image';
import {BASE_URL_IMAGE} from '../../network/const';

type ImageView = {
  style?: any;
  onLoadEnd?: () => void;
  uri: string | number;
  resizeMode?: ResizeMode;
  type?: 'ONLINE' | 'OFFLINE';
};

const ImageView = ({
  uri,
  resizeMode = 'contain',
  style,
  onLoadEnd,
  type = 'OFFLINE',
}: ImageView) => {
  const [isLoading, setLoading] = useState(true);
  const isNetworkImage =
    typeof uri === 'string' ? (uri as string).startsWith('http') : false;
  return (
    <FastImage
      style={[styles.container, style]}
      source={
        (isNetworkImage || type == 'ONLINE')
          ? {uri: (BASE_URL_IMAGE + uri) as string, priority: FastImage.priority.high}
          : (uri as number)
      }
      resizeMode={resizeMode}
      onLoadStart={() => setLoading(true)}
      onLoadEnd={() => {
        setLoading(false);
        onLoadEnd && onLoadEnd();
      }}></FastImage>
  );
};

export default ImageView;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
});
