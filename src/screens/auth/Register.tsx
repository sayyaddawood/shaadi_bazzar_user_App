import React, {useState} from 'react';
import {Alert, Keyboard, SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors, Dimen} from '../../theme';
import {
  AppContainer,
  Button,
  EditText,
  Spacer,
  TextView,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigationHook} from '../../hooks';

const Login = () => {
  const navigation = useNavigationHook();
  const [value, setValue] = useState<string>('');
  const onRegister = () => {
    Keyboard.dismiss();
    navigation.navigate('HomeTabs');
  };

  const onReSend = () => {
    Alert.alert('Resent OTP');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.White}}>
      <AppContainer>
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}>
          <View style={styles.content}>
            <TextView type="h1" position="left" style={styles.text}>
              Your Information
            </TextView>

            <Spacer height={30} />

            <EditText
              label="Name"
              placeholder="+923089273234"
              keyboardType="number-pad"
              onChangeText={() => {}}
            />

            <Spacer height={10} />

            <EditText
              label="Email Address"
              placeholder="example@example.com"
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
              label="Address"
              placeholder="Address"
              keyboardType="number-pad"
              onChangeText={() => {}}
            />

            <Button style={styles.btn} text={'Continue'} onPress={onRegister} />
          </View>
        </KeyboardAwareScrollView>
      </AppContainer>
    </SafeAreaView>
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
