import React from 'react';
import {Spacer, TextView} from '../core';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../theme';
import Line from '../Line';

const PriceInfo = ({info}: {info: Package[]}) => {
  return (
    <>
      <TextView position="left" type="h5">
        Pricing Info
      </TextView>

      <Spacer height={10} />

      {info?.map(it => {
        return (
          <View style={styles.container}>
            <View style={styles.subContainer}>
              <TextView position="left" type="h7" style={styles.location}>
                {it.name}
              </TextView>
              <TextView position="left" type="h7" style={styles.location}>
                RS {it.price}
              </TextView>
            </View>

            <View style={[styles.subContainer, {alignItems: 'flex-start'}]}>
              <TextView position="left" type="h8" style={[styles.location]}>
                Booking Price
              </TextView>
              <TextView position="left" type="h8" style={styles.location}>
                RS {it.booking_price}
              </TextView>
            </View>

            <TextView
              position="left"
              type="h8"
              style={[styles.location, {flex: 1}]}>
              Details: {it.details}
            </TextView>

            <View style={styles.dashed}>
              <View style={styles.dashedLines} />
            </View>
          </View>
        );
      })}

      <Line style={[styles.line, {marginTop: 25}]} />
    </>
  );
};

export default PriceInfo;

const styles = StyleSheet.create({
  location: {
    color: Colors.Gray,
    marginTop: 5,
  },
  line: {
    height: 5,
    backgroundColor: Colors.Halfwit,
    marginLeft: -20,
    marginVertical: 15,
  },
  container: {
    marginTop: 5,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dashed: {height: 1, overflow: 'hidden', marginTop: 10},
  dashedLines: {
    height: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
  },
});
