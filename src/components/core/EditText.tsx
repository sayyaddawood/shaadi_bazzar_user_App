import React from 'react';
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

type EditTextType = {
  country?: boolean;
  style?: StyleProp<ViewStyle>;
  inputStyle?: any;
  password?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardType;
  returnKey?: ReturnKeyType;
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
  rightIcon?: JSX.Element;
  isDropDown?: boolean;
  secureTextEntry?: boolean;
  rightText?: string;
};

const EditText = ({
  style,
  placeholder,
  multiline,
  keyboardType = 'default',
  label,
  inputStyle,
  returnKey,
  onChangeText,
  errorMessage,
  onSubmitEditing,
  autoFocus = false,
  reference,
  required = false,
  labelStyle,
  value,
  autoCapitalize = 'none',
  max,
  editable = true,
  secureTextEntry = false,
  errorTextStyle,
}: EditTextType) => {
  let placeholderColor = Colors.Gray;
  let [isPassword, setIsPassword] = React.useState(secureTextEntry);

  return (
    <View style={[styles.con, style]}>
      {label && (
        <View style={[styles.labelStylee]}>
          <TextView style={[labelStyle,]}>{label}</TextView>

          {required && <TextView style={{color: Colors.Red}}>*</TextView>}
        </View>
      )}

      <View style={[styles.container, inputStyle]}>
        <TextInput
          editable={editable}
          multiline={multiline}
          ref={reference}
          value={value}
          autoFocus={autoFocus}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          autoCapitalize={autoCapitalize}
          maxLength={max}
          style={[styles.input, {fontFamily: Fonts.regular,}, inputStyle]}
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
      </View>

      {errorMessage && (
        <TextView style={[styles.errorText, errorTextStyle]}>
          {errorMessage}
        </TextView>
      )}
    </View>
  );
};

export default EditText;

const styles = StyleSheet.create({
  errorText: {color: Colors.Red, marginTop: 5, marginLeft: 20},

  container: {
    borderWidth: 0.9,
    borderColor: Colors.LightestGray,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 35,
    height: 40,
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
