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
  Loader,
  QuestionAnswer,
} from '../../components';
import {Colors} from '../../theme';
import {useNavigationHook, useRouteHook} from '../../hooks';
import {FlatList} from 'react-native';
import useVendor from '../../hooks/useVendor';
import Toast from 'react-native-toast-message';

const VenueDetail = () => {
  const {navigation, goBack} = useNavigationHook();
  const {id} = useRouteHook({screenName: 'VenueDetail'}).params;
  const {data, imagesList, isLoading} = useVendor({id, fetchDetail: true});

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader area={25} loaderSize={8} />
      ) : (
        <FlatList
          data={[1]}
          showsVerticalScrollIndicator={false}
          renderItem={({}) => {
            return (
              <>
                <AppContainer>
                  <Header onBackPress={goBack} title={'Venues in Hyderabad'} />

                  <>
                    {imagesList.length > 0 && (
                      <ImageSlider images={imagesList} />
                    )}

                    <View style={styles.body}>
                      {data?.vendorDetails && (
                        <PrimaryInfo
                          info={data?.vendorDetails}
                          onCalenderPress={() =>
                            navigation.navigate('CheckAvailability', {
                              dates: data.lockedDates,
                            })
                          }
                          onMessagePress={() => {
                            if (!global.userInfo) {
                              Toast.show({
                                type: 'info',
                                text1: 'Sign in required',
                                position: 'bottom',
                                text2: 'Tap to continue',
                                onPress: () =>
                                  navigation.navigate('Onboarding'),
                              });
                              return;
                            }

                            navigation.navigate('SendMessage', {
                              vendorPhone: data?.vendorDetails.business_phone,
                              venueId: data?.vendorDetails?.id?.toString(),
                            });
                          }}
                        />
                      )}
                      {data?.packages && <PriceInfo info={data?.packages} />}
                      <Album {...{id}} />

                      <Reviews
                        id={id}
                        onWriteAReviewPress={() =>
                          navigation.navigate('WriteReview', {
                            title:
                              data?.vendorDetails.business_name || 'Vendor',
                            vendorId: Number(data?.vendorDetails.id),
                          })
                        }
                      />
                      <QuestionAnswer questions={data?.questions} />
                    </View>
                  </>
                </AppContainer>
              </>
            );
          }}
        />
      )}
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
