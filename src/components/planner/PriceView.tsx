import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../../theme';
import Fonts, {FontScale} from '../../theme/Fonts';
import {TextView} from '../core';
import useBudgetPlannerStore from '../../store/useBudgetPlanner';

type PriceViewType = {
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
};

const DEFAULT_MAX = 5000000;

const formatAmount = (digits: string) =>
  digits === '' ? '' : Number(digits).toLocaleString('en-IN');

const PriceView = ({budget, setBudget}: PriceViewType) => {
  const maxBudget = useBudgetPlannerStore(state => state.maxBudget);
  const minBudget = useBudgetPlannerStore(state => state.minBudget);

  const MAX = maxBudget || DEFAULT_MAX;
  const MIN = minBudget || 0;

  const [text, setText] = useState(String(budget || ''));
  const [isFocused, setIsFocused] = useState(false);

  // Keep the field in sync when the budget is changed from outside.
  useEffect(() => {
    if (!isFocused) {
      setText(String(budget || ''));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budget]);

  const onChangeAmount = (value: string) => {
    let digits = value.replace(/[^0-9]/g, '').replace(/^0+(?=\d)/, '');

    if (digits !== '' && Number(digits) > MAX) {
      digits = String(MAX);
    }

    setText(digits);
    setBudget(digits === '' ? 0 : Number(digits));
  };

  const onBlur = () => {
    const amount = Math.min(Math.max(Number(text) || 0, MIN), MAX);
    setText(String(amount));
    setBudget(amount);
    setIsFocused(false);
  };

  return (
    <View style={styles.PriceView}>
      <TextView type="h6" noBold={true}>
        Your Budget
      </TextView>

      <View style={[styles.inputRow, isFocused && styles.inputRowFocused]}>
        <TextView type="h2" style={styles.currency}>
          Rs
        </TextView>
        <TextInput
          style={styles.input}
          value={formatAmount(text)}
          onChangeText={onChangeAmount}
          onFocus={() => setIsFocused(true)}
          onBlur={onBlur}
          keyboardType="number-pad"
          placeholder="0"
          placeholderTextColor={Colors.Gray}
          maxLength={15}
        />
      </View>

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
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.GrayShade,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inputRowFocused: {
    borderColor: Colors.PrimaryColor,
  },
  currency: {
    color: Colors.PrimaryColor,
    marginRight: 6,
  },
  input: {
    flex: 1,
    padding: 0,
    height: 45,
    color: Colors.PrimaryColor,
    fontFamily: Fonts.bold,
    fontSize: FontScale.large22,
  },
});
