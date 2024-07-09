import React from 'react';
import {
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {
  AppContainer,
  AppStatusBar,
  ImageView,
  TextView,
} from '../../../components';
import {Colors, Dimen} from '../../../theme';
import useVendor from '../../../hooks/useVendor';
import {useHelper, useNavigationHook} from '../../../hooks';
import Toast from 'react-native-toast-message';
import Fonts from '../../../theme/Fonts';

const Vendors = () => {
  const {categories} = useVendor({fetchCategory: true});
  const {navigation} = useNavigationHook();

  return (
    <SafeAreaView style={styles.container}>
      <AppContainer>
        <AppStatusBar />

        <FlatList
          data={categories}
          contentContainerStyle={[styles.contentContainer]}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <VendorCategory
                {...{
                  item,
                  onPress: () => {
                    if (item.children?.length == 0) {
                      Toast.show({
                        type: 'info',
                        text1: "Vendor hasn't uploaded sub category yet.",
                        position: 'bottom',
                      });
                      return;
                    }

                    navigation.navigate('VendorsSubCategories', {
                      children: categories[index].children || [],
                      title: item.name || '',
                    });
                  },
                }}
              />
            );
          }}
          numColumns={2}
          keyExtractor={(_, i) => i.toString()}
        />
      </AppContainer>
    </SafeAreaView>
  );
};

export default Vendors;

const VendorCategory = ({
  item,
  onPress,
}: {
  item: VendorCategory;
  onPress: () => void;
}) => {
  const {generateRandomColor} = useHelper();
  const cats = item?.children ? [...item?.children] : [];
  const subCat = cats?.length > 3 ? cats?.splice(0, 3) : cats || [];
  return (
    <Pressable
      style={[
        styles.categoryContainer,
        {
          backgroundColor: generateRandomColor,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
      ]}
      onPress={onPress}>
      <View style={styles.imageWrapper}>
        <ImageView
          style={styles.image}
          type="ONLINE"
          uri={
            'https://i.pinimg.com/564x/67/a9/03/67a903b932db6a326308e70a66c7e93b.jpg'
          }
          resizeMode="cover"
        />
      </View>

      <TextView
        position="left"
        type="h5"
        numberOfLines={2}
        style={styles.title}>
        {item?.name}
      </TextView>
      {subCat?.map(it => {
        return (
          <TextView type="h8" style={styles.subCategoriesTxt}>
            {it.name}
          </TextView>
        );
      })}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.White, flex: 1},
  scrollView: {paddingBottom: 70},
  contentContainer: {
    marginHorizontal: 20,
    paddingBottom: 100,
  },

  imageWrapper: {
    marginTop: -8,
    marginLeft: 8,
    width: 110,
    height: 110,
    borderTopRightRadius: 200,
    borderBottomRightRadius: 90,
    borderTopLeftRadius: 150,
    borderBottomLeftRadius: 150,
    transform: [{rotate: '-180deg'}],
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    transform: [{rotate: '180deg'}],
  },
  categoryContainer: {
    width:
      Platform.OS == 'ios' ? Dimen.width / 2 - 21.5 : Dimen.width / 2 - 22.5,
    height: Dimen.height / 4.7,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 10,
  },

  title: {marginLeft: 10, marginTop: 5, marginBottom: 3},

  columnWrapper: {
    justifyContent: 'space-between',
    marginTop: 10,
  },

  subCategoriesTxt: {
    marginLeft: 10,
    fontFamily: Fonts.thin,
    color: Colors.Black,
    fontWeight: '400',
  },
});
