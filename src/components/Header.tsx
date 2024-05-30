import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextView} from './core';
import BackButton from './BackButton';

type HeaderProps = {
  onBackPress?: () => void;
  title: string;
};

const Header = ({onBackPress, title}: HeaderProps) => {
  return (
    <View style={styles.container}>
      {onBackPress && <BackButton {...{onBackPress}} />}

      <TextView type="h5" style={styles.text}>
        {title}
      </TextView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    marginLeft: 10,
  },
});
