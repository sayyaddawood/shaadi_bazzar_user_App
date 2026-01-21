import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  AppContainer,
  AppStatusBar,
  Button,
  ImageView,
  Loader,
  TextView,
} from '../../components';
import {AssetsIcons, Colors, Dimen} from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../theme/Fonts';
import {useNavigationHook, useUserInfo} from '../../hooks';
import {getGuestToken} from '../../network/serverRequests';

const Data = [
  {
    title:
      'Find & contact venues, photographers, makeup artists & other vendors in your budget',
    image: AssetsIcons.pic1,
  },
  {
    title:
      'Access over 200,000 reviews from newly wed couples to help you hire your Wedding team.',
    image: AssetsIcons.pic2,
  },
  {
    title: 'Make digital wedding invites to share with your guests.',
    image: AssetsIcons.pic3,
  },
];

const Onboarding = () => {
  const {navigation} = useNavigationHook();
  const {onSaveGuestToken} = useUserInfo();
  const [guestLoading, setGuestLoading] = useState(false);

  const onSignInPress = () => navigation.replace('Login');

  const onPressGuestLogin = async () => {
    setGuestLoading(true);
    const result = await getGuestToken();
    setGuestLoading(false);
    if (result?.token) {
      global.selectedLocId = '1';
      onSaveGuestToken(result?.token);
      navigation.replace('HomeTabs');
    }
  };

  return (
    <View style={{flex: 1}}>
      <AppStatusBar hidden />
      <FlatList
        data={Data}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={Dimen.width}
        snapToAlignment="start"
        decelerationRate={'fast'}
        renderItem={({item}) => {
          return (
            <View style={{flex: 1}}>
              <ImageView
                uri={item?.image}
                resizeMode="cover"
                style={styles.image}
              />

              <LinearGradient
                colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)']}
                start={{x: 0, y: 1}} // Bottom
                end={{x: 0, y: 0}} // Top
                style={styles.gradient}
              />

              <View style={[styles.descriptionView, {bottom: 150}]}>
                <TextView type="h5" position="center" style={styles.title}>
                  {item.title}
                </TextView>
              </View>
            </View>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />

      <View style={styles.descriptionView}>
        <Button
          onPress={onSignInPress}
          style={{marginTop: 20}}
          text={'Sign In/Register'}
        />
        {guestLoading ? (
          <View style={styles.txtContinue}>
            <Loader color={Colors.White} />
          </View>
        ) : (
          <TextView
            type="h6"
            position="center"
            color={Colors.White}
            style={styles.txtContinue}
            onPress={onPressGuestLogin}>
            Continue as Guest
          </TextView>
        )}
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  image: {
    height: Dimen.height,
    width: Dimen.width,
    resizeMode: 'cover',
  },
  gradient: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    marginHorizontal: 10,
    color: Colors.White,
    fontFamily: Fonts.regular,
    letterSpacing: 1,
    lineHeight: 25,
  },

  descriptionView: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
  },

  txtContinue: {
    marginTop: 15,
  },
});
