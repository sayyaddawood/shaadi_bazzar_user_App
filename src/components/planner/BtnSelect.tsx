import React, {useState} from 'react';
import {Colors} from '../../theme';
import Icons, {IconsType} from '../core/Icons';
import {Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {TextView} from '../core';
import DatePicker from '../core/DatePicker';

const BtnSelect = ({
  icon,
  text,
  style,
  iconType,
  onPress,
}: {
  icon: string;
  text: string;
  style?: StyleProp<ViewStyle>;
  iconType?: IconsType;
  onPress: (data: any) => void;
}) => {
  const [visible, setVisibility] = useState(false);
  const placeHolder = text?.toString()?.trim()?.startsWith('Select');
  return (
    <>
      <Pressable
        style={[styles.btn, style]}
        onPress={() => {
          if (icon == 'calendar-outline') {
            setVisibility(true);
            return;
          }

          onPress(undefined);
        }}>
        <Icons
          type={iconType ?? IconsType.Ionicons}
          name={icon}
          size={18}
          color={Colors.PrimaryColor}
        />
        <TextView
          type="h7"
          numberOfLines={1}
          noBold={true}
          style={[
            styles.txt,
            placeHolder && {
              color: Colors.Gray,
            },
          ]}>
          {text}
        </TextView>
      </Pressable>

      <DatePicker
        {...{
          visible,
          setVisibility,
          onConfirmDate(date) {
            onPress(date);
          },
        }}
      />
    </>
  );
};

export default BtnSelect;

const styles = StyleSheet.create({
  txt: {
    marginLeft: 6,
    flex: 1,
  },
  btn: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,

    borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
    borderWidth: 1,
    borderColor: Colors.GrayShade,
    flex: 0.48,
    height: 45,
  },
});
