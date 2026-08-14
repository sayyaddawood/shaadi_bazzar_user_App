import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {
  AppContainer,
  AppStatusBar,
  Categories,
  HomeHeader,
  Loader,
  NoView,
  VenuesListing,
} from '../../components';
import {useHome} from '../../hooks';
import {Colors, Dimen} from '../../theme';

const Home = () => {
  const {
    isLoading,
    data,
    noData,
    isRefetching = false,
    onSelectedCity,
    refetch,
  } = useHome();

  return (
    <SafeAreaView style={styles.container}>
      <AppContainer>
        <AppStatusBar />
        <HomeHeader onSelectedCity={c => onSelectedCity(c)} />

        {isLoading ? (
          <Loader area={25} loaderSize={8} />
        ) : (
          <FlatList
            data={[1]}
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
            style={{zIndex: 1}}
            onRefresh={() => refetch()}
            refreshing={isRefetching}
            renderItem={({}) => {
              return (
                <>
                  <Categories />

                  {noData ? (
                    <NoView style={styles.noData} />
                  ) : (
                    data?.map(it => {
                      return (
                        <VenuesListing
                          title={it?.categoryName}
                          data={it.vendors}
                        />
                      );
                    })
                  )}
                </>
              );
            }}
          />
        )}
      </AppContainer>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.White, flex: 1, },
  scrollView: {paddingBottom: 110,},
  noData: {marginTop: Dimen.height / 7},
});
