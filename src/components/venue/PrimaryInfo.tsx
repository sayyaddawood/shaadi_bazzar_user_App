import React from 'react';
import {Icons, TextView} from '../core';
import {Platform, StyleSheet, View} from 'react-native';
import {Colors} from '../../theme';
import {IconsType} from '../core/Icons';
import Line from '../Line';
import {IconButton} from 'react-native-paper';

const PrimaryInfo = ({
  info,
  onCalenderPress,
  onMessagePress,
}: {
  info: VendorDetails;
  onCalenderPress: () => void;
  onMessagePress: () => void;
}) => {
  return (
    <>
      <View style={styles.row}>
        <TextView position="left" type="h5">
          {info.business_name}
        </TextView>

        <View style={styles.rowMessage}>
          <IconButton
            icon={() => (
              <Icons
                type={IconsType.Ionicons}
                name={'calendar-outline'}
                size={18}
                color={Colors.White}
              />
            )}
            size={15}
            style={{marginRight: 0, backgroundColor: Colors.PrimaryColor}}
            onPress={onCalenderPress}
          />
          <IconButton
            icon={() => (
              <Icons
                type={IconsType.Fontisto}
                name={'whatsapp'}
                size={18}
                color={Colors.White}
              />
            )}
            size={15}
            style={{backgroundColor: 'green', padding: 3}}
            onPress={onMessagePress}
          />
        </View>
      </View>

      <TextView position="left" type="h8" style={styles.des}>
        ({info.address.full_address})
      </TextView>
      <TextView position="left" type="h7" style={styles.location}>
        {info.address.location.name}
      </TextView>

      {/* <View style={styles.rating}>
        <Icons
          type={IconsType.FontAwesome}
          name={'star'}
          size={20}
          color={Colors.PrimaryColor}
        />
        <TextView position="left" type="h6" style={styles.review}>
          5.0 Review Score{' '}
          <TextView type="h7" style={styles.des}>
            (13 Reviews)
          </TextView>
        </TextView>
      </View> */}

      {/* <Line style={{marginLeft: -20, marginVertical: 10}} /> */}

      {/* <TextView position="left" type="h8" style={styles.location}>
        Photo + Video
      </TextView> */}

      {/* <TextView position="left" type="h5" style={{marginTop: 3}}>
        50,000{' '}
        <TextView position="left" type="h8" style={styles.des}>
          per day
        </TextView>
      </TextView> */}

      <Line style={styles.line} />
    </>
  );
};

export default PrimaryInfo;

const styles = StyleSheet.create({
  des: {
    color: Colors.Gray,
    marginTop: Platform.OS == 'ios' ? -5 : -2,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: -10,
  },
});
