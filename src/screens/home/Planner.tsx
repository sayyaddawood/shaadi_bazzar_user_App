import React from 'react';
import {View} from 'react-native';
import { AppContainer, TextView } from '../../components';

const Planner = () => {
  return (
    <AppContainer style={{justifyContent: 'center'}}>
      <TextView position='center' type="h1">Planner</TextView>
    </AppContainer>
  );
};

export default Planner;