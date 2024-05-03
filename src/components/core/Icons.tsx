import React from 'react';
import {ViewStyle} from 'react-native';
import {memo} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import {Colors} from '../../theme';

export enum IconsType {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome5,
  FontAwesome,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
}

type IconsProps = {
  type: IconsType;
  name: string;
  size: number;
  color?: string;
  style?: ViewStyle;
};

const Icons = ({type, name, size, color, style}: IconsProps) => {
  switch (type) {
    case IconsType.AntDesign:
      return (
        <AntDesign
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );
    case IconsType.FontAwesome:
      return (
        <FontAwesome
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    case IconsType.Entypo:
      return (
        <Entypo
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    case IconsType.EvilIcons:
      return (
        <EvilIcons
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    case IconsType.Feather:
      return (
        <Feather
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    case IconsType.FontAwesome5:
      return (
        <FontAwesome5
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    case IconsType.Fontisto:
      return (
        <Fontisto
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    case IconsType.Foundation:
      return (
        <Foundation
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    case IconsType.Ionicons:
      return (
        <Ionicons
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    case IconsType.MaterialCommunityIcons:
      return (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    case IconsType.MaterialIcons:
      return (
        <MaterialIcons
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    case IconsType.Octicons:
      return (
        <Octicons
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    case IconsType.SimpleLineIcons:
      return (
        <SimpleLineIcons
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    case IconsType.Zocial:
      return (
        <Zocial
          name={name}
          size={size}
          color={color ? color : Colors.Icon}
          style={style}
        />
      );

    default:
      return null;
  }
};

export default memo(Icons);
