import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {
  AppContainer,
  Button,
  EditText,
  Header,
  TextView,
} from '../../components';
import {Colors} from '../../theme';
import {useSendMessage} from '../../hooks';
import moment from 'moment';

const SendMessage = () => {
  const {
    form: {handleSubmit, handleChange, errors, touched, setFieldValue, values},
    goBackWithAlert,
  } = useSendMessage();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppContainer>
          <Header onBackPress={goBackWithAlert} title={'Send Message'} />

          <View style={styles.content}>
            <TextView style={styles.text}>
              Hi, Please fill this form with your details.
            </TextView>
            <EditText
              label="Full Name*"
              placeholder="Enter Full Name"
              style={{marginHorizontal: 0, marginTop: 20}}
              inputStyle={{marginHorizontal: 0}}
              value={values.name}
              onChangeText={handleChange('name')}
              errorMessage={errors?.name && touched.name ? errors.name : ''}
              errorTextStyle={styles.errorTextStyle}
            />
            <EditText
              label="Mobile Number*"
              placeholder="+92308xxxxxxx"
              style={{marginHorizontal: 0, marginTop: 5}}
              editable={false}
              input={styles.phoneInput}
              inputStyle={{marginHorizontal: 0, paddingHorizontal: 0.5}}
              onChangeText={handleChange('phone')}
              errorMessage={errors?.phone && touched.phone ? errors.phone : ''}
              errorTextStyle={styles.errorTextStyle}
              value={values.phone}
            />
            <EditText
              label="Email Address"
              placeholder="Enter Email Address"
              style={{marginHorizontal: 0, marginTop: 5}}
              inputStyle={{marginHorizontal: 0}}
              onChangeText={handleChange('email')}
              errorMessage={errors?.email && touched.email ? errors.email : ''}
              errorTextStyle={styles.errorTextStyle}
              value={values.email}
            />
            <EditText
              label="Event Date*"
              placeholder="Select Event Date"
              pointerEvent={'none'}
              style={{marginHorizontal: 0, marginTop: 5}}
              inputStyle={{marginHorizontal: 0}}
              editable={false}
              type="calender"
              onChangeText={date =>
                setFieldValue('date', moment(date).format('YYYY-MM-DD'))
              }
              errorMessage={errors?.date && touched.date ? errors.date : ''}
              errorTextStyle={styles.errorTextStyle}
              value={values.date}
            />
            <EditText
              multiline={true}
              placeholder="Details about my event*"
              style={{marginHorizontal: 0, marginTop: 5}}
              inputStyle={{
                marginHorizontal: 0,
                height: 100,
                paddingTop: 7,
                textVerticalAlign: 'top',
              }}
              input={{textAlignVertical: 'top'}}
              onChangeText={handleChange('details')}
              errorMessage={
                errors?.details && touched.details ? errors.details : ''
              }
              errorTextStyle={styles.errorTextStyle}
              value={values.details}
            />
          </View>
        </AppContainer>
      </ScrollView>

      <Button text={'Send Message'} style={styles.btn} onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default SendMessage;

const styles = StyleSheet.create({
  btn: {marginHorizontal: 20, marginBottom: 5},
  text: {
    marginTop: 10,
  },
  content: {
    marginHorizontal: 20,
  },

  container: {flex: 1, backgroundColor: Colors.White},
  body: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  des: {
    color: Colors.Gray,
    marginTop: 2,
  },
  location: {
    color: Colors.Gray,
    marginTop: 5,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 8,
  },
  review: {
    marginLeft: 3,
  },

  line: {
    height: 5,
    backgroundColor: Colors.Halfwit,
    marginLeft: -20,
    marginVertical: 15,
  },

  errorTextStyle: {
    marginRight: 0,
  },
  phoneInput: {
    backgroundColor: Colors.DisabledInput,
    paddingLeft: 10,
    borderRadius: 4,
  },
});
