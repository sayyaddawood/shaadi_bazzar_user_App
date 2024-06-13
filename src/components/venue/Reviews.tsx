import React, {memo} from 'react';
import {Icons, Spacer, TextView} from '../core';
import {FlatList, StyleSheet, View} from 'react-native';
import {Colors} from '../../theme';
import Line from '../Line';
import {IconsType} from '../core/Icons';
import Fonts from '../../theme/Fonts';
import useVendor from '../../hooks/useVendor';
import moment from 'moment';

type ReviewsType = {
  onWriteAReviewPress: () => void;
  id: string;
};

const Reviews = ({id, onWriteAReviewPress}: ReviewsType) => {
  const {reviewsData, reviewsLoading} = useVendor({id, fetchReviews: true});

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
          {reviewsData?.combinedReviews?.averageScore?.toFixed(1)} Review Score{' '}
          <TextView type="h7" style={styles.des}>
            ({reviewsData?.combinedReviews?.count} Reviews)
          </TextView>
        </TextView>
      </View>

      <Spacer height={10} />

      <Line style={[styles.line, {marginTop: 5}]} />

      <FlatList
        data={reviewsData?.reviews ?? []}
        renderItem={({item, index}) => {
          return <ReviewsItem {...{item, index}} />;
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </>
  );
};

export default memo(Reviews);

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

type ReviewItem = {
  item: Review;
  index: number;
};

const ReviewsItem = ({item, index}: ReviewItem) => {
  return (
    <View key={index} style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextView position="left" type="h7" style={{marginRight: 5}}>
          {item.user.name}
        </TextView>

        <Icons
          type={IconsType.FontAwesome}
          name={'star'}
          size={13}
          color={Colors.PrimaryColor}
        />
        <TextView position="left" type="h7" style={styles.ratingText}>
          {item.rating}
        </TextView>
      </View>
      <TextView
        position="left"
        type="h8"
        color={Colors.Gray}
        style={{fontFamily: Fonts.light, marginTop: 2}}>
        Reviewed {moment(item.createdAt).fromNow()}
      </TextView>

      <Spacer height={10} />

      <TextView
        position="left"
        type="h7"
        color={Colors.Gray}
        style={{fontFamily: Fonts.light, marginTop: 2}}>
        {item.feedback}
      </TextView>

      <Line style={[styles.line, {marginTop: 5}]} />
    </View>
  );
};
