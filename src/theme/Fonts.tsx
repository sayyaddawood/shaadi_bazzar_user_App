import {PixelRatio, Platform} from 'react-native';
import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
const isIOS = Platform.OS == 'ios';

const Fonts = {
  black: 'Lato-Black',
  blackItalic: 'Lato-BlackItalic',
  light: isIOS ?  'Lato-Light' : "Lato-Bold",
  lightItalic: 'Lato-LightItalic',
  italic: 'Lato-Italic',
  regular: isIOS ? 'Lato-Regular' : 'Lato-Bold',
  bold: 'Lato-Bold',
  boldItalic: 'Lato-BoldItalic',
  thin: 'Lato-Thin',
  thinItalic: 'Lato-ThinItalic',
};

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const FontScale = {
  mini: normalize(isIOS ? 8 : 10),
  extraSmall: normalize(isIOS ? 9 : 11),
  small: normalize(isIOS ? 10 : 12),
  semiSmall: normalize(isIOS ? 11 : 13),
  medium: normalize(isIOS ? 12 : 14),
  semiMedium: normalize(isIOS ? 14 : 16),
  large: normalize(isIOS ? 16 : 18),
  extraLarge: normalize(isIOS ? 18 : 20),
  large20: normalize(isIOS ? 20 : 22),
  large22: normalize(isIOS ? 22 : 24),
  large24: normalize(isIOS ? 24 : 26),
  large26: normalize(isIOS ? 26 : 28),
  large28: normalize(isIOS ? 28 : 30),
  large30: normalize(isIOS ? 30 : 32),
};

export default Fonts;
