import React, {useMemo, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {Colors} from '../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Switch} from 'react-native';
import {AppContainer, Header, TextView} from '../../components';
import {useNavigationHook, useRouteHook} from '../../hooks';
import moment from 'moment';
import Toast from 'react-native-toast-message';
import {View} from 'react-native';

const CheckAvailability = () => {
  const {navigation} = useNavigationHook();
  const {dates} = useRouteHook({screenName: 'CheckAvailability'}).params;

  const onBackPress = () => navigation.goBack();

  const [booked, setBooked] = useState({partially: true, completely: false});

  const markedDates = useMemo(() => {
    const d: any = {};
    dates.forEach(date => {
      if (date.day && booked.partially) {
        dates.forEach(date => {
          const formattedDate = moment(date.date).format('yyyy-MM-DD');
          d[formattedDate] = {
            selected: true,
            selectedColor: Colors.PrimaryColor,
          };
        });
      } else if (date.night && booked.completely) {
        dates.forEach(date => {
          const formattedDate = moment(date.date).format('yyyy-MM-DD');
          d[formattedDate] = {
            selected: true,
            selectedColor: Colors.PrimaryColor,
          };
        });
      }
    });
    return d;
  }, [dates, booked.completely, booked.partially]);

  return (
    <SafeAreaView style={styles.container}>
      <AppContainer>
        <Header onBackPress={onBackPress} title={'Check Availability'} />

        <Calendar
          current={new Date().toString()}
          minDate={new Date().toDateString()}
          headerStyle={styles.header}
          theme={{
            arrowWidth: 10,
            arrowColor: '#000',
            monthTextColor: '#000',
            textSectionTitleColor: Colors.PrimaryColor,
            dayTextColor: '#000',
            textInactiveColor: 'eee',
            selectedDayBackgroundColor: '#000',
            selectedDayTextColor: '#fff',
          }}
          markedDates={markedDates}
          onDayPress={day => {
            if (markedDates.hasOwnProperty(day.dateString)) {
              Toast.show({
                type: 'error',
                text1: 'This date already booked.',
                position: 'bottom',
              });
            }
          }}
          hideExtraDays={true}
          markingType={'custom'}
        />

        <View style={styles.row}>
          <TextView type="h6">Partially Booked</TextView>
          <Switch
            value={booked.partially}
            onChange={() => setBooked({completely: false, partially: true})}
            trackColor={{true: Colors.PrimaryColor}}
            thumbColor={Colors.White}
          />
        </View>
        <View style={styles.row}>
          <TextView type="h6">Completely Booked</TextView>
          <Switch
            value={booked.completely}
            onChange={() => setBooked({completely: true, partially: false})}
            trackColor={{true: Colors.PrimaryColor}}
            thumbColor={Colors.White}
          />
        </View>
      </AppContainer>
    </SafeAreaView>
  );
};

export default CheckAvailability;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},
  header: {
    backgroundColor: '#fff',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
