import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {Colors} from '../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {AppContainer, Header} from '../../components';
import {useNavigationHook} from '../../hooks';

const CheckAvailability = () => {
  const navigation = useNavigationHook();
  const [currentMonth, setCurrentMonth] = useState(new Date().toString());

  const onBackPress = () => navigation.goBack();

  //   const getMarkedDates = () => {
  //     let markedDates = {};

  //     const currentDate = new Date(currentMonth);
  //     const startOfMonth = new Date(
  //       currentDate.getFullYear(),
  //       currentDate.getMonth() - 30,
  //       1,
  //     );
  //     const endOfMonth = new Date(
  //       currentDate.getFullYear(),
  //       currentDate.getMonth() + 60,
  //       31,
  //     );

  //     for (
  //       let day = startOfMonth;
  //       day <= endOfMonth;
  //       day.setDate(day.getDate() + 1)
  //     ) {
  //       const dateString = day.toISOString().split('T')[0];

  //       let dateStyles = {
  //         selected: selectedDate === dateString,
  //         selectedColor: '#000',
  //         selectedTextColor: '#fff',
  //         customStyles: {
  //           container: {
  //             backgroundColor: '#fff',
  //           },
  //           text: {
  //             color: '#2d4150',
  //           },
  //         },
  //       };

  //       if (bookings[dateString]) {
  //         const [dayBooking, nightBooking] = bookings[dateString];
  //         if (dayBooking && nightBooking) {
  //           dateStyles.customStyles.container.backgroundColor = '#f60000';
  //           dateStyles.customStyles.text.color = 'white';
  //         } else if (dayBooking || nightBooking) {
  //           dateStyles.customStyles.container.backgroundColor = '#0096FF';
  //           dateStyles.customStyles.text.color = 'white';
  //         }
  //       }

  //       if (selectedDate === dateString) {
  //         dateStyles.customStyles.container.backgroundColor = '#000';
  //         dateStyles.customStyles.text.color = '#fff';
  //       }

  //       markedDates[dateString] = dateStyles;
  //     }

  //     return markedDates;
  //   };

  return (
    <SafeAreaView style={styles.container}>
      <AppContainer>
        <Header onBackPress={onBackPress} title={'Check Availability'} />

        <Calendar
          current={currentMonth}
          style={{
            height: 340,
          }}
          headerStyle={{
            backgroundColor: '#fff',
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
            paddingBottom: 10,
          }}
          theme={{
            arrowWidth: 10,
            arrowColor: '#000',
            monthTextColor: '#000',
            textSectionTitleColor: Colors.PrimaryColor,
            dayTextColor: '#000',
            textInactiveColor: 'eee',
            selectedDayBackgroundColor: '#000',
            selectedDayTextColor: '#fff',
            // 'stylesheet.calendar.header': {
            //   monthText: {
            //     color: '#000', // Month text color
            //     fontFamily: 'Lato-Black',
            //     fontWeight: 'bold', // Make the month bold
            //     fontSize: 18,
            //   },
            //   dayHeader: {
            //     color: '#000',
            //     fontFamily: 'Lato-Regular',
            //     fontWeight: '300',
            //     fontSize: 16,
            //   },
            // },
          }}
          hideExtraDays={true}
          //   markedDates={getMarkedDates()}
          //   markingType={'custom'}
        />
      </AppContainer>
    </SafeAreaView>
  );
};

export default CheckAvailability;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},
});
