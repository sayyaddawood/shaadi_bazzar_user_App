import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {Colors, Dimen} from '../../theme';
import {
  AppContainer,
  Button,
  ImageView,
  OtpInput,
  TextView,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigationHook} from '../../hooks';

const Login = () => {
  const navigation = useNavigationHook();
  const [value, setValue] = useState<string>('');
  const onVerifyOTP = () => {
    Keyboard.dismiss();
    navigation.navigate('Register');
  };

  const onReSend = () => {
    navigation.navigate('Home');
  };

  return (
    <AppContainer>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}>
        <View style={styles.content}>
          <TextView type="h1" position='center'>Verify Mobile Number</TextView>
          <TextView type="h6" position='center' style={styles.sendOtp}>
            We sent a verification code to
            <TextView type="h6"> 03089787678</TextView>
            {'\n'}Enter the code below
          </TextView>
          <ImageView uri={'https://picsum.photos/200'} style={styles.image} />
          <OtpInput {...{value, setValue}} />
          <Button
            style={styles.btn}
            text={'VERIFY & PROCEED'}
            onPress={onVerifyOTP}
          />
          <TextView type="h6" position='center' style={styles.receivedCode}>
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
    height: Dimen.height / 4.8,
    width: Dimen.height / 4.8,
    borderRadius: Dimen.height / 4.8,
    marginTop: Dimen.height / 35,
    marginBottom: Dimen.height / 15,
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
    marginHorizontal: 80,
  },
});
