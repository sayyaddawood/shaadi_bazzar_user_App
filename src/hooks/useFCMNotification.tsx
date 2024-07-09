import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const useFCMNotification = () => {
  useEffect(() => {
    // Request permission for notifications
    requestUserPermission();

    // Get FCM token
    getFcmToken();

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
      // Display notification or perform background task
    });

    // Handle background and quit state notifications
    const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    // Handle quit state notifications
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    // Handle foreground notifications
    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', remoteMessage);
    });

    return () => {
      unsubscribe();
      unsubscribeOnMessage();
    };
  }, []);

  // Request user permission for notifications
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  // Get the FCM token
  const getFcmToken = async () => {
    const token = await messaging().getToken();
    if (token) {
      console.log('FCM Token:', token);
      await AsyncStorage.setItem('@fcmToken', token);
    } else {
      console.log('Failed to get FCM token');
    }
  };

  return {
    getFcmToken,
  };
};

export default useFCMNotification;
