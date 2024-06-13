import React, {useRef} from 'react';
import {
  StyleProp,
  Image,
  ScrollView,
  Dimensions,
  ViewStyle,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {BASE_URL_IMAGE} from '../../network/const';
let {width} = Dimensions.get('window');
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

type ImageSliderProps = {
  style?: StyleProp<ViewStyle>;
  images: string[];
};

const ImageSlider = ({style, images}: ImageSliderProps) => {
  const scrollOffsetX = useRef(new Animated.Value(0)).current;

  return (
    <View style={[{}, style]}>
      <ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        bounces={false}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollOffsetX}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}>
        {images?.map((image, index) => {
          return (
            <TouchableWithoutFeedback key={`id_${index}`}>
              <Image
                style={{
                  width: width,
                  height: 240,
                  resizeMode: 'cover',
                }}
                source={{uri: BASE_URL_IMAGE + image}}
              />
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ImageSlider;
