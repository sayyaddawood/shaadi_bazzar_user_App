import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Album, Header} from '../../../components';
import {Colors} from '../../../theme';
import {useNavigationHook, useRouteHook} from '../../../hooks';

const ViewAllAlbums = () => {
  const {navigation} = useNavigationHook();
  const {id} = useRouteHook({screenName: 'ViewAllAlbums'}).params;

  const onBackPress = () => navigation.goBack();
  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={onBackPress} title={'Albums'} />

      <Album {...{id, isViewAll: true}} />
    </SafeAreaView>
  );
};

export default ViewAllAlbums;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},
});
