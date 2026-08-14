import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  AppContainer,
  AppStatusBar,
  BtnSelect,
  Button,
  EditText,
  Header,
  PlannerServices,
  PriceView,
  TextView,
} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../../theme';
import {IconsType} from '../../../components/core/Icons';
import Toast from 'react-native-toast-message';
import moment from 'moment';
import usePlannerState from '../../../hooks/usePlannerState';
import useBudgetPlannerStore from '../../../store/useBudgetPlanner';

const Planner = () => {
  const {
    budget,
    cityItem,
    areaItem,
    date,
    guest,
    navigation,
    isPending,
    setGuest,
    setDate,
    setBudget,
    setCityItem,
    setAreaItem,
    onPlannerFindVendors,
  } = usePlannerState();

  const onSelectCity = () => {
    navigation.navigate('Cities', {
      flag: 'city',
      onSelect: item => {
        setCityItem(item);
        setAreaItem([{label: 'Select area', value: ''}]);
      },
    });
  };

  const onSelectArea = () => {
    if (cityItem.value == '') {
      Toast.show({
        type: 'error',
        text1: 'Please select your city',
        position: 'bottom',
      });
      return;
    }

    navigation.navigate('Cities', {
      flag: 'area',
      cityId: cityItem?.value,
      onSelect: item => {
        setAreaItem(item);
      },
    });
  };

  const onFindVendors = () => {
    const selectedCategories =
      useBudgetPlannerStore.getState().selectedCategories;

    const errorMessage = !cityItem?.value
      ? 'Please select city'
      : areaItem[0]?.value?.toString()?.startsWith('Select') ||
        areaItem[0]?.value == ''
      ? 'Please select area'
      : date == 'Select date'
      ? 'Please select wedding date'
      : guest === ''
      ? 'Please enter number of guests'
      : selectedCategories.length == 0
      ? 'Please select service you looking for'
      : null;

    if (errorMessage) {
      Toast.show({
        type: 'error',
        text1: errorMessage,
        position: 'bottom',
      });
      return;
    }

    onPlannerFindVendors({
      areas: areaItem?.map(it => Number(it.value)),
      location: Number(cityItem?.value),
      wedding_date: date,
      number_of_guests: Number(guest),
      categories: Object.values(
        useBudgetPlannerStore?.getState()?.selectedCategories,
      ).map(item => ({id: item?.cId, tier: item?.tier})),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppContainer>
        <AppStatusBar />
        <Header title={'Planner'} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.content}>
          <View style={styles.body}>
            <>
              <PriceView {...{budget, setBudget}} />

              <EditText
                onChangeText={value => setGuest(value)}
                style={{marginHorizontal: 0}}
                keyboardType="number-pad"
                focusable={false}
                value={guest}
                placeholder="Number of guest"
                inputStyle={styles.input}
              />

              <BtnSelect
                icon="calendar-outline"
                text={date}
                onPress={date => setDate(moment(date).format('DD MMMM YYYY'))}
              />

              <View style={styles.row}>
                <BtnSelect
                  icon="city-variant-outline"
                  text={cityItem?.label}
                  iconType={IconsType.MaterialCommunityIcons}
                  onPress={onSelectCity}
                />
                <BtnSelect
                  iconType={IconsType.Entypo}
                  icon="location"
                  text={
                    areaItem?.length > 0 &&
                    areaItem?.map(
                      (it, i) => `${i >= 1 ? ', ' : ''} ${it?.label}`,
                    )
                  }
                  onPress={onSelectArea}
                />
              </View>

              <TextView type="h5" style={{marginTop: 20}}>
                Services you looking for
              </TextView>
            </>

            <View style={[styles.row, styles.categories]}>
              <PlannerServices />
            </View>

            <Button
              onPress={onFindVendors}
              style={[styles.btn]}
              disabled={isPending}
              isLoading={isPending}
              text={'Find vendors'}
              type="fill"
            />
          </View>
        </ScrollView>
      </AppContainer>
    </SafeAreaView>
  );
};

export default Planner;

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.White, flex: 1},
  content: {paddingBottom: 80},
  body: {
    paddingHorizontal: 20,
  },
  budgetView: {
    backgroundColor: Colors.White,
    padding: 15,

    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txtAmount: {
    color: Colors.PrimaryColor,
    paddingVertical: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  txt: {
    marginLeft: 10,
  },
  list: {
    marginTop: 15,
  },
  wedding: {flex: undefined, marginTop: 15},
  input: {
    marginHorizontal: 0,
    borderColor: Colors.GrayShade,
    backgroundColor: Colors.White,
    borderRadius: 10,
    borderWidth: 1,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
    marginTop: 15,
  },
  btn: {
    marginTop: 15,
    marginHorizontal: 0,
    // position: 'absolute',
    // bottom: 10,
    // left: 25,
    // right: 25,
    height: 40,
  },
  categories: {
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: 'space-between',
  },
});
