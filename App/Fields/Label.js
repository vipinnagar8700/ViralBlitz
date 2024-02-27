import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../assets/Shared/Colors';

const Label = ({ text, colors }) => {
  const style = styles(colors);
  return (
    <View style={style.root}>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

const styles = (colors) => StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 4,
    backgroundColor: Colors.MAIN,
    borderRadius: 4,
  },
  text: {
    fontSize: 12,
    color:Colors.MEMBERCOL,
  },
});

export default memo(Label);
