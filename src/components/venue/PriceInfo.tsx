import React from 'react';
import {Spacer, TextView} from '../core';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../theme';
import Line from '../Line';

const PriceInfo = () => {
  const items = [
    {
      name: 'Photo Package',
      price: '20,000',
    },
    {
      name: 'Photo + Video',
      price: '30,000',
    },
    {
      name: 'Candid Photography',
      price: '15,000',
    },
    {
      name: 'Cinematography',
      price: '18,000',
    },
    {
      name: 'Studio Photography',
      price: '10,000',
    },
  ];
  return (
    <>
      <TextView position="left" type="h5">
        Pricing Info
      </TextView>

      <Spacer height={10} />

      {items?.map(it => {
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
