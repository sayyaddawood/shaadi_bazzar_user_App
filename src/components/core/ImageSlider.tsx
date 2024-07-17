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
  StyleSheet,
} from 'react-native';
import {BASE_URL_IMAGE} from '../../network/const';
import {Colors} from '../../theme';
let {width} = Dimensions.get('window');
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

type ImageSliderProps = {
  style?: StyleProp<ViewStyle>;
  images: string[];
};

const ImageSlider = ({style, images}: ImageSliderProps) => {
  const scrollOffsetX = useRef(new Animated.Value(0)).current;
  const dotPosition = Animated.divide(scrollOffsetX, width);

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
      <View style={styles.dotContainer}>
        {images?.map((_, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot_${index}`}
              style={[styles.dot, {opacity}]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 20,
    padding: 5,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: Colors.PrimaryColor,
    marginHorizontal: 1,
  },
});
