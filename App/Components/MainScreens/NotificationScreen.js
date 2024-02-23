import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../assets/Shared/Colors";
import Notifications from "../../Screens/Notifications";

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            style={{ fontFamily: "appfont-bold" }}
            color={Colors.MEMBERCOL}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.headerTextaa}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <Notifications />
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
  headerTextaa: {
    fontSize: 15,
    color: Colors.MEMBERCOL,
    fontFamily: "appfont-light",
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
    marginBottom: 70,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "appfont-medium",
  },
});

export default NotificationScreen;
