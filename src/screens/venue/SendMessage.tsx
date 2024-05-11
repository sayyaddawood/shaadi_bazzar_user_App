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
import {useNavigationHook} from '../../hooks';

const SendMessage = () => {
  
    const navigation = useNavigationHook();

  const onBackPress = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppContainer>
          <Header onBackPress={onBackPress} title={'Send Message'} />

          <View style={styles.content}>
            <TextView style={styles.text}>Hi FlipOn Media</TextView>
            <EditText
              label="Full Name*"
              placeholder="Enter Full Name"
              style={{marginHorizontal: 0, marginTop: 15}}
              inputStyle={{marginHorizontal: 0}}
              onChangeText={() => {}}
            />
            <EditText
              label="Mobile Number*"
              placeholder="+92308xxxxxxx"
              style={{marginHorizontal: 0, marginTop: 5}}
              inputStyle={{marginHorizontal: 0}}
              onChangeText={() => {}}
            />
            <EditText
              label="Email Address*"
              placeholder="Enter Email Address"
              style={{marginHorizontal: 0, marginTop: 5}}
              inputStyle={{marginHorizontal: 0}}
              onChangeText={() => {}}
            />
            <EditText
              label="Event Date*"
              placeholder="Select Event Date"
              style={{marginHorizontal: 0, marginTop: 5}}
              inputStyle={{marginHorizontal: 0}}
              onChangeText={() => {}}
            />
            <EditText
              multiline={true}
              placeholder="Details about my event*"
              style={{marginHorizontal: 0, marginTop: 5}}
              inputStyle={{marginHorizontal: 0, height: 100, paddingTop: 7}}
              onChangeText={() => {}}
            />
          </View>
        </AppContainer>
      </ScrollView>

      <Button
        text={'Send Message'}
        style={styles.btn}
        onPress={() => alert('Message Sent successfully')}
      />
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
});
