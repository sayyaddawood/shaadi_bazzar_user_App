import * as React from 'react';
import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from './types';

export const navigationRef =
  React.useRef<NavigationContainerRef<RootStackParamList>>(null);
export function navigate(name: string, params?: any) {
  navigationRef?.current?.dispatch(CommonActions.navigate(name, params));
}
export function goBack(): void {
  navigationRef?.current?.dispatch(CommonActions.goBack());
}
export function replaceNavigate(name: string, params?: any): void {
  navigationRef?.current?.reset({
    index: 0,
    routes: [{name: name}],
  });
}
