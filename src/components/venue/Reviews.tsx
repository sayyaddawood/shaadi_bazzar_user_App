import React from 'react';
import {Icons, Spacer, TextView} from '../core';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../theme';
import Line from '../Line';
import {IconsType} from '../core/Icons';
import Fonts from '../../theme/Fonts';

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

  const onWriteAReviewPress = () => {
    alert('Write a review');
  };

  return (
    <>
      <View style={styles.writeReview}>
        <View>
          <TextView position="left" type="h6">
            Reviews
          </TextView>

          <TextView position="left" type="h8" style={[styles.text]}>
            Updated on 9 May 2024
          </TextView>
        </View>
        <View style={styles.row}>
          <Icons
            type={IconsType.SimpleLineIcons}
            name={'note'}
            size={15}
            color={Colors.PrimaryColor}
          />
          <TextView
            position="left"
            type="h6"
            color={Colors.PrimaryColor}
            style={{marginLeft: 5}}
            onPress={onWriteAReviewPress}>
            Write a Review
          </TextView>
        </View>
      </View>

      <View style={styles.rating}>
        <Icons
          type={IconsType.FontAwesome}
          name={'star'}
          size={20}
          color={Colors.PrimaryColor}
        />
        <TextView position="left" type="h6" style={styles.ratingText}>
          5.0 Review Score{' '}
          <TextView type="h7" style={styles.des}>
            (13 Reviews)
          </TextView>
        </TextView>
      </View>

      <Spacer height={10} />

      <Line style={[styles.line, {marginTop: 5}]} />
      {Array(3)
        .fill('*')
        .map(it => {
          return <ReviewsItem />;
        })}
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
    height: 2,
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

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 8,
  },
  review: {
    marginLeft: 3,
    marginTop: 5,
  },

  des: {
    color: Colors.Gray,
    marginTop: 2,
  },

  writeReview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    color: Colors.Gray,
    marginTop: 3,
    fontFamily: Fonts.light,
  },

  ratingText: {
    marginLeft: 3,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const ReviewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextView position="left" type="h7" style={{marginRight: 5}}>
          Dawood Ali Khan
        </TextView>

        <Icons
          type={IconsType.FontAwesome}
          name={'star'}
          size={13}
          color={Colors.PrimaryColor}
        />
        <TextView position="left" type="h7" style={styles.ratingText}>
          5.0
        </TextView>
      </View>
      <TextView
        position="left"
        type="h8"
        color={Colors.Gray}
        style={{fontFamily: Fonts.light , marginTop: 2}}>
        Reviewed 5 months ago
      </TextView>

      <Spacer height={10} />

      <TextView
        position="left"
        type="h7"
        color={Colors.Gray}
        style={{fontFamily: Fonts.light, marginTop: 2}}>
        Lorem ipsum dolor sit amet lore mauris diam lore m curves diam lore m
        felis diam lorem
      </TextView>

      <Line style={[styles.line, {marginTop: 5}]} />
    </View>
  );
};
