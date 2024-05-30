import React from 'react';
import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import {
  AppContainer,
  Button,
  EditText,
  Header,
  Rating,
  Spacer,
  TextView,
} from '../../components';
import {Colors} from '../../theme';
import {useNavigationHook} from '../../hooks';
import useRouteHook from '../../hooks/useRouteHook';

const WriteReview = () => {
  const navigation = useNavigationHook();
  const {title} = useRouteHook({screenName: 'WriteReview'}).params;
  const onBackPress = () => {
    Alert.alert('Alert', 'Are you sure want to go back?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {text: 'Yes', onPress: () => navigation.goBack()},
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppContainer>
        <Header onBackPress={onBackPress} title={'Rate & Review Vendor'} />
        <View style={styles.body}>
          <TextView type="h5">Review: {title}</TextView>
          <Spacer height={30} />
          <TextView type="h6">Rate Vendor</TextView>
          <Rating
            value={3}
            size={20}
            containerStyle={{marginTop: 5}}
            style={{width: 30}}
            onChange={rating => {}}
          />
          <Spacer height={30} />
          <EditText
            multiline={true}
            placeholder="Write about your personal experience."
            label="Your Experience"
            style={{marginHorizontal: 0}}
            inputStyle={{marginHorizontal: 0, height: 100, paddingTop: 7}}
            max={500}
            onChangeText={() => {}}
          />
          <EditText
            label="Event Date*"
            placeholder="Select Event Date"
            pointerEvent={'none'}
            style={{marginHorizontal: 0, marginTop: 5}}
            inputStyle={{marginHorizontal: 0}}
            editable={false}
            type="calender"
            onChangeText={date => {}}
          />
          <Button
            onPress={() => {}}
            style={styles.btn}
            text={'Sign In/Register'}
          />
        </View>
      </AppContainer>
    </SafeAreaView>
  );
};

export default WriteReview;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},
  body: {
    marginHorizontal: 20,
    paddingTop: 15,
    flex: 1,
  },
  btn: {
    marginHorizontal: 0,
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
});
