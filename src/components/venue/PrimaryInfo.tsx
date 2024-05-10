import React from 'react';
import {Icons, TextView} from '../core';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../theme';
import {IconsType} from '../core/Icons';
import Line from '../Line';

const PrimaryInfo = () => {
  return (
    <>
      <TextView position="left" type="h5">
        Sari Banquet Convention & Lawns
      </TextView>
      <TextView position="left" type="h8" style={styles.des}>
        (Formerly known as Sari banquet convention & lawns)
      </TextView>
      <TextView position="left" type="h7" style={styles.location}>
        Latifabad, Hyderabad
      </TextView>

      <View style={styles.rating}>
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
      </View>

      <Line style={{marginLeft: -20, marginVertical: 10}} />

      <TextView position="left" type="h8" style={styles.location}>
        Photo + Video
      </TextView>

      <TextView position="left" type="h5" style={{marginTop: 3}}>
        50,000{' '}
        <TextView position="left" type="h8" style={styles.des}>
          per day
        </TextView>
      </TextView>

      <Line style={styles.line} />
    </>
  );
};

export default PrimaryInfo;

const styles = StyleSheet.create({
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
