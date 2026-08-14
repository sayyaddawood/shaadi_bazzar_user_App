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

import {
  Home,
  Planner,
  Vendors,
  Inspirations,
  TodoList,
  UserSettings,
  Budget,
} from '../screens';
import {Colors, Dimen, AssetsIcons} from '../theme';
import {TextView} from '../components';
import Fonts from '../theme/Fonts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
                height: Dimen.width * 0.15,
              },
            }),
          },
        ],
      })}>
      <Tab.Screen name="Vendors" component={Vendors} />
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen
        name="Settings"
        component={UserSettings}
      /> */}
      <Tab.Screen name="Planner" component={PlannerStack} />
      {/* <Tab.Screen name="Todo List" component={TodoList} /> */}
    </Tab.Navigator>
  );
};

const getTabIcon = (name: string, focused: boolean) => {
  const tabs: any = {
    Home: (
      <View style={styles.halfCircle}>
        <TabIcon
          id={'Explore'}
          icon={AssetsIcons.explore}
          imageStyle={{width: 40, height: 40, marginTop: 10}}
          isFocused={focused}
          textStyle={{marginTop: 5}}
        />
      </View>
    ),
    Vendors: (
      <TabIcon id={name} icon={AssetsIcons.category} isFocused={focused} />
    ),
    Settings: <TabIcon id={name} icon={AssetsIcons.user} isFocused={focused} />,
    Planner: <TabIcon id={name} icon={AssetsIcons.ideas} isFocused={focused} />,
    'Todo List': (
      <TabIcon id={name} icon={AssetsIcons.packages} isFocused={focused} />
    ),
  };

  return tabs[name];
};

export default BottomTabs;

const PlannerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Planner" component={Planner} />
      <Tab.Screen name="Budget" component={Budget} />
    </Stack.Navigator>
  );
};

type TabIconProps = {
  id?: string;
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

      {id && (
        <TextView
          style={[
            styles.tabIconText,
            {color: isFocused ? Colors.PrimaryColor : '#95a5a6'},
            textStyle,
          ]}>
          {id}
        </TextView>
      )}
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

    shadowColor: '#000',
    marginTop: -50,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.84,
    elevation: 5,
  },

  tabIcon: {
    width: Dimen.width / 17.5,
    height: Dimen.width / 17.5,
    resizeMode: 'contain',
  },

  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 10 : 5,
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

  badgeRibbonCircle: {
    width: 100,
    height: 100,
    marginTop: 0,
    backgroundColor: Colors.White,
    borderRadius: 100 / 2,
    borderWidth: 0.5,
    borderColor: '#eee',
  },

  halfCircle: {
    width: 80,
    height: 40, // Half of the circle's diameter
    backgroundColor: 'white',
    borderTopLeftRadius: 90 / 2,
    borderTopRightRadius: 90 / 2,
    marginTop: -45,

    borderTopWidth: 1,
    borderColor: Colors.Halfwit,
  },
});
