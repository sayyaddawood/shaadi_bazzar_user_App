import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {AppContainer, BackButton, Header} from '../../components';
import {Colors} from '../../theme';
import {useNavigationHook} from '../../hooks';
import WebView from 'react-native-webview';

const PrivacyPolicy = () => {
  const navigation = useNavigationHook();
  return (
    <AppContainer>
      <SafeAreaView style={styles.container}>
        <Header
          onBackPress={() => navigation.goBack()}
          title={'Privacy Policy'}
        />
        <WebView
          source={{uri: 'https://vendors.wedeasy.pk/privacy-policy.html'}}
        />
      </SafeAreaView>
    </AppContainer>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},
});
