import React from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type AppContainer = {
  children: React.ReactNode;
  safeAreaStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  headerPadding?: boolean
};

const AppContainer = ({children, safeAreaStyle, style}: AppContainer) => {
  return (
    <View style={[styles.mainContainer, safeAreaStyle, Platform.OS == "android" && { paddingTop: 25}]}>
      <View style={[styles.mainContainer, style]}>{children}</View>
    </View>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});
