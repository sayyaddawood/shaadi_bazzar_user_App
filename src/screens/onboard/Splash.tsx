import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {AppContainer, TextView} from '../../components';

const Splash = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useEffect(() => {
    (() => {
      setTimeout(() => {
        navigation.replace('Home');
      }, 2000);
    })();
  }, []);

  return (
    <AppContainer style={styles.bg}>
      <TextView type="h1" style={styles.text}>
        Shadi Bazaar
      </TextView>
    </AppContainer>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.White,
  },
});
