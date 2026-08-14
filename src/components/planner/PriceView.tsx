import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../theme';
import {TextView} from '../core';
import Slider from '@react-native-community/slider';
import useBudgetPlannerStore from '../../store/useBudgetPlanner';

const STEP = 5000;

type PriceViewType = {
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
};

const PriceView = ({budget, setBudget}: PriceViewType) => {
  const MAX = useBudgetPlannerStore.getState()?.maxBudget || 5000000;
  const MIN = useBudgetPlannerStore.getState()?.minBudget || 0;

  return (
    <View style={styles.PriceView}>
      <TextView type="h6" noBold={true}>
        Your Budget
      </TextView>
      <TextView type="h2" style={styles.txtAmount}>
        Rs {Number(budget).toLocaleString()}
      </TextView>
      <Slider
        minimumValue={MIN}
        maximumValue={MAX}
        step={STEP}
        value={budget}
        onValueChange={setBudget}
        minimumTrackTintColor="#E91E63"
        maximumTrackTintColor="#E0E0E0"
        thumbTintColor={Colors.PrimaryColor}
      />

      <TextView type="h7" noBold={true} color={Colors.Gray}>
        You can change this anytime
      </TextView>
    </View>
  );
};

export default PriceView;

const styles = StyleSheet.create({
  PriceView: {
    borderColor: Colors.PrimaryColor,
    borderWidth: 0.2,
    marginTop: 10,
    backgroundColor: Colors.White,
    padding: 12,

    borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  txtAmount: {
    color: Colors.PrimaryColor,
    paddingVertical: 4,
  },
});
