import React from 'react';
import {StatusBar, StatusBarStyle, StyleSheet} from 'react-native';
import {Colors} from '../../theme';

type AppStatusBar = {
  bgColor?: string;
  hidden?: boolean;
  translucent?: boolean;
  barStyle?: StatusBarStyle;
};

const AppStatusBar = ({
  bgColor = Colors.White,
  hidden,
  translucent,
  barStyle = "dark-content",
}: AppStatusBar) => {
  return (
    <StatusBar
      barStyle={barStyle}
      networkActivityIndicatorVisible
      hidden={hidden}
      translucent={translucent}
      backgroundColor={bgColor}
    />
  );
};

export default AppStatusBar;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.White,
  },
});
