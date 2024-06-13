import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Album, Header} from '../../../components';
import {Colors} from '../../../theme';
import {useNavigationHook} from '../../../hooks';

const ViewAllAlbums = () => {
  const navigation = useNavigationHook();

  const onBackPress = () => navigation.goBack();
  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={onBackPress} title={'Albums'} />

        <Album {...{isViewAll: true}} />
    </SafeAreaView>
  );
};

export default ViewAllAlbums;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},
});
