import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  AppContainer,
  AppStatusBar,
  BudgetView,
  Header,
  VenuesListing,
} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../../theme';
import {useRouteHook} from '../../../hooks';

const Budget = () => {
  const {data} = useRouteHook({screenName: 'Budget'}).params;

  return (
    <SafeAreaView style={styles.container}>
      <AppContainer>
        <AppStatusBar />
        <Header title={'Budget Builder'} />
        <View style={styles.content}>
          <BudgetView />

          {data && (
            <ScrollView
              contentContainerStyle={{paddingBottom: 250}}
              showsVerticalScrollIndicator={false}>
              {data?.map(it => {
                return (
                  <VenuesListing
                    title={it?.category?.name}
                    data={it.vendors}
                    budgetSelect={true}
                  />
                );
              })}
            </ScrollView>
          )}
        </View>
      </AppContainer>
    </SafeAreaView>
  );
};

export default Budget;

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.White, flex: 1},
  content: {paddingBottom: 50},
});
