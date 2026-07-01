import React from 'react';
import Toast from 'react-native-toast-message';
import {create} from 'zustand';

const useBudgetPlannerStore = create<any>(set => ({
  minBudget: 0,
  maxBudget: 0,
  totalBudget: 0,
  totalSpent: 0,
  remainingBudget: 0,
  selectedVendors: [],
  selectedCategories: [],
  guest: 0,

  onSelectVendor: (vId: string, priceNumber: number, category: string) =>
    set(state => {
      const vendors = {...state.selectedVendors};
      if (vendors[category]?.vId === vId) {
        delete vendors[category];
      } else {
        const previousPrice = vendors[category]?.priceNumber || 0;

        const currentSpent = Object.values(vendors).reduce(
          (sum, v) => sum + v.priceNumber,
          0,
        );
        console.log("🚀 ~ currentSpent:", currentSpent)
        console.log("🚀 ~ previousPrice:", previousPrice)
        console.log("🚀 ~ priceNumber:", priceNumber)

        const newSpent = currentSpent - previousPrice + priceNumber;

        // prevent negative budget
        if (newSpent > state.totalBudget) {
          Toast.show({
            type: 'info',
            text1: 'Please increase your budget to add this vendor',
            position: 'bottom',
          });
          return state; 
        }

        vendors[category] = {vId, priceNumber};
      }

      const spent = Object.values(vendors).reduce(
        (sum, v) => sum + v.priceNumber,
        0,
      );

      return {
        selectedVendors: vendors,
        totalSpent: spent,
        remainingBudget: state.totalBudget - Number(spent),
      };
    }),

  setBudgetAmount: (value: number, guest: number) =>
    set({totalBudget: value, remainingBudget: value, guest: guest}),

  onSelectCategory: (cId: string, tier: string, icon: number) =>
    set(state => {
      const categories = {...state.selectedCategories};
      categories[cId] = {cId, tier, icon};

      return {selectedCategories: categories};
    }),

  onSetMaxBudgetAmount: (value: number, minBudget: number) =>
    set({minBudget: minBudget, maxBudget: value}),

  onResetPlanner: () =>
    set({
      totalSpent: 0,
      remainingBudget: 0,
      selectedVendors: [],
      selectedCategories: [],
      guest: 0,
    }),
}));

export default useBudgetPlannerStore;
