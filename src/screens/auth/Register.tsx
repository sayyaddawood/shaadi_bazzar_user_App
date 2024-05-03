import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {Colors, Dimen} from '../../theme';
import {
  AppContainer,
  Button,
  EditText,
  ImageView,
  OtpInput,
  Spacer,
  TextView,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigationHook} from '../../hooks';

const Login = () => {
  const navigation = useNavigationHook();
  const [value, setValue] = useState<string>('');
  const onVerifyOTP = () => {
    Keyboard.dismiss();
  };

  const onReSend = () => {
    alert('Resent OTP');
  };

  return (
    <AppContainer>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}>
        <View style={styles.content}>
          <TextView type="h1" position="left" style={styles.text}>
            Your Information
          </TextView>

          <Spacer height={30} />

          <EditText
            label="Name"
            placeholder="+92-308-9273234"
            keyboardType="number-pad"
            onChangeText={() => {}}
          />

          <Spacer height={10} />

          <EditText
            label="Business Type"
            placeholder="Select"
            keyboardType="number-pad"
            onChangeText={() => {}}
          />

          <Spacer height={10} />

          <EditText
            label="Name Of Business"
            placeholder="Select"
            keyboardType="number-pad"
            onChangeText={() => {}}
          />

          <Spacer height={10} />

          <EditText
            label="City"
            placeholder="City"
            keyboardType="number-pad"
            onChangeText={() => {}}
          />

          <Spacer height={10} />

          <EditText
            label="Business Address"
            placeholder="Address"
            keyboardType="number-pad"
            onChangeText={() => {}}
          />

          <Button style={styles.btn} text={'Continue'} onPress={onVerifyOTP} />
        </View>
      </KeyboardAwareScrollView>
    </AppContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  text: {marginLeft: 30},

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
  content: {},
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
