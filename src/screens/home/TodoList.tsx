import React from 'react';
import {View} from 'react-native';
import { AppContainer, TextView } from '../../components';

const TodoList = () => {
  return (
    <AppContainer style={{justifyContent: 'center'}}>
      <TextView position='center' type="h1">Todo List</TextView>
    </AppContainer>
  );
};

export default TodoList;
