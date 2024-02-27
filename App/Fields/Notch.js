import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../assets/Shared/Colors';

const Notch = ({ colors, ...props }) => {
  const style = styles(colors);
  return (
    <View style={style.root} {...props}/>
  );
};

export default memo(Notch);

const styles = (colors) => StyleSheet.create({
  root: {
    width: 4,
    height: 4,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.MAIN,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 4,
  },
});
