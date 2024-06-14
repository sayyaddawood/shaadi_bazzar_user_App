import React, {useMemo, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {Colors} from '../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {AppContainer, Header} from '../../components';
import {useNavigationHook, useRouteHook} from '../../hooks';
import moment from 'moment';

const CheckAvailability = () => {
  const {navigation} = useNavigationHook();
  const [currentMonth, setCurrentMonth] = useState(new Date().toString());
  const {dates} = useRouteHook({screenName: 'CheckAvailability'}).params;
  const markedDates = useMemo(() => {
    const d: any = {};
    dates.forEach(date => {
      if (date.day || date.night) {
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
  }, [dates]);

  const onBackPress = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <AppContainer>
        <Header onBackPress={onBackPress} title={'Check Availability'} />

        <Calendar
          current={currentMonth}
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
              alert('This date already booked.');
            }
          }}
          hideExtraDays={true}
          markingType={'custom'}
        />
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
});
