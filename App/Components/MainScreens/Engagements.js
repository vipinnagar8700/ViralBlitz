import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Colors from "../../../assets/Shared/Colors";
import { MaterialIcons } from "@expo/vector-icons";
const { width } = Dimensions.get("window") * 4;
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import { Filter } from "../../../assets/icons/icon-analytics.svg";
import EngagementsProduct from "./engagementsProducts";
import FilterModel from "../../OrganisationAuth/Models/FilterModel";

const Engagements = ({ navigation, route, edit = true }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
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
        <Text style={styles.headerText}>Engagements</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <View
        style={[
          styles.contentContainer,
          {
            marginTop: 20,
            flexDirection: "row",
            alignContent: "center",
            textAlign: "center",
            alignItems: "center",
          },
        ]}
      >
        <AntDesign
          name="search1"
          size={24}
          color={Colors.Black}
          style={{ position: "absolute", left: 30, top: 12 }}
        />
        <TextInput
          style={{
            padding: 10,
            borderRadius: 30,
            borderColor: "#E1E4EE",
            borderWidth: 1,
            width: "80%",
            paddingLeft: 40,
          }}
          placeholder="Search campaigns"
        />
        <TouchableOpacity onPress={openModal}>
        <MaterialCommunityIcons
          name="text-box-search"
          size={24} 
          color={Colors.Black}
          paddingLeft={30}
        /></TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView
          horizontal={true}  showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.tagContainer}>
            {data &&
              data.map((item) => (
                <Text key={item.id} style={styles.tag}>
                  {item.name}
                </Text>
              ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 10,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: width,
            }}
          >
            {data &&
              data.map((item) => (
                <Image
                  key={item.id}
                  source={require("../../../assets/images/li.png")}
                  style={styles.taga}
                />
              ))}
          </View>
        </ScrollView>
      </View>
      <EngagementsProduct/>
      <FilterModel
        visible={isModalVisible}
        onClose={closeModal}
        onFilterSelect={(selectedFilter) => {
          console.log("Selected Filter:", selectedFilter);
          // You can handle the selected filter here
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  tagContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },
  tag: {
    fontFamily: "appfont-light",
    flexDirection: "row",
    borderColor: Colors.MAIN,
    borderWidth: 1,
    padding: 6,
    borderRadius: 15,
  },
  taga: {
    height: 50,
    width: 50,
    fontFamily: "appfont-light",
    flexDirection: "row",
    borderColor: Colors.MAIN,
    borderWidth: 1,
    padding: 6,
    borderRadius: 70,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    paddingHorizontal: 20,
    width: width,
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

export default Engagements;
