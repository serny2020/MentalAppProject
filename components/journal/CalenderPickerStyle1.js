import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CalendarPickerStyle1 = ({ value, onDateChange, mode = 'date', display = 'default', style }) => {
  return (
    <DateTimePicker
      value={value}
      mode={mode}
      display={display}
      onChange={(event, date) => {
        if (date) onDateChange(date);
      }}
      style={style || styles.datePicker}
    />
  );
};

const styles = StyleSheet.create({
  datePicker: {
    width: '100%',
    height: 50,
  },
});

export default CalendarPickerStyle1;
