import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors, Dimen} from '../../theme';
import {
  AppContainer,
  AppStatusBar,
  Button,
  DropDownPicker,
  EditText,
  Icons,
  Spacer,
  TextView,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRegister} from '../../hooks';
import {IconButton} from 'react-native-paper';
import {IconsType} from '../../components/core/Icons';

const Register = () => {
  const {
    ref,
    cities,
    form: {handleSubmit, handleChange, errors, touched, setFieldValue},
    onLogout,
  } = useRegister();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.White}}>
      <AppContainer>
        <AppStatusBar />

        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}>
          <View style={styles.content}>
            <TextView type="h3" position="center">
              Your Information
            </TextView>
            <Spacer height={30} />
            <EditText
              label="Name"
              reference={ref}
              placeholder="Enter your full name"
              style={{marginHorizontal: 0}}
              labelStyle={{marginHorizontal: 35}}
              onChangeText={handleChange('name')}
              errorMessage={errors?.name && touched.name ? errors.name : ''}
              errorTextStyle={{
                marginLeft: 40,
                marginHorizontal: 35,
              }}
            />
            <Spacer height={8} />
            {cities?.length > 0 && (
              <DropDownPicker
                options={cities}
                onChangeValue={value => setFieldValue('city', value)}
                errorMessage={errors?.city && touched.city ? errors.city : ''}
              />
            )}
            <Spacer height={5} />
            <Button
              style={styles.btn}
              text={'Continue'}
              onPress={handleSubmit}
            />
            <IconButton
              icon={() => (
                <Icons
                  type={IconsType.AntDesign}
                  name={'logout'}
                  size={20}
                  color={Colors.Black}
                />
              )}
              size={10}
              style={styles.logout}
              onPress={onLogout}
            />
          </View>
        </KeyboardAwareScrollView>
      </AppContainer>
    </SafeAreaView>
  );
};

export default Register;

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
    marginHorizontal: 35,
  },

  icon: {
    height: 40,
    width: 40,
  },
  logout: {position: 'absolute', top: -5, right: 15},
});
