import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AppContainer,
  Button,
  Header,
  Icons,
  Line,
  TextView,
} from '../../../components';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {Colors} from '../../../theme';
import {useNavigationHook, useRouteHook} from '../../../hooks';
import useCities from '../../../hooks/useCities';
import {IconsType} from '../../../components/core/Icons';

const Cities = () => {
  const {goBack} = useNavigationHook();
  const {flag, cityId, onSelect} = useRouteHook({screenName: 'Cities'}).params;
  const {cities, areas} = useCities({locationId: Number(cityId)});

  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const toggleSelection = (item: any) => {
    console.log('🚀 ~ toggleSelection ~ item:', item);
    const alreadySelected = selectedItems.find(i => i.value === item.value);

    if (alreadySelected) {
      setSelectedItems(prev => prev.filter(i => i.value !== item.value));
    } else {
      setSelectedItems(prev => [...prev, item]);
    }
  };

  const isCity = flag == 'city';
  const data = isCity ? cities : areas;
  const isSelected = (item: any) =>
    selectedItems.some(i => i.value === item.value);

  return (
    <SafeAreaView style={styles.container}>
      <AppContainer>
        <Header onBackPress={goBack} title={`Select your ${flag}`} />

        {data && (
          <FlatList
            data={data}
            style={{marginTop: 10}}
            renderItem={({item, index}) => {
              const selected = isSelected(item);
              return (
                <Pressable
                  style={({pressed}) => [
                    {opacity: pressed ? 0.7 : 1},
                    styles.itemCon,
                    index == data?.length - 1 && {borderWidth: 0},
                  ]}
                  onPress={() => {
                    if (isCity) {
                      // single select
                      onSelect(item);
                      goBack();
                    } else {
                      // multi select
                      toggleSelection(item);
                    }
                  }}>
                  <Icons
                    type={
                      isCity
                        ? IconsType.MaterialCommunityIcons
                        : IconsType.Ionicons
                    }
                    name={
                      isCity
                        ? 'city-variant-outline'
                        : selected
                        ? 'checkbox'
                        : 'square-outline'
                    }
                    size={22}
                    color={Colors.PrimaryColor}
                  />

                  <TextView style={styles.txt}>{item.label}</TextView>
                </Pressable>
              );
            }}
          />
        )}

        {/* Show confirm button only for multi select */}
        {!isCity && selectedItems.length > 0 && (
          <Button
            onPress={() => {
              onSelect(selectedItems);
              goBack();
            }}
            style={styles.btn}
            text={'Continue'}
          />
        )}
      </AppContainer>
    </SafeAreaView>
  );
};

export default Cities;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},
  header: {
    backgroundColor: '#fff',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  itemCon: {
    paddingHorizontal: 20,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.LightGray,
  },
  txt: {
    marginLeft: 8,
  },
  btn: {
    marginHorizontal: 0,
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
  },
});
