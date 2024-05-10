import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Icons, TextView} from './core';
import {IconsType} from './core/Icons';
import {Colors} from '../theme';

type HeaderProps = {
  onBackPress?: () => void;
  title: string;
};

const Header = ({onBackPress, title}: HeaderProps) => {
  return (
    <View style={styles.container}>
      {onBackPress && (
        <IconButton
          icon={() => (
            <Icons
              type={IconsType.Entypo}
              name={'chevron-small-left'}
              size={25}
              color={Colors.Black}
            />
          )}
          size={15}
          style={{backgroundColor: Colors.Halfwit}}
          onPress={onBackPress}
        />
      )}

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
