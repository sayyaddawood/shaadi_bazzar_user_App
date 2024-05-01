import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../../theme';
import {AppContainer} from '../../components';

const Login = () => {
  return (
    <AppContainer>
      <Text>Helo</Text>
    </AppContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
