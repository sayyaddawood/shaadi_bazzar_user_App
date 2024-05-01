import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {AppContainer} from '../../components';

const Splash = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useEffect(() => {
    (() => {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    })();
  }, []);

  return (
    <AppContainer>
      <Text style={{color: Colors.Black}}>Splash ...</Text>
    </AppContainer>
  );
};

export default Splash;
