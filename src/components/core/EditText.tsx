import React, {useRef, useState} from 'react';
import {
  TextInput,
  StyleProp,
  StyleSheet,
  ViewStyle,
  KeyboardType,
  ReturnKeyType,
  TextStyle,
  View,
  Pressable,
} from 'react-native';
import {Colors, Dimen} from '../../theme';
import TextView from './TextView';
import Fonts from '../../theme/Fonts';
import Icons, {IconsType} from './Icons';
import DatePicker from './DatePicker';
import ErrorMessage from '../ErrorMessage';

type EditTextType = {
  country?: boolean;
  style?: StyleProp<ViewStyle>;
  inputStyle?: any;
  input?: any;
  password?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardType;
  returnKey?: ReturnKeyType;
  onPress?: () => void;
  onChangeText: (value: string) => void;
  onReset?: () => void | undefined;
  errorMessage?: string;
  label?: string;
  onSubmitEditing?(): void;
  autoFocus?: boolean;
  reference?: any;
  withSearch?: boolean;
  getCode?(value: string): void;
  required?: boolean;
  editable?: boolean;
  multiline?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  errorTextStyle?: StyleProp<ViewStyle>;
  value?: string;
  autoCapitalize?: any;
  max?: any;
  rightIcon?: () => React.ReactNode;
  isDropDown?: boolean;
  secureTextEntry?: boolean;
  rightText?: string;
  type?: string;
  pointerEvent?: string;
};

const EditText = ({
  style,
  placeholder,
  multiline,
  keyboardType = 'default',
  label,
  inputStyle,
  input,
  returnKey,
  onChangeText,
  errorMessage,
  onSubmitEditing,
  autoFocus = false,
  reference,
  onPress,
  required = false,
  labelStyle,
  value,
  autoCapitalize = 'none',
  max,
  rightIcon,
  editable = true,
  secureTextEntry = false,
  errorTextStyle,
  type,
  pointerEvent,
}: EditTextType) => {
  let placeholderColor = Colors.Gray;
  let [isPassword, setIsPassword] = React.useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);
  const [visible, setVisibility] = useState(false);

  return (
    <View style={[styles.con, style]}>
      {label && (
        <View style={[styles.labelStylee]}>
          <TextView style={[labelStyle]}>{label}</TextView>

          {required && <TextView style={{color: Colors.Red}}>*</TextView>}
        </View>
      )}

      <Pressable
        style={[
          styles.container,
          isFocused && {borderColor: Colors.PrimaryColor},
          inputStyle,
        ]}
        disabled={pointerEvent == 'none' ? false : true}
        onPress={() => {
          if (type == 'calender') {
            setVisibility(true);
            return;
          }

          onPress && onPress();
        }}>
        {rightIcon && rightIcon()}
        <TextInput
          editable={editable}
          multiline={multiline}
          ref={reference}
          value={value}
          autoFocus={autoFocus}
          pointerEvents={pointerEvent}
          focusable={true}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          autoCapitalize={autoCapitalize}
          maxLength={max}
          style={[styles.input, {fontFamily: Fonts.regular}, input]}
          secureTextEntry={isPassword}
          keyboardType={keyboardType}
          returnKeyType={returnKey}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={false}
        />

        {secureTextEntry && (
          <Pressable
            style={{marginRight: 10}}
            onPress={() => {
              setIsPassword(prevIsPassword => {
                const newIsPassword = !prevIsPassword;
                return newIsPassword;
              });
            }}>
            <Icons
              type={IconsType.Entypo}
              name={isPassword ? 'eye' : 'eye-with-line'}
              size={20}
              color={Colors.Gray}
              style={{marginRight: 5}}
            />
          </Pressable>
        )}
      </Pressable>

      <ErrorMessage {...{errorMessage}} />

      {type == 'calender' && (
        <DatePicker
          {...{
            visible,
            setVisibility,
            onConfirmDate(date) {
              console.log(date);
              onChangeText(date);
            },
          }}
        />
      )}
    </View>
  );
};

export default EditText;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.9,
    borderColor: Colors.LightestGray,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 35,
    height: 45,
    borderRadius: 4,
  },

  con: {
    marginHorizontal: 15,
  },

  view: {
    borderRadius: 4,
    borderColor: Colors.LightestGray,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    backgroundColor: Colors.White,
  },

  input: {
    flex: 1,
    color: Colors.Black,
  },

  labelStylee: {
    flexDirection: 'row',
    marginBottom: -5,
  },

  inputIcon: {
    width: Dimen.width / 18,
    height: Dimen.width / 18,
    resizeMode: 'contain',
  },
  labelStyle: {flexDirection: 'row', marginLeft: 18, marginBottom: -18},
});
