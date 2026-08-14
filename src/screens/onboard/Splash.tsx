import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {AssetsIcons, Colors} from '../../theme';
import {AppContainer, AppStatusBar, TextView} from '../../components';
import {useNavigationHook, useUserInfo} from '../../hooks';

const Splash = () => {
  const {navigation} = useNavigationHook();
  const {getUserData} = useUserInfo();
  useEffect(() => {
    (async () => {
      const isUserFound = await getUserData();
      if (isUserFound) {
        if (isUserFound && !isUserFound.data?.is_account_verified) {
          navigation.replace('Register');
          return;
        }
        navigation.replace('HomeTabs');
      } else {
        setTimeout(() => {
          navigation.replace('Onboarding');
        }, 2000);
      }
    })();
  }, []);

  return (
    <View style={styles.bg}>
      <AppStatusBar bgColor={Colors.Splash} barStyle={'light-content'} />
      <ImageBackground
        source={AssetsIcons.splash}
        style={{height: '100%', width: '100%'}}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.Splash,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.White,
  },
});
