import React, {useRef, useState} from 'react';
import PlannerServiceItem from './PlannerServiceItem';
import BudgetLevelPopup, {
  BudgetLevelPopupRef,
} from '../dialoge/BudgetLevelPopup';
import useVendor from '../../hooks/useVendor';
import useBudgetPlannerStore from '../../store/useBudgetPlanner';

const PlannerServices = () => {
  const budgetPopupRef = useRef<BudgetLevelPopupRef>(null);
  const {categories: list} = useVendor({fetchCategory: true});
  const [cId, setCId] = useState(-1);

  const selectedCategories = useBudgetPlannerStore(
    state => state.selectedCategories,
  );

  const categories =
    list?.length > 0
      ? list?.length % 3 == 0
        ? list
        : [...list, {lastItem: true}]
      : [];

  return (
    <>
      {categories?.map(item => {
        const selected = selectedCategories?.[item?.id]?.cId == item?.id;
        let icon;
        if (selected) {
          icon = selectedCategories?.[item?.id]?.tier;
        }
        return (
          <PlannerServiceItem
            item={item}
            isCategorySelected={selected}
            selectedCategoryIcon={icon}
            onPress={() => {
              setCId(item?.id);
              budgetPopupRef.current?.onShowPopup();
            }}
          />
        );
      })}

      <BudgetLevelPopup cId={cId} ref={budgetPopupRef} />
    </>
  );
};

export default PlannerServices;
