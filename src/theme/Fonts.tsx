import {PixelRatio, Platform} from 'react-native';
import {Dimensions} from 'react-native';

const Fonts = {
  black: 'Lato-Black',
  blackItalic: 'Lato-BlackItalic',
  light: 'Lato-Light',
  lightItalic: 'Lato-LightItalic',
  italic: 'Lato-Italic',
  regular: 'Lato-Regular',
  bold: 'Lato-Bold',
  boldItalic: 'Lato-BoldItalic',
  thin: 'Lato-Thin',
  thinItalic: 'Lato-ThinItalic',
};

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
const isIOS = Platform.OS == 'ios';

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const FontScale = {
  mini: normalize(8),
  extraSmall: normalize(9),
  small: normalize(10),
  semiSmall: normalize(11),
  medium: normalize(12),
  semiMedium: normalize(14),
  large: normalize(16),
  extraLarge: normalize(18),
  large20: normalize(20),
  large22: normalize(22),
  large24: normalize(24),
  large26: normalize(26),
  large28: normalize(28),
  large30: normalize(30),
};

export default Fonts;
