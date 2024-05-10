import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  View,
  Image,
  StyleSheet,
  StyleProp,
  ImageStyle,
  Platform,
} from 'react-native';

import {Home, Ideas, Vendors, Invites, Packages} from '../screens';
import {Colors, Dimen, AssetsIcons} from '../theme';
import {TextView} from '../components';
import Fonts from '../theme/Fonts';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => getTabIcon(route.name, focused),
        tabBarActiveTintColor: Colors.PrimaryColor,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          styles.tabBarStyle,
          {
            ...Platform.select({
              ios: {
                height: global.hasNotch
                  ? Dimen.width * 0.22
                  : Dimen.width * 0.21,
              },
              android: {
                height: Dimen.width * 0.17,
              },
            }),
          },
        ],
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Vendors" component={Vendors} />
      <Tab.Screen name="E-Invites" component={Invites} />
      <Tab.Screen name="Ideas" component={Ideas} />
      <Tab.Screen name="Packages" component={Packages} />
    </Tab.Navigator>
  );
};

const getTabIcon = (name: string, focused: boolean) => {
  const tabs: any = {
    Home: <TabIcon id={name} icon={AssetsIcons.home} isFocused={focused} />,
    Vendors: (
      <TabIcon id={name} icon={AssetsIcons.vendors} isFocused={focused} />
    ),
    'E-Invites': (
      <TabIcon id={name} icon={AssetsIcons.invites} isFocused={focused} />
    ),
    Ideas: <TabIcon id={name} icon={AssetsIcons.ideas} isFocused={focused} />,
    Packages: (
      <TabIcon id={name} icon={AssetsIcons.packages} isFocused={focused} />
    ),
  };

  return tabs[name];
};

export default BottomTabs;

type TabIconProps = {
  id: string;
  icon: any;
  isFocused: boolean;
  imageStyle?: StyleProp<ImageStyle>;
  textStyle?: any;
};

const TabIcon = ({
  id,
  icon,
  isFocused,
  imageStyle,
  textStyle,
}: TabIconProps) => {
  return (
    <View style={styles.tabIconContainer}>
      <Image
        source={icon}
        style={[
          styles.tabIcon,
          {tintColor: isFocused ? Colors.PrimaryColor : '#dfe6e9'},
          imageStyle,
        ]}
      />

      <TextView
        style={[
          styles.tabIconText,
          {color: isFocused ? Colors.PrimaryColor : '#95a5a6'},
          textStyle,
        ]}>
        {id}
      </TextView>
    </View>
  );
};

var styles = StyleSheet.create({
  tabBarStyle: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: 'absolute',
  },

  tabIcon: {
    width: Dimen.width / 17.5,
    height: Dimen.width / 17.5,
    resizeMode: 'contain',
  },

  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  tabIconText: {
    fontSize: 11,
    fontFamily: Fonts.regular,
    marginTop: Platform.OS == 'ios' ? 5 : 3,
  },
  cartIcon: {
    width: Dimen.width / 2,
    height: Dimen.width / 7,
    resizeMode: 'contain',
    marginTop: 10,
  },
});
