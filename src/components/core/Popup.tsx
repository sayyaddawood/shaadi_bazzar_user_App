import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import TextView from './TextView';

const Popup = ({children}: {children: React.ReactNode}) => {
  return (
    <Modal transparent>
      <View style={styles.con}>{children}</View>
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
