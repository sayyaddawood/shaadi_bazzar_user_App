import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Button, Icons, ImageView, Spacer, TextView} from '../core';
import Popup from '../core/Popup';
import {AssetsIcons, Colors} from '../../theme';
import {IconButton} from 'react-native-paper';
import {IconsType} from '../core/Icons';
import useBudgetPlannerStore from '../../store/useBudgetPlanner';

export interface BudgetLevelPopupRef {
  onShowPopup: () => void;
  onHidePopup: () => void;
}

interface Props {
  cId: number;
}

export const OPTIONS = [
  {
    title: 'Premium',
    des: 'Top-tier vendors with luxury experience.',
    icon: AssetsIcons.premium,
  },
  {
    title: 'Standard',
    des: 'Reliable vendors offering good quality at a fair, reasonable price.',
    icon: AssetsIcons.standard,
  },
  {
    title: 'Budget Friendly',
    des: 'Affordable vendors delivering essential services without compromising basic quality.',
    icon: AssetsIcons.budgetFriendly,
  },
];

const BudgetLevelPopup: ForwardRefRenderFunction<BudgetLevelPopupRef, Props> = (
  props,
  ref,
) => {
  const [showPopup, setShowPopup] = useState(false);
  const onSelectCategory = useBudgetPlannerStore(
    state => state.onSelectCategory,
  );
  const selectedCategories = useBudgetPlannerStore(
    state => state.selectedCategories,
  );
  const [selectLevel, setLevel] = useState<string>('');

  useEffect(() => {
    setLevel(selectedCategories?.[props?.cId]?.tier ?? '');
  }, [selectedCategories?.[props?.cId]?.tier]);

  useImperativeHandle(
    ref,
    () => {
      return {
        onShowPopup: id => {
          setShowPopup(true);
        },
        onHidePopup: () => setShowPopup(false),
      };
    },
    [],
  );

  if (!showPopup) return;

  return (
    <Popup>
      <View style={styles.con}>
        <View style={styles.subCon}>
          <TextView type="h4" color={Colors.PrimaryColor} position="center">
            Choose Service Level
          </TextView>
          <TextView
            type="h7"
            color={Colors.Black}
            noBold={true}
            position="center"
            style={styles.txtHelp}>
            This helps us filter vendors within your budget.
          </TextView>

          <Spacer height={10} />

          {OPTIONS.map((it, i) => {
            return (
              <LevelItem
                selected={selectLevel == it.title}
                title={it.title}
                des={it.des}
                icon={it.icon}
                onPress={() => {
                  setLevel(it.title);
                }}
              />
            );
          })}

          <IconButton
            icon={() => (
              <Icons
                type={IconsType.FontAwesome}
                name={'close'}
                size={14}
                color={Colors.White}
              />
            )}
            size={8}
            style={styles.closeBtn}
            onPress={() => setShowPopup(false)}
          />

          <Button
            disabled={selectLevel == ''}
            onPress={() => {
              onSelectCategory(
                props.cId,
                selectLevel,
                OPTIONS.find(it => selectLevel == it.title)?.icon,
              );
              setShowPopup(false);
            }}
            style={styles.btn}
            text={'Continue'}
          />
        </View>
      </View>
    </Popup>
  );
};

export default forwardRef<BudgetLevelPopupRef>(BudgetLevelPopup);

const LevelItem = ({
  title,
  des,
  icon,
  onPress,
  selected,
}: {
  title: string;
  des: string;
  icon: number;
  onPress: () => void;
  selected: boolean;
}) => {
  return (
    <Pressable
      style={[
        styles.row,
        selected && {
          borderWidth: 0.5,
          borderColor: Colors.PrimaryColor,
        },
      ]}
      onPress={onPress}>
      <ImageView
        uri={icon}
        type="OFFLINE"
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.subItemCon}>
        <TextView type="h6">{title}</TextView>
        <TextView type="h8" noBold={true} style={styles.txtDes}>
          {des}
        </TextView>
      </View>

      {selected && (
        <Icons
          type={IconsType.Ionicons}
          name={'shield-checkmark-sharp'}
          size={20}
          color={Colors.GreenEmeRald}
          style={{position: 'absolute', top: -1, right: 0}}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  con: {
    backgroundColor: Colors.White,
    borderRadius: 7,
    width: '90%',
  },
  subCon: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  txtHelp: {
    marginTop: 5,
  },
  subItemCon: {flex: 1},
  txtDes: {
    marginTop: 2,
    color: Colors.Gray,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    marginTop: 3,
    borderRadius: 7,
    borderColor: Colors.light,
  },
  image: {
    width: 65,
    height: 65,
  },
  closeBtn: {
    backgroundColor: Colors.PrimaryColor,
    position: 'absolute',
    right: 5,
    top: 5,
  },
  btn: {height: 30, marginTop: 15},
});
