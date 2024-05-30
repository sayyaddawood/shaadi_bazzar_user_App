import React from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {AssetsIcons, Colors, Dimen} from '../../theme';
import {
  AppContainer,
  Button,
  EditText,
  ImageView,
  Spacer,
  TextView,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigationHook} from '../../hooks';
const Login = () => {
  const navigation = useNavigationHook();
  const onSendOTP = () => {
    Keyboard.dismiss();
    navigation.navigate('OtpVerification');
  };

  return (
    <AppContainer>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}>
        <View style={styles.content}>
          <TextView type="h1" position="center">
            Continue With Phone
          </TextView>
          <Spacer height={20} />
          <TextView type="h6" position="center" style={styles.sendOtp}>
            We will send you <TextView type="h6">One Time Password</TextView>
            {'\n'}on this phone number
          </TextView>
          <ImageView uri={AssetsIcons.login} style={styles.image} />
          <Spacer height={Dimen.height / 35} />
          <TextView type="h6" position="center">
            Enter Your Phone Number
          </TextView>
          <EditText
            placeholder="+92-308-9273234"
            keyboardType="number-pad"
            onChangeText={() => {}}
          />
          <Spacer height={5} />
          <Button text={'SEND OTP'} onPress={onSendOTP} />
        </View>
      </KeyboardAwareScrollView>
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
  image: {
    alignSelf: 'center',
    height: Dimen.height / 3,
    width: Dimen.height / 3,
    borderRadius: Dimen.height / 4.8,
    marginTop: Dimen.height / 35,
  },
  content: {
    paddingTop: Dimen.height / 10,
  },
  sendOtp: {
    fontWeight: 'normal',
  },
});
