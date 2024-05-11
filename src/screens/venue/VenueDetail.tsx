import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {
  AppContainer,
  Header,
  ImageSlider,
  TextView,
  Line,
  Icons,
  Spacer,
  PrimaryInfo,
  PriceInfo,
  Reviews,
  Album,
} from '../../components';
import {Colors, Dimen} from '../../theme';
import {IconsType} from '../../components/core/Icons';
import {useNavigationHook} from '../../hooks';

const VenueDetail = () => {
  const navigation = useNavigationHook();

  const onBackPress = () => navigation.goBack();

  const items = [
    'https://i.pinimg.com/564x/67/a9/03/67a903b932db6a326308e70a66c7e93b.jpg',
    'https://i.pinimg.com/564x/4f/96/d1/4f96d1769c0d96bae46f3b4371ccf0ef.jpg',
    'https://i.pinimg.com/564x/ae/34/f8/ae34f8e89d05d28e6287b3deac4bf59e.jpg',
    'https://i.pinimg.com/564x/67/a9/03/67a903b932db6a326308e70a66c7e93b.jpg',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppContainer>
          <Header onBackPress={onBackPress} title={'Venues in Hyderabad'} />
          <ImageSlider images={items} />

          <View style={styles.body}>
            <PrimaryInfo />
            <PriceInfo />
            <Album {...{items}} />

            <Reviews />
          </View>
        </AppContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VenueDetail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.White},
  body: {
    marginHorizontal: 20,
    marginTop: 5,
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
