import React from 'react';
import {IconButton} from 'react-native-paper';
import {Icons} from './core';
import {IconsType} from './core/Icons';
import {Colors} from '../theme';
import {ViewStyle} from 'react-native';

type BackButtonProps = {
  onBackPress?: () => void;
  style?: ViewStyle;
};

const BackButton = ({onBackPress, style}: BackButtonProps) => {
  return (
    <IconButton
      icon={() => (
        <Icons
          type={IconsType.Entypo}
          name={'chevron-small-left'}
          size={25}
          color={Colors.Black}
        />
      )}
      size={15}
      style={[{backgroundColor: Colors.Halfwit}, style]}
      onPress={onBackPress}
    />
  );
};

export default BackButton;
