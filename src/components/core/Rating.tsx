import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import Icons, {IconsType} from './Icons';
import {Colors} from '../../theme';

type RatingTypes = {
  value: number;
  style: ViewStyle;
  containerStyle?: ViewStyle;
  onChange: (r: number) => void;
  size?: number
};

const rating = [1, 2, 3, 4, 5];

const Rating = ({value, size, containerStyle, style, onChange}: RatingTypes) => {
  const [selectedRating, setSelectedRating] = useState(value);

  const onPress = (r: number) => {
    setSelectedRating(r);
    onChange(r);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {rating.map(r => (
        <TouchableOpacity key={r} onPress={() => onPress(r)} style={style}>
          {selectedRating < r ? (
            <Icons
              name="staro"
              size={size ?? 15}
              type={IconsType.AntDesign}
              color={Colors.LightestGray}
            />
          ) : (
            <Icons
              name="star"
              size={size ?? 15}
              type={IconsType.AntDesign}
              color={Colors.PrimaryColor}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
});
