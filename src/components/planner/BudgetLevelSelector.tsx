import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

const OPTIONS = ['Premium', 'Standard', 'Budget Friendly'];

export default function BudgetLevelSelector({value, onChange}) {
  return (
    <View style={styles.container}>
      {OPTIONS.map(option => {
        const isSelected = value === option;

        return (
          <Pressable
            key={option}
            style={styles.row}
            activeOpacity={0.8}
            onPress={() => onChange(option)}>
            <View
              style={[styles.outerCircle, isSelected && styles.outerSelected]}>
              {isSelected && <View style={styles.innerCircle} />}
            </View>

            <Text style={[styles.label, isSelected && styles.labelSelected]}>
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  outerCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#CFCFCF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  outerSelected: {
    borderColor: '#E91E63', // your pink
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#E91E63',
  },
  label: {
    fontSize: 15,
    color: '#444',
  },
  labelSelected: {
    fontWeight: '600',
    color: '#E91E63',
  },
});
