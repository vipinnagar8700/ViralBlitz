import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Switch } from 'react-native-paper';
import RangeSlider from "rn-range-slider";
import Rail from "../../Fields/Rail";
import RailSelected from "../../Fields/RailSelected";
import Label from "../../Fields/Label";
import Notch from "../../Fields/Notch";
import Colors from "../../../assets/Shared/Colors";
import { MaterialIcons } from "@expo/vector-icons";
const AdddetailsBusiness = ({ navigation, route, edit = true }) => {
  const [budget, setBudget] = useState(50);
  const [isCustomBudget, setIsCustomBudget] = useState(false);

  const handleSetBudget = (budget) => {
    const num = parseInt(budget) || 0;
    setBudget(num);
  };

  const handleSubmit = () => {
    // Handle submit logic
  };

  const handleNextBtn = () => {
    // Handle next button logic
  };
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);
  // range slider <SvgThumbImg height={20} width={20} />
  const renderThumb = useCallback(
    () => <View style={styles.sliderHandle}></View>,
    []
  );
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            style={{ fontFamily: "appfont-bold" }}
            color={Colors.MEMBERCOL}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Add details</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Estimated Reach</Text>
        <Text style={styles.subHeading}>1000 - 1500</Text>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.labela}>Location</Text>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Start typing a location..."
          />
        </View>
        {/* Age Range Slider */}
        <Text style={styles.labela}>Age</Text>

        <RangeSlider
          style={styles.rangeSlider}
          min={0}
          max={60}
          step={1}
          floatingLabel
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleValueChange}
        />
        {/* End Age Range Slider */}

        {/* Gender Selector */}
        <Text style={styles.labela}>Gender</Text>
        <TextInput
          style={[styles.input, { width: "50%" }]}
          placeholder="Select Gender"
        />
        <Text style={[styles.labela,{marginVertical:5}]}>Budget</Text>
        <View style={styles.budgetContainer}>
            <TextInput
            style={styles.budgetInput}
            value={`$${budget}`}
            onChangeText={handleSetBudget}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
          />
         <View>
         <Text style={styles.labela}>Custom</Text>   
         <Switch color={Colors.MEMBERCOL}
            value={isCustomBudget}
            onValueChange={() => setIsCustomBudget(!isCustomBudget)}
          />
         </View>
        </View>
        <RangeSlider
          style={styles.rangeSlidera}
          min={50}
          max={5000}
          step={50}
          disableRange
          floatingLabel={false}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleValueChange}
        />
        {/* Wallet Summary */}
        <View style={[styles.budgetContainer,{marginVertical:10}]}>
        <Text style={styles.labela}>Budget: </Text>
        <Text style={styles.labela}>$ {budget.toFixed(2)}</Text>

        </View>
        <View style={[styles.budgetContainer,{marginVertical:5}]}>
        <Text style={styles.labela}>Wallet amount: </Text>
        <Text style={styles.labela}> - $ 40.00</Text>
            </View>
            <View style={[styles.budgetContainer,{marginVertical:5}]}>
            <Text style={[styles.labela, { color:  Colors.MEMBERCOL }]}>
          Amount to pay: 
        </Text>
        <Text style={[styles.labela, { color: Colors.MEMBERCOL }]}>
         {(budget - 40).toFixed(2)}
        </Text>
            </View>
        
        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleSubmit(handleNextBtn)}
        >
          <Text style={styles.nextButtonText}>
            {edit ? "Create Campaign" : "Send for Approval"}
          </Text>
        </TouchableOpacity>
        {/* End Next Button */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.white
  },
  contentContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 4,
  },
  subHeading: {
    fontSize: 16,
    textAlign: "center",
    color: "#A9A9A9",
  },
  rangeSlider: {
    elevation: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  rangeSlidera: {
    elevation: 10,
    marginBottom: 2,
  },
  input: {
    height: 50,
    marginVertical: 1,
    borderWidth: 1,
    padding: 15,
    borderColor: Colors.MAIN,
    borderRadius: 8,
    color: Colors.Black,
    backgroundColor: Colors.white,
  },
  budgetContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  budgetInput: {
    width: "40%",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#A9A9A9",
  },
  Labela: {
    fontSize: 14,
    marginTop: 12,
    color: "#A9A9A9",
  },
  nextButton: {
    backgroundColor: Colors.MEMBERCOL,
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 24,
  },
  nextButtonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
  header: {
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 22,
    color: Colors.Black,
    fontFamily: "appfont-medium",
  },
  headerTexta: {
    fontSize: 18,
    color: Colors.Black,
    fontFamily: "appfont-medium",
  },
  thumbStyle: {
    width: 24,
    height: 24,
    backgroundColor: "#FF6347", // Adjust the color as needed
    borderRadius: 12,
  },
  sliderHandle: {
    width: 24,
    height: 24,
    backgroundColor: Colors.MEMBERCOL,
    borderRadius: 50,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 0 },
    borderWidth: 5,
    borderColor: "white",
    // flex: 1,
  },
});

export default AdddetailsBusiness;
