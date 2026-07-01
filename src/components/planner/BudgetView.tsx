import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../theme';
import {Button, Icons, TextView} from '../core';
import {IconsType} from '../core/Icons';
import useBudgetPlannerStore from '../../store/useBudgetPlanner';
import {useNavigationHook, useRouteHook} from '../../hooks';

const BudgetView = () => {
  const totalBudget = useBudgetPlannerStore(state => state.totalBudget);
  const totalSpent = useBudgetPlannerStore(state => state.totalSpent);
  const remainingBudget = useBudgetPlannerStore(state => state.remainingBudget);
  const onResetPlanner = useBudgetPlannerStore(state => state.onResetPlanner);
  const {city, date, guest} = useRouteHook({screenName: 'Budget'}).params;
  const progress = (totalSpent / totalBudget) * 100;
  const {goBack} = useNavigationHook();

  const onFindAgainVendors = () => {
    onResetPlanner()
    goBack()
  }

  return (
    <View style={styles.con}>
      <View style={styles.BudgetView}>
        <View style={styles.price}>
          <TextView type="h7" noBold={true}>
            Remaining Budget
          </TextView>
          <TextView type="h5" style={styles.txtAmount}>
            Rs {Number(remainingBudget).toLocaleString()}
          </TextView>
          <View>
            <View style={styles.progress} />
            <View
              style={[
                styles.progressFill,
                {
                  backgroundColor: Colors.PrimaryColor,
                  width: progress,
                },
              ]}
            />
          </View>

          <View style={styles.row}>
            <TextView type="h8" noBold={true}>
              Rs {Number(totalSpent).toLocaleString()} /{' '}
            </TextView>
            <TextView type="h8" noBold={true}>
              Rs {Number(totalBudget).toLocaleString()}
            </TextView>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.price}>
          <Item
            icon={'people'}
            iconType={IconsType.Octicons}
            text={Number(`${guest}`).toLocaleString()}
          />
          <Item
            icon={'calendar-outline'}
            iconType={IconsType.Ionicons}
            text={`${date}`}
          />
          <Item
            icon={'city-variant-outline'}
            iconType={IconsType.MaterialCommunityIcons}
            text={`${city}`}
          />
        </View>
      </View>

      <Button
        onPress={onFindAgainVendors}
        style={styles.findVendor}
        text={'Find vendors again'}
        textStyle={{textTransform: 'capitalize'}}
        type="fill"
      />
    </View>
  );
};

export default memo(BudgetView);

const Item = ({
  icon,
  iconType,
  text,
}: {
  icon: string;
  iconType: IconsType;
  text: string;
}) => {
  return (
    <View
      style={[
        styles.shadow,
        icon == 'city-variant-outline' && {marginBottom: 0},
      ]}>
      <Icons
        type={iconType}
        name={icon}
        size={16}
        color={Colors.PrimaryColor}
      />
      <TextView
        type="h7"
        numberOfLines={1}
        noBold={true}
        style={{marginLeft: 5}}>
        {text}
      </TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    marginBottom: 10,
    marginHorizontal: 20,

    padding: 12,

    marginTop: 10,
    backgroundColor: Colors.White,

    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  price: {flex: 0.47},

  row: {
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },

  BudgetView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtAmount: {
    color: Colors.PrimaryColor,
    paddingVertical: 4,
  },
  shadow: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,

    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    paddingLeft: 10,
    paddingRight: 20,

    paddingVertical: 3,
  },
  progress: {
    marginTop: 5,
    backgroundColor: Colors.light,
    height: 5,
    width: '100%',
    borderRadius: 10,
  },
  progressFill: {
    marginTop: 5,
    height: 5,
    borderRadius: 10,
    position: 'absolute',
  },
  line: {
    borderRightWidth: 1,
    borderRightColor: Colors.light,
    width: 2,
    height: '100%',
  },
  findVendor: {marginHorizontal: 0, height: 35, marginTop: 10},
});
