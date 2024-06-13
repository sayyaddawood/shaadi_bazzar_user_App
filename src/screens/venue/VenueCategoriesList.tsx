import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {Header, Line, SearchVenueItem, VenueItem} from '../../components';
import {Colors} from '../../theme';
import {useNavigationHook, useRouteHook} from '../../hooks';

const VenueCategoriesList = () => {
  const navigation = useNavigationHook();
  const {title, list: items} = useRouteHook({
    screenName: 'VenueCategoriesList',
  }).params;

  const onBackPress = () => navigation.goBack();

  const onSearchPress = () => {
    navigation.navigate('Search', {id: '-1'}); // TODO: remove this id when api bugs fixed.
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={onBackPress} title={title} />

      <FlatList
        data={items}
        renderItem={({item}) => {
          return <VenueItem {...{item}} />;
        }}
        ListHeaderComponent={
          <SearchVenueItem editable={false} onPress={onSearchPress} />
        }
        showsVerticalScrollIndicator={false}
        style={{marginTop: 15}}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={<Line style={styles.line} />}
      />
    </SafeAreaView>
  );
};

export default VenueCategoriesList;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},
  line: {
    height: 5,
    backgroundColor: Colors.Halfwit,
    marginTop: 12,
    marginBottom: 15,
  },
});
