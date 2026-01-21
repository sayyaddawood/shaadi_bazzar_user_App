import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Spacer, TextView} from '../core';
import Popup from '../core/Popup';
import {Colors} from '../../theme';
import {onDeleteAccount} from '../../network/serverRequests';
import {useUserInfo} from '../../hooks';

export interface ConfirmDeleteAccountRef {
  onShowConfirmDeletePopup: () => void;
  onHideConfirmDeletePopup: () => void;
}

interface Props {}

const ConfirmDeleteAccount: ForwardRefRenderFunction<
  ConfirmDeleteAccountRef,
  Props
> = (props, ref) => {
  const [showPopup, setShowPopup] = useState(false);
  const [deleteLoading, setDeleteDeleteLoading] = useState(false);
  const {onConfirmLogout} = useUserInfo();

  useImperativeHandle(
    ref,
    () => {
      return {
        onShowConfirmDeletePopup: () => setShowPopup(true),
        onHideConfirmDeletePopup: () => setShowPopup(false),
      };
    },
    [],
  );

  const onDelete = async () => {
    if (deleteLoading) return;

    setDeleteDeleteLoading(true);
    const result = await onDeleteAccount(global.userInfo.phone);
    if (result?.message == 'success') {
      setDeleteDeleteLoading(false);
      setShowPopup(false);
      onConfirmLogout();
    }
  };

  if (!showPopup) return;

  return (
    <Popup>
      <View style={styles.con}>
        <View style={styles.subCon}>
          <TextView type="h4" color={Colors.PrimaryColor} position="center">
            Deactivate your account?
          </TextView>
          <TextView type="h6" style={styles.txtDes} position="center">
            Deactivating your WedEasy account starts a 30-day deletion process. If you don’t access your account during this period, it will be permanently deleted.
          </TextView>
        </View>

        <Button
          text="Deactivate"
          isLoading={deleteLoading}
          onPress={onDelete}
          style={styles.btn}
          loaderColor={Colors.White}
        />

        <Spacer height={5} />
        <Button
          disabled={deleteLoading}
          text="Cancel"
          type="outline"
          textColor={Colors.Black}
          style={styles.btn}
          onPress={() => setShowPopup(false)}
        />
        <Spacer height={20} />
      </View>
    </Popup>
  );
};

export default forwardRef<ConfirmDeleteAccountRef>(ConfirmDeleteAccount);

const styles = StyleSheet.create({
  con: {
    backgroundColor: Colors.White,
    borderRadius: 7,
    width: '90%',
  },
  subCon: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  txtDes: {
    marginTop: 10,
  },
  btn: {height: 40, marginHorizontal: 25},
});
