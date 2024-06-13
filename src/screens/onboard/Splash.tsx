import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';
import {AppContainer, AppStatusBar, TextView} from '../../components';
import {useNavigationHook, useUserInfo} from '../../hooks';

const Splash = () => {
  const navigation = useNavigationHook();
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
    <AppContainer style={styles.bg}>
      <AppStatusBar bgColor={Colors.PrimaryColor} barStyle={'light-content'} />

      <TextView type="h1" style={styles.text}>
        Shadi Bazaar
      </TextView>
    </AppContainer>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.White,
  },
});
