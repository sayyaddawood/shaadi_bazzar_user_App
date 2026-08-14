import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Icons} from '../core';
import {IconsType} from '../core/Icons';
import {Colors} from '../../theme';
import {useNavigationHook} from '../../hooks';
import SelectCity from './SelectCity';

type HomeHeaderProps = {
  onSelectedCity: (selectedCity: string) => void;
};

const HomeHeader = ({onSelectedCity}: HomeHeaderProps) => {
  const {navigation} = useNavigationHook();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SelectCity onSelectedCity={onSelectedCity} />
      </View>

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text: {
    marginLeft: 10,
    color: Colors.PrimaryColor,
  },
});
