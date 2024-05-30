import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {Header, Line, SearchVenueItem, VenueItem} from '../../components';
import {Colors} from '../../theme';
import {useNavigationHook} from '../../hooks';

const VenueCategoriesList = () => {
  const navigation = useNavigationHook();

  const onBackPress = () => navigation.goBack();

  const items = [
    'https://i.pinimg.com/564x/67/a9/03/67a903b932db6a326308e70a66c7e93b.jpg',
    'https://i.pinimg.com/564x/4f/96/d1/4f96d1769c0d96bae46f3b4371ccf0ef.jpg',
    'https://i.pinimg.com/564x/ae/34/f8/ae34f8e89d05d28e6287b3deac4bf59e.jpg',
    'https://i.pinimg.com/564x/67/a9/03/67a903b932db6a326308e70a66c7e93b.jpg',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={onBackPress} title={'Photographers'} />

      <FlatList
        data={items}
        renderItem={({item}) => {
          return <VenueItem {...{item}} />;
        }}
        ListHeaderComponent={<SearchVenueItem />}
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
