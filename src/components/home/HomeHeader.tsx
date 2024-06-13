import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Icons, TextView} from '../core';
import {IconsType} from '../core/Icons';
import {Colors} from '../../theme';
import {useNavigationHook} from '../../hooks';

type HomeHeaderProps = {};

const HomeHeader = ({}: HomeHeaderProps) => {
  const navigation = useNavigationHook();
  return (
    <View style={styles.container}>
      <TextView type="h5" style={styles.text}>
        Hyderabad
      </TextView>

      <IconButton
        icon={() => (
          <Icons
            type={IconsType.AntDesign}
            name="search1"
            size={18}
            color={Colors.Gray}
          />
        )}
        size={15}
        style={{backgroundColor: Colors.Halfwit}}
        onPress={() => {
          navigation.navigate('Search', {
            id: '-1',
          });
        }}
      />
      <IconButton
        icon={() => (
          <Icons
            type={IconsType.AntDesign}
            name="user"
            size={18}
            color={Colors.Gray}
          />
        )}
        size={15}
        style={{backgroundColor: Colors.Halfwit}}
        onPress={() => navigation.navigate('UserSettings')}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text: {
    marginLeft: 10,
    flex: 1,
    color: Colors.PrimaryColor,
  },
});
