import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,ScrollView
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CheckBox from "react-native-checkbox";

import Colors from "../../../assets/Shared/Colors";

const Posts = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const maxCharacters = 500;
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const handleChangeText = (text) => {
    setTextInputValue(text);
  };

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            style={{ fontFamily: "appfont-bold" }}
            color="#f7a1a8"
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create post</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false} // Hide vertical scrollbar
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ padding: 20 }}>
          <Text style={styles.headerTexta}>
            Pizza hut campaign - Christmas 2024
          </Text>
          <View style={{ paddingVertical: 10 }}>
            <Image
              source={require("../../../assets/images/Food.jpg")}
              style={{
                width: Dimensions.get("screen").width * 0.89,
                height: 270,
                borderRadius: 10,
                margin: 2,
              }}
            />
          </View>
          <View>
            <Text style={styles.label}>Caption</Text>
            <TextInput
              style={{
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                minHeight: 150,
                textAlignVertical: "top", // Align text to the top
                marginVertical: 1,
                borderWidth: 1,
                borderColor: Colors.MAIN,
                color: Colors.MAIN,
                backgroundColor: Colors.white,
              }}
              multiline
              placeholder="Type your message here..."
              onChangeText={handleChangeText}
              value={textInputValue}
              maxLength={maxCharacters}
            />

            <Text
              style={{ alignSelf: "flex-end", textAlignVertical: "bottom" }}
            >
              {textInputValue.length}/{maxCharacters} characters
            </Text>
            <Text style={styles.label}>Post to</Text>
            <TextInput style={styles.input} multiline placeholder="All" />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <Text style={styles.label}>Schedule for later</Text>
              <CheckBox
                checked={isChecked}
                onChange={toggleCheckbox}
                label={false}
                style={{ backgroundColor: "blue", tintColor: "white" }} // Adjust colors as needed
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 27,
              }}
            >
              <View>
                <Text style={styles.label}>Date </Text>
                <TextInput
                  style={styles.input}
                  placeholder="MM/DD/YYYY"
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  style={[styles.input, { width: "100%" }]}
                  placeholder="Select Gender             v"
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Save Draft</Text>
        </TouchableOpacity>
        </View>
        
       

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginTop: 3,
    marginBottom: 4,
    fontFamily: "appfont-medium",
  },
  header: {
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    color: "#000000",
    fontFamily: "appfont-medium",
  },
  headerTexta: {
    fontSize: 18,
    color: "#000000",
    fontFamily: "appfont-medium",
  },
  input: {
    height: 50,
    marginVertical: 1,
    borderWidth: 1,
    padding: 15,
    borderColor: Colors.MAIN,
    borderRadius: 8,
    color: Colors.MAIN,
    backgroundColor: Colors.white,
  },
  button: {
    width: "100%",
    backgroundColor: "#9399AA",
    borderColor: "#9399AA",
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    marginBottom:70
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "appfont-medium",
  },
});

export default Posts;
