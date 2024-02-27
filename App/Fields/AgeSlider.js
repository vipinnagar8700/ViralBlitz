import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import Colors from '../../assets/Shared/Colors';

const AgeStepper = () => {
  const [age, setage] = useState(4); // Initial age value

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={13} // Min value
        maximumValue={60} // Max value
        minimumTrackTintColor={Colors.MEMBERCOL} // Track color before the thumb
        maximumTrackTintColor="#000" // Track color after the thumb
        thumbTintColor={Colors.MEMBERCOL}  // Thumb color
        step={0.5} // Increment value
        value={age} // Current value
        onValueChange={(value) => setage(value)} // Function to update value
      />
      <Text style={styles.value}>{age} yrs</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
  },
  value: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  slider: {
    width: '100%',
  },
});

export default AgeStepper;
