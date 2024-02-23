import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../assets/Shared/Colors';

const Checkbox = ({ isChecked: initialChecked = false, onChange }) => {
  const [isChecked, setChecked] = useState(initialChecked);

  const handleToggle = () => {
    setChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <TouchableOpacity onPress={handleToggle} style={styles.checkbox}>
      <View style={isChecked ? styles.checked : styles.unchecked}>
        {isChecked ? <AntDesign name="check" size={18} color="white" /> : <AntDesign name="close" size={18} color="white" />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.MEMBERCOL,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    height: '100%',width: '100%',
    backgroundColor: Colors.MEMBERCOL,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unchecked: {
    width: 16,
    height: 16,
    backgroundColor: 'white',
    borderRadius: 1,
  },
});

export default Checkbox;
