import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AssetsIcons, Colors, Dimen} from '../../theme';
import {
  AppContainer,
  Button,
  ImageView,
  OtpInput,
  TextView,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useOtpVerification} from '../../hooks';

const Login = () => {
  const {isLoading, phone, value, setValue, onReSend, onVerifyOTP} = useOtpVerification();

  return (
    <AppContainer>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}>
        <View style={styles.content}>
          <TextView type="h1" position="center">
            Verify Mobile Number
          </TextView>
          <TextView type="h6" position="center" style={styles.sendOtp}>
            We sent a verification code to
            <TextView type="h6"> {phone}</TextView>
            {'\n'}Enter the code below
          </TextView>
          <ImageView uri={AssetsIcons.login} style={styles.image} />
          <OtpInput {...{value, setValue}} />
          <Button
            isLoading={isLoading}
            disabled={value.length < 4 ? true : false}
            style={styles.btn}
            text={'VERIFY & PROCEED'}
            onPress={onVerifyOTP}
          />
          <TextView type="h6" position="center" style={styles.receivedCode}>
            Didn't Receive Code?{' '}
            <TextView type="h6" onPress={onReSend}>
              Resend Code
            </TextView>
          </TextView>
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
    marginTop: 15,
  },
  receivedCode: {
    marginTop: 8,
    fontWeight: 'normal',
  },

  btn: {
    marginTop: 20,
  },
});
