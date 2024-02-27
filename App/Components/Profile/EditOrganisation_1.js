import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Personal from "./Personal";
const Tab = createMaterialTopTabNavigator();
import { Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Ionicons, Feather, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../assets/Shared/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
const Edit_Organisations = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={[styles.container, { flex: 1, backgroundColor: Colors.white }]}
    >
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            style={{ fontFamily: "appfont-bold" }}
            color={Colors.MEMBERCOL}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}> Organisations</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Image
            source={require("../../../assets/images/user.jpg")}
            style={styles.Avatara}
          />
        </View>

        <Text style={styles.label}>Business Name</Text>
        <TextInput style={[styles.input]} placeholder="Enter your Business Name" />
        <Text style={styles.label}>Address</Text>
        <TextInput style={[styles.input]} placeholder="Enter your Address .." />
        <Text style={styles.label}>Members</Text>
        <View
          style={{
            padding: 20,
            borderRadius: 10,
            borderWidth: 1,
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: Colors.MAIN,
          }}
        >
          <Image
            style={styles.Avatar}
            source={require("../../../assets/images/user.jpg")}
          />
          <View>
            <Text style={{ fontSize: 18, fontFamily: "appfont-light" }}>
              Cafe Bistro
            </Text>
            <Text style={{ fontSize: 15, fontFamily: "appfont-light" }}>
              Manager
            </Text>
          </View>
          <FontAwesome name="edit" size={24} color={Colors.Black} />
        </View>
        <View
          style={{
            padding: 20,
            borderRadius: 10,
            borderWidth: 1,
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: Colors.MAIN,
          }}
        >
          <Image
            style={styles.Avatar}
            source={require("../../../assets/images/user.jpg")}
          />
          <View>
            <Text style={{ fontSize: 18, fontFamily: "appfont-light" }}>
              Cafe Bistro
            </Text>
            <Text style={{ fontSize: 15, fontFamily: "appfont-light" }}>
              Manager
            </Text>
          </View>
          <FontAwesome name="edit" size={24} color={Colors.Black} />
        </View>
        

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            marginTop:10
          }}
        >
          <AntDesign name="pluscircleo" size={24} color={Colors.MEMBERCOL} />
          <Text style={{ color: Colors.MEMBERCOL, fontSize: 15 }}>
            {" "}
            Add new member
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            marginTop: 50,
          }}
        >
          <AntDesign name="delete" size={24} color={Colors.SplashButton} />
          <Text style={{ color: Colors.SplashButton, fontSize: 15 }}>
            {" "}
            Delete organisation
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Edit_Organisations;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  Avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  Avatara: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  header: {
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  inputBox: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    marginTop: 7,
    marginBottom: 4,
    fontFamily: "appfont-medium",
  },
  input: {
    height: 50,
    marginVertical: 1,
    borderWidth: 1,
    padding: 15,
    borderColor: Colors.MAIN,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
});
