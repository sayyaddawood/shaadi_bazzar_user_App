import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type DatePickerType = {
  visible: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirmDate: (date: Date) => void;
};

const DatePicker = ({
  visible,
  setVisibility,
  onConfirmDate,
}: DatePickerType) => {
  const handleConfirm = (date: Date) => {
    onConfirmDate(date);
    setVisibility(false);
  };

  return (
    <DateTimePickerModal
      isVisible={visible}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={() => setVisibility(false)}
    />
  );
};

export default DatePicker;
