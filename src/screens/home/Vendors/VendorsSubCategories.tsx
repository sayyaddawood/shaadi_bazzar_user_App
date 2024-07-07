import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  AppContainer,
  AppStatusBar,
  Header,
  Line,
  Loader,
  NoView,
  TextView,
  VenueItem,
} from '../../../components';
import {Colors, Dimen} from '../../../theme';
import useVendor from '../../../hooks/useVendor';
import {useNavigationHook, useRouteHook} from '../../../hooks';

const VendorsSubCategories = () => {
  const {goBack} = useNavigationHook();
  const {children: subCategoriesLabel, title} = useRouteHook({
    screenName: 'VendorsSubCategories',
  }).params;
  const [selectedCategory, setSlectedCategory] = useState(
    subCategoriesLabel[0]?.id?.toString(),
  );

  const {subCategories, isSubCatLoading} = useVendor({
    id: selectedCategory,
    fetchSubCategory: true,
  });

  console.log(!isSubCatLoading && subCategories.length == 0)

  return (
    <SafeAreaView style={styles.container}>
      <AppContainer>
        <AppStatusBar />
        <Header onBackPress={goBack} title={title} />

        <VendorCategories
          {...{
            subCategoriesLabel,
            selectedCategory,
            onPress: (id: string) => setSlectedCategory(id),
          }}
        />

        {isSubCatLoading ? (
          <Loader />
        ) : !isSubCatLoading && subCategories.length == 0 ? (
          <NoView />
        ) : (
          <FlatList
            data={subCategories}
            renderItem={({item}) => {
              return <VenueItem {...{item}} />;
            }}
            showsVerticalScrollIndicator={false}
            style={{marginTop: 15}}
            keyExtractor={(_, index) => index.toString()}
            ItemSeparatorComponent={<Line style={styles.line} />}
          />
        )}
      </AppContainer>
    </SafeAreaView>
  );
};

export default VendorsSubCategories;

const VendorCategories = ({
  subCategoriesLabel,
  selectedCategory,
  onPress,
}: {
  subCategoriesLabel: VendorCategoryChild[];
  selectedCategory: string;
  onPress: (id: string) => void;
}) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginLeft: 20, marginTop: 10}}>
        {subCategoriesLabel?.map((it, index) => {
          const isSelected = selectedCategory == it.id.toString();
          return (
            <Pressable
              key={index}
              style={{
                borderWidth: 0.5,
                borderRadius: 20,
                marginRight: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderColor: Colors.PrimaryColor,
                backgroundColor: isSelected
                  ? Colors.PrimaryColor
                  : Colors.White,
              }}
              onPress={() => onPress(it.id.toString())}>
              <TextView
                type="h6"
                color={isSelected ? Colors.White : Colors.PrimaryColor}>
                {it.name}
              </TextView>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.White, flex: 1},
  scrollView: {paddingBottom: 70},

  line: {
    height: 5,
    backgroundColor: Colors.Halfwit,
    marginTop: 12,
    marginBottom: 15,
  },

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
    width: Dimen.width / 2 - 20,
    height: Dimen.height / 5.5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 10,
  },

  title: {marginLeft: 10, marginTop: 5},
});
