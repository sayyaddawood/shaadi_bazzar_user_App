import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Header, ImageView, SearchVenueItem, TextView} from '../../components';
import {Colors} from '../../theme';
import {useNavigationHook, useRouteHook} from '../../hooks';
import useVendor from '../../hooks/useVendor';

const Search = () => {
  const navigation = useNavigationHook();
  const {id} = useRouteHook({screenName: 'Search'}).params;
  const [search, setSearch] = useState('');
  const onBackPress = () => navigation.goBack();

  const {searchedList, searchLoading} = useVendor({
    id,
    fetchSearch: true,
    searchText: search,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={onBackPress} title={'Search'} />

      <SearchVenueItem {...{search, setSearch}} />

      {/* <SuggestionItem /> */}

      <FlatList
        data={searchedList}
        renderItem={({item}) => {
          return <SearchItem {...{item}} />;
        }}
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 20}}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Search;

const SearchItem = ({item}: {item: VendorSearchResult}) => {
  return (
    <View style={styles.itemContainer}>
      <ImageView
        uri={item?.vendorMedia[0].path}
        type="ONLINE"
        resizeMode="cover"
        style={styles.searchItem}
      />
      <View style={styles.row}>
        <TextView numberOfLines={2} type="h6">
          {item?.business_name}
        </TextView>
        <TextView type="h7" color={Colors.Gray} style={{marginTop: 3}}>
          {item?.address.full_address}
        </TextView>
      </View>
    </View>
  );
};

const SuggestionItem = () => {
  const suggestion = [
    'Banquet in Karachi',
    'Banquet in Hyderabad',
    'Air Condition Banquet',
    'Galaxy Banquet',
    'Normal range',
    'Medium range',
    'Gathering 300+',
    'Gathering 600+',
  ];

  return (
    <View style={styles.suggestionMainContainer}>
      {suggestion?.map(it => {
        return (
          <View style={styles.suggestContainer}>
            <TextView type="h8">{it}</TextView>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},
  line: {
    height: 5,
    backgroundColor: Colors.Halfwit,
    marginTop: 12,
    marginBottom: 15,
  },

  searchItem: {
    width: 75,
    height: 60,
    borderRadius: 5,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  row: {
    marginLeft: 10,
    flex: 1,
  },

  suggestContainer: {
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: Colors.DarkGray,
    height: 25,
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginTop: 10,
    marginRight: 5,
  },

  suggestionMainContainer: {
    flexDirection: 'row',
    marginLeft: 25,
    flexWrap: 'wrap',
    marginTop: -5,
  },
});
