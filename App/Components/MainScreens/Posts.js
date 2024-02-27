import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import CheckBox from "react-native-checkbox";
import * as ImagePicker from "expo-image-picker";

import Colors from "../../../assets/Shared/Colors";
import Checkbox from "../../Fields/Checkbox";

const Posts = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const maxCharacters = 2200;
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const handleChangeText = (text) => {
    setTextInputValue(text);
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const data = [
    { id: 1, name: "Health" },
    { id: 2, name: "Education" },
    { id: 3, name: "Technology" },
    { id: 4, name: "Food" },
    { id: 5, name: "Fitness" },
    { id: 6, name: "Fashion" },
    { id: 7, name: "Travel" },
    { id: 8, name: "Finance" },
    { id: 9, name: "Music" },
    { id: 10, name: "Art" },
  ];

  return (
    <View style={{ backgroundColor: Colors.white }}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            style={{ fontFamily: "appfont-bold" }}
            color={Colors.MEMBERCOL}
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
          {!image && ( // Render TouchableOpacity only if image is not selected
            <TouchableOpacity
              style={{
                width: Dimensions.get("screen").width * 0.89,
                height: 170,
                color: Colors.Black,
                borderRadius: 10,
                backgroundColor: Colors.MAIN,
                justifyContent: "center", // Center vertically
                alignItems: "center", // Center horizontally
                margin: 2,
              }}
              onPress={pickImage}
            >
              <Feather name="upload" size={24} color={Colors.MEMBERCOL} />
              <Text
                style={{
                  color: Colors.MEMBERCOL,
                  fontFamily: "appfont-light",
                  fontSize: 20,
                }}
              >
                Add Media
              </Text>
            </TouchableOpacity>
          )}
          {image && ( // Conditionally render the image if it exists
            <View style={{}}>
              <Image
                source={{ uri: image }}
                style={{
                  width: Dimensions.get("screen").width * 0.89,
                  height: 270,
                  borderRadius: 10,
                  margin: 2,
                }}
              />
            </View>
          )}
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.label}>Campaign Name</Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Enter campaign name"
            />
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
                color: Colors.Black,
                backgroundColor: Colors.white,
              }}
              multiline
              placeholder="Enter caption here..."
              onChangeText={handleChangeText}
              value={textInputValue}
              maxLength={maxCharacters}
            />

            <Text
              style={{ alignSelf: "flex-end", textAlignVertical: "bottom" }}
            >
              {textInputValue.length}/{maxCharacters} characters
            </Text>
            <Text style={styles.label}>Tags (up to 3)</Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Enter relevant tags"
            />
            <View style={{ flexDirection: "row", gap: 10, marginTop: 10, flexWrap:'wrap'}}>
              {data &&
                data.map((item) => (
                  <View key={item.id} style={styles.tag}>
                    <Text>{item.name}</Text>
                  </View>
                ))}
            </View>
            <Text style={styles.label}>Post to</Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="All"
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={styles.label}>Blitz campaign</Text>
              <Checkbox />
            </View>
            <Text style={{ fontFamily: "appfont-light", fontSize: 12 }}>
              Blitzing a campaign makes it available to our members for sharing
              in their social media platforms.
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Campaign</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    fontFamily: "appfont-light",
    flexDirection: "row",
    borderColor: Colors.MAIN,
    borderWidth: 1,
    padding: 6,
    borderRadius: 15,

  },
  label: {
    fontSize: 16,
    marginTop: 6,
    marginBottom: 4,
    fontFamily: "appfont-medium",
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
  button: {
    width: "100%",
    backgroundColor: "transparent",
    borderColor: Colors.MEMBERCOL,
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    marginBottom: 70,
  },
  buttonText: {
    color: Colors.MEMBERCOL,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "appfont-medium",
  },
});

export default Posts;
