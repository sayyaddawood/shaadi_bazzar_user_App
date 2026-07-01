import React from 'react';
import {StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Icons} from '../core';
import {IconsType} from '../core/Icons';
import {Colors} from '../../theme';
import useBudgetPlannerStore from '../../store/useBudgetPlanner';

const SelectBudgetItem = ({
  vId,
  price,
  category,
  isSelected,
}: {
  vId: string;
  price: number;
  category?: string;
  isSelected: boolean;
}) => {
  const onSelectVendor = useBudgetPlannerStore(state => state.onSelectVendor);

  return (
    <IconButton
      icon={() => (
        <Icons
          type={isSelected ? IconsType.Ionicons : IconsType.Entypo}
          name={isSelected ? 'bookmark' : 'plus'}
          size={13}
          color={Colors.White}
        />
      )}
      size={5}
      style={[
        styles.view,
        isSelected && {backgroundColor: Colors.GreenEmeRald},
      ]}
      onPress={() => onSelectVendor(vId, price, category)}
    />
  );
};

export default SelectBudgetItem;

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.PrimaryColor,
  },
});
