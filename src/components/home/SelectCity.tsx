import React, {useState} from 'react';
import {Menu, MenuItem} from 'react-native-material-menu';
import useCities from '../../hooks/useCities';
import {Icons, TextView} from '../core';
import {Pressable, StyleSheet} from 'react-native';
import {Colors} from '../../theme';
import {IconsType} from '../core/Icons';

type SelectCityProps = {
  onSelectedCity: (selectedCity: string) => void;
};

const SelectCity = ({onSelectedCity}: SelectCityProps) => {
  const {cities} = useCities();
  const [showCity, setShowCity] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(
    global.userInfo?.city,
  );

  const onPres = () => setShowCity(true);

  return (
    <Menu
      visible={showCity}
      anchor={
        <Pressable style={styles.container} onPress={onPres}>
          <TextView type="h5" style={styles.text}>
            {selectedCity ?? 'Hyderabad'}
          </TextView>

          <Icons
            name="chevron-small-down"
            type={IconsType.Entypo}
            size={25}
            color={Colors.PrimaryColor}
          />
        </Pressable>
      }
      onRequestClose={() => setShowCity(false)}>
      {cities &&
        cities?.length > 0 &&
        cities?.map(it => {
          const onPress = () => {
            setShowCity(false);
            onSelectedCity(it?.value);
            setSelectedCity(it?.label);
            global.selectedLocId = it?.value;
          };
          return <MenuItem onPress={onPress}>{it?.label}</MenuItem>;
        })}
    </Menu>
  );
};

export default SelectCity;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  text: {
    marginLeft: 10,
    color: Colors.PrimaryColor,
  },
});
