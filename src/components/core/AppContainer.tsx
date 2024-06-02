import React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../../theme';

type AppContainer = {
  children: React.ReactNode;
  safeAreaStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
};

const AppContainer = ({children, safeAreaStyle, style}: AppContainer) => {
  return (
    <View style={[styles.mainContainer, safeAreaStyle]}>
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
