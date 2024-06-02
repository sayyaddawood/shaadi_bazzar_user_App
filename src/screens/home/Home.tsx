import React from 'react';
import {FlatList, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {
  AppContainer,
  AppStatusBar,
  Categories,
  HomeHeader,
  VenuesListing,
} from '../../components';
import {useNavigationHook} from '../../hooks';
import {Colors} from '../../theme';

const Home = () => {
  const navigation = useNavigationHook();
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
                <VenuesListing type={'venue'} />
                <VenuesListing type={'photographer'} />
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
