import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {AssetsIcons, Colors} from '../../theme';
import {BackButton, ImageView, Spacer, TextView} from '../../components';
import {useNavigationHook, useUserInfo} from '../../hooks';
import {TouchableRipple} from 'react-native-paper';

const UserSettings = () => {
  const navigation = useNavigationHook();
  const {getUserData, onLogout} = useUserInfo();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton onBackPress={() => navigation.goBack()} />
        <ImageView
          uri={
            'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png'
          }
          style={styles.image}
        />
        <View style={styles.usernameContainer}>
          <TextView>{global.userInfo.user_name}</TextView>
          <TextView type="h8" style={styles.txtBasicUser}>
            Basic User
          </TextView>
        </View>
      </View>

      <Spacer height={20} />

      <ListItem icon={AssetsIcons.information} label={'Information'} />
      <ListItem icon={AssetsIcons.support} label={'Contact Support'} />
      <ListItem
        icon={AssetsIcons.rating}
        label={'Rate this app on play store'}
      />
      <ListItem icon={AssetsIcons.share} label={'Share with your friends'} />
      <ListItem
        icon={AssetsIcons.logout}
        label={'Sign out'}
        onPress={onLogout}
      />
    </SafeAreaView>
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
        <ImageView uri={icon} style={styles.icon} />
        <TextView type="h6" style={styles.txtLabel}>
          {label}
        </TextView>
      </>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},

  image: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
    borderRadius: 45 / 2,
    borderWidth: 0.2,
    borderColor: Colors.Gray,
    marginLeft: 5,
  },

  icon: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },

  itemContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.light,
  },

  txtBasicUser: {color: Colors.LightestGray, marginTop: 2},
  txtLabel: {marginLeft: 10},
  usernameContainer: {marginLeft: 10},
});
