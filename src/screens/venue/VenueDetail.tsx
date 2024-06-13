import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  AppContainer,
  Header,
  ImageSlider,
  PrimaryInfo,
  PriceInfo,
  Reviews,
  Album,
} from '../../components';
import {Colors} from '../../theme';
import {useNavigationHook, useRouteHook} from '../../hooks';
import {FlatList} from 'react-native';
import useVendor from '../../hooks/useVendor';

const VenueDetail = () => {
  const navigation = useNavigationHook();
  const {id} = useRouteHook({screenName: 'VenueDetail'}).params;
  const {data, imagesList} = useVendor({id, fetchDetail: true});

  const onBackPress = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[1]}
        showsVerticalScrollIndicator={false}
        renderItem={({}) => {
          return (
            <>
              <AppContainer>
                <Header
                  onBackPress={onBackPress}
                  title={'Venues in Hyderabad'}
                />
                {imagesList.length > 0 && <ImageSlider images={imagesList} />}

                <View style={styles.body}>
                  {data?.vendorDetails && (
                    <PrimaryInfo info={data?.vendorDetails} />
                  )}
                  {data?.packages && <PriceInfo info={data?.packages} />}
                  <Album {...{id}} />

                  <Reviews
                    id={id}
                    onWriteAReviewPress={() =>
                      navigation.navigate('WriteReview', {
                        title: data?.vendorDetails.business_name || 'Vendor',
                      })
                    }
                  />
                </View>
              </AppContainer>
            </>
          );
        }}
      />
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
