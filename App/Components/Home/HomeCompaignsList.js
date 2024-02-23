import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { useNavigation } from "@react-navigation/native";

const HomeCompaignsList = () => {
  return (
    <View style={{ padding: 20 ,backgroundColor:"#fff"}}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontSize: 18, fontFamily: "appfont-medium", fontWeight: 600 ,color:Colors.Black}}
        >
         Do you want to Blitz these?
        </Text>
        <TouchableOpacity
          style={{  borderRadius: 5 }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "appfont-medium",
              color: Colors.MEMBERCOL,
              padding: 5,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeCompaignsList;

const styles = StyleSheet.create({});
