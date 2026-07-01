import React, {useRef} from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import {AssetsIcons, Colors} from '../../theme';
import {
  AppContainer,
  BackButton,
  ConfirmDeleteAccount,
  Icons,
  ImageView,
  Spacer,
  TextView,
} from '../../components';
import {useHelper, useNavigationHook, useUserInfo} from '../../hooks';
import {TouchableRipple} from 'react-native-paper';
import Fonts from '../../theme/Fonts';
import Popup from '../../components/core/Popup';
import {ConfirmDeleteAccountRef} from '../../components/dialoge/ConfirmDeleteAccount';
import {IconsType} from '../../components/core/Icons';

const UserSettings = () => {
  const {navigation} = useNavigationHook();
  const {onLogout} = useUserInfo();
  const {goToWhatsapp, rateApp, shareApp} = useHelper();
  const ref = useRef<ConfirmDeleteAccountRef>(null);
  return (
    <AppContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BackButton onBackPress={() => navigation.goBack()} />
        </View>

        <View style={{alignSelf: 'center'}}>
          {/* <ImageView
            uri={
              'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png'
            }
            style={styles.image}
          /> */}
          <View
            style={[
              styles.image,
              {alignItems: 'center', justifyContent: 'center'},
            ]}>
            <Icons
              type={IconsType.AntDesign}
              name="user"
              size={50}
              color={Colors.Gray}
            />
          </View>
          <Spacer height={8} />

          <View style={styles.usernameContainer}>
            <TextView type="h5" position="center">
              {global?.userInfo?.name ? global?.userInfo?.name : 'Guest'}
            </TextView>
            <Spacer height={5} />

            {global?.userInfo?.phone && (
              <>
                <TextView type="h7" noBold={true} position="center">
                  {global?.userInfo?.phone}
                </TextView>
                <Spacer height={7} />
              </>
            )}

            <View
              style={{
                backgroundColor: Colors.PrimaryColor,
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TextView type="h7" noBold={true} color={Colors.White}>
                Basic User
              </TextView>
            </View>
          </View>
        </View>

        <Spacer height={20} />

        <View style={{marginHorizontal: 10}}>
          <TextView type="h5" style={{marginLeft: 10}}>
            Settings
          </TextView>

          <ListItem
            icon={AssetsIcons.support}
            label={'Contact Support'}
            onPress={() =>
              goToWhatsapp('+923203033680', 'Hello! I need assistance.')
            }
          />
          <ListItem
            icon={AssetsIcons.privacyPolicy}
            label={'Privacy Policy'}
            onPress={() => navigation.navigate('PrivacyPolicy')}
          />
          {global?.userInfo && (
            <ListItem
              icon={AssetsIcons.delete}
              label={'Deactivate Account'}
              onPress={() => ref?.current?.onShowConfirmDeletePopup()}
            />
          )}

          <ListItem
            icon={AssetsIcons.logout}
            label={global.userInfo ? 'Sign out' : 'Login/Register'}
            onPress={() => {
              if (global.userInfo) {
                onLogout();
              } else {
                navigation.navigate('Login');
              }
            }}
          />
        </View>

        {/* <ListItem
        icon={AssetsIcons.rating}
        label={'Rate this app on play store'}
        onPress={rateApp}
      /> */}
        {/* <ListItem
        icon={AssetsIcons.share}
        label={'Share with your friends'}
        onPress={shareApp}
      /> */}

        <ConfirmDeleteAccount ref={ref} />
      </SafeAreaView>
    </AppContainer>
  );
};

export default UserSettings;

type ListItemType = {
  icon: number;
  label: string;
  onPress?: () => void;
};

const ListItem = ({icon, label, onPress}: ListItemType) => {
  return (
    <TouchableRipple
      rippleColor="rgba(0, 0, 0, .05)"
      style={[
        styles.itemContainer,
        label == 'Sign out' && {borderBottomWidth: 0},
      ]}
      onPress={onPress}>
      <>
        <View
          style={{
            backgroundColor: Colors.PrimaryColorLight,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30 / 2,
          }}>
          <ImageView uri={icon} style={[styles.icon]} />
        </View>
        <TextView type="h6" style={[styles.txtLabel, {flex: 1}]}>
          {label}
        </TextView>

        <Icons
          size={25}
          type={IconsType.MaterialIcons}
          name="keyboard-arrow-right"
          color={Colors.PrimaryColor}
        />
      </>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},

  image: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 80 / 2,
    borderWidth: 0.3,
    borderColor: Colors.PrimaryColor,
  },

  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },

  itemContainer: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.light,

    backgroundColor: Colors.White,
    marginHorizontal: 10,

    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginTop: 8,
  },

  txtBasicUser: {color: Colors.LightestGray},
  txtLabel: {
    marginLeft: 10,
    fontFamily: Platform.OS == 'ios' ? Fonts.thin : Fonts.light,
    fontWeight: Platform.OS == 'ios' ? '400' : undefined,
  },
  usernameContainer: {},
});
