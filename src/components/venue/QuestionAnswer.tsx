import React, {useMemo, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Icons, TextView} from '../core';
import {Colors} from '../../theme';
import {QuestionType} from '../../models/VendorDetailsType';
import {IconsType} from '../core/Icons';

const QuestionAnswer = ({questions = []}: QuestionType) => {
  const [viewMore, setViewMore] = useState(false);

  const filterQuestions = useMemo(() => {
    return questions?.filter(itm => itm.vendorsAnswers?.length > 0);
  }, [questions]);

  if (filterQuestions?.length == 0) return;

  const questArr = viewMore
    ? filterQuestions
    : filterQuestions.filter((_, indx) => indx < 3);

  return (
    <View>
      <TextView position="left" type="h5" style={styles.heading}>
        Frequently Asked Questions
      </TextView>

      {questArr?.map(it => {
        return (
          <View style={styles.item}>
            <TextView position="left" type="h7">
              {it?.question}
            </TextView>
            <TextView position="left" type="h7" style={styles.txtItemAns}>              
              {it?.vendorsAnswers[0]?.answers}
            </TextView>
          </View>
        );
      })}

      {questArr?.length > 3 && (
        <View style={styles.row}>
          <Pressable
            style={styles.viewMoreBtn}
            onPress={() => setViewMore(!viewMore)}>
            <TextView position="left" type="h6" color={Colors.PrimaryColor}>
              {viewMore ? 'View Less' : 'View More'}
            </TextView>
            <Icons
              name={viewMore ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              type={IconsType.MaterialIcons}
              color={Colors.PrimaryColor}
              size={20}
              style={{marginTop: 2, marginLeft: -2}}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default QuestionAnswer;

const styles = StyleSheet.create({
  heading: {
    marginBottom: 15,
  },
  item: {
    borderRadius: 7,
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
  },
  txtItemAns: {
    marginTop: 7,
    color: Colors.LightestGray,
  },
  viewMoreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.PrimaryColor,
  },
  row: {flexDirection: 'row'},
});
