import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {
  AppContainer,
  AppStatusBar,
  Categories,
  HomeHeader,
  VenuesListing,
} from '../../components';
import {useHome} from '../../hooks';
import {Colors} from '../../theme';

const Home = () => {
  const {isLoading, data} = useHome();

  return (
    <SafeAreaView style={styles.container}>
      <AppContainer>
        <AppStatusBar />
        <HomeHeader />
        <FlatList
          data={[1]}
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
          renderItem={({}) => {
            return (
              <>
                <Categories />

                {data?.map(it => {
                  return (
                    <VenuesListing title={it?.categoryName} data={it.vendors} />
                  );
                })}
              </>
            );
          }}
        />
      </AppContainer>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.White, flex: 1},
  scrollView: {paddingBottom: 70},
});
