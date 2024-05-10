import React from 'react';
import {View} from 'react-native';
import {AppContainer, TextView} from '../../components';
import {useNavigationHook} from '../../hooks';

const Home = () => {
  const navigation = useNavigationHook();
  return (
    <AppContainer style={{justifyContent: 'center'}}>
      <TextView type="h1" position='center' onPress={() => navigation.navigate('VenueDetail')}>
        Home
      </TextView>
    </AppContainer>
  );
};

export default Home;
