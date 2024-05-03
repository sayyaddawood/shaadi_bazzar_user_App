import React from 'react';
import {View} from 'react-native';

type SpacerProps = {
  height?: number;
};

const Spacer = ({height}: SpacerProps) => {
  return <View style={{height: height ?? 10}} />;
};

export default Spacer;
