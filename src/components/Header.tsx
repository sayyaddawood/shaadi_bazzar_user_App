import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextView} from './core';
import BackButton from './BackButton';
import {Colors} from '../theme';

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
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
  },
  text: {
    marginLeft: 10,
  },
});
