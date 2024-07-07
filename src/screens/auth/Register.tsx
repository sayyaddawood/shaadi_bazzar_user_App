import React from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import {AssetsIcons, Colors, Dimen} from '../../theme';
import {
  AppContainer,
  AppStatusBar,
  Button,
  DropDownPicker,
  EditText,
  Icons,
  ImageView,
  Spacer,
  TextView,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRegister} from '../../hooks';
import {IconButton} from 'react-native-paper';
import {IconsType} from '../../components/core/Icons';
import {Image} from 'react-native';
import Fonts from '../../theme/Fonts';

const Register = () => {
  const {
    ref,
    cities,
    form: {handleSubmit, handleChange, errors, touched, setFieldValue},
    onLogout,
    isLoading,
  } = useRegister();

  return (
    <SafeAreaView style={styles.con}>
      <AppContainer>
        <AppStatusBar />

        <View style={styles.content}>
          <View style={styles.imageCon}>
            <Image source={AssetsIcons.explore} style={styles.imageLogo} />
            <View>
              <TextView type="h4" position="left">
                WedEasy
              </TextView>
            </View>
          </View>

          <View style={styles.welcomeCon}>
            <TextView type="h6" position="left">
              Hi! Welcome to WedEasy
            </TextView>

            <TextView
              type="h8"
              position="left"
              style={styles.completeProfileTxt}>
              Complete your profile
            </TextView>
          </View>

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

          {cities?.length > 0 && (
            <>
              <TextView style={styles.label}>City</TextView>
              <DropDownPicker
                options={cities}
                placeholder={'Select your city'}
                onChangeValue={value => setFieldValue('city', value)}
                errorMessage={errors?.city && touched.city ? errors.city : ''}
              />
            </>
          )}
          <Spacer height={5} />
        </View>

        <Button
          style={styles.btn}
          text={'Continue'}
          onPress={handleSubmit}
          isLoading={isLoading}
          loaderColor={Colors.White}
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
  content: {marginTop: 100},
  sendOtp: {
    fontWeight: 'normal',
    marginTop: 15,
  },
  receivedCode: {
    marginTop: 8,
    fontWeight: 'normal',
  },

  btn: {
    marginTop: 15,
    marginHorizontal: 35,
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
  },

  icon: {
    height: 40,
    width: 40,
  },
  logout: {position: 'absolute', top: -5, right: 15},
  label: {marginLeft: 35, marginBottom: 5},
  con: {flex: 1, backgroundColor: Colors.White},
  completeProfileTxt: {
    marginTop: 2,
    color: Colors.Gray,
    letterSpacing: -0.2,
    fontFamily: Platform.OS == 'ios' ? Fonts.thin : Fonts.light,
    fontWeight: Platform.OS == 'ios' ? '400' : undefined,
  },
  welcomeCon: {marginLeft: 35, marginBottom: 20},
  imageCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 35,
    marginBottom: 20,
  },
  imageLogo: {
    height: 30,
    width: 30,
    tintColor: Colors.PrimaryColor,
    marginRight: 5,
  },
});
