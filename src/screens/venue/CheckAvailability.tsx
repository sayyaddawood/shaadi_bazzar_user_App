import React, {useMemo} from 'react';
import {Calendar} from 'react-native-calendars';
import {Colors} from '../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {AppContainer, Header, Spacer, TextView} from '../../components';
import {useNavigationHook, useRouteHook} from '../../hooks';
import moment from 'moment';
import Toast from 'react-native-toast-message';
import {View} from 'react-native';

const bookingIndicators = [
  {
    text: 'Partially Booked',
    color: Colors.Blue,
  },
  {
    text: 'Completely Booked',
    color: Colors.PrimaryColor,
  },
];

const CheckAvailability = () => {
  const {navigation} = useNavigationHook();
  const {dates} = useRouteHook({screenName: 'CheckAvailability'}).params;
  const onBackPress = () => navigation.goBack();

  const markedDates = useMemo(() => {
    const d: any = {};
    dates?.forEach(date => {
      if (date.day) {
        dates.forEach(date => {
          const formattedDate = moment(date.date).format('yyyy-MM-DD');
          d[formattedDate] = {
            selected: true,
            marked: true,
            selectedColor: Colors.PrimaryColor,
          };
        });
      } else if (date.night) {
        dates.forEach(date => {
          const formattedDate = moment(date.date).format('yyyy-MM-DD');
          d[formattedDate] = {
            selected: true,
            marked: true,
            selectedColor: Colors.PrimaryColor,
          };
        });
      }
    });
    return d;
  }, [dates]);

  return (
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

        <Spacer height={15} />

        {bookingIndicators?.map(it => {
          return (
            <View style={styles.row1}>
              <View
                style={[
                  styles.indicator,
                  {
                    backgroundColor: it.color,
                  },
                ]}
              />
              <TextView type="h6">{it.text}</TextView>
            </View>
          );
        })}
      </AppContainer>
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

  row1: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 15,
    alignItems: 'center',
  },

  indicator: {
    width: 50,
    height: 20,
    marginRight: 5,
  },
});
