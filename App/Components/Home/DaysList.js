import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";

const DaysList = () => {
  return (
    <View style={{ padding: 20, backgroundColor: "#fff" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "appfont-medium",
            color: Colors.Black,
          }}
        >
          Last 7 days
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          flex: 1,
          alignItems: "center",
          backgroundColor: "#fff",
          borderWidth: 2,
          borderColor: "#f5f5f5",
          borderRadius: 4,
          paddingHorizontal: 5,
          paddingVertical: 10,
          shadowColor: "#000",
          marginTop:8,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 1.84,
          elevation: 1,
        }}
      >
        {/* First Column */}
        <View >
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="volume-high"
                size={14}
                color="#000000"
              />
            </View>
            <AntDesign name="arrowup" size={18} color="#000000" />
            <Text style={styles.percentagea}>33%</Text>
          </View>
          <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
            <Text style={styles.numbera}>140</Text>
            <Text style={styles.texta}> Campaigns</Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#ccc", width: 2, height: "70%" }} />
        {/* Second Column */}
        <View>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Ionicons name="eye" size={14} color="#000000" />
            </View>
            <AntDesign name="arrowdown" size={18} color="#000000" />
            <Text style={styles.percentagea}>33%</Text>
          </View>
          <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
            <Text style={styles.numbera}>5,425</Text>
            <Text style={styles.texta}>
blitzs</Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#ccc", width: 2, height: "70%" }} />

        {/* Third Column */}
        <View>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Ionicons name="star-outline" size={14} color="#000000" />
            </View>
            <AntDesign name="arrowup" size={18} color="#000000" />
            <Text style={styles.percentagea}>33%</Text>
          </View>
          <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
            <Text style={styles.numbera}>879</Text>
            <Text style={styles.texta}>engagements</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#A99BFD",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  columna: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#fff5f5",
    padding: 5,
    borderRadius: 50,
  },

  percentage: {
    fontFamily: "appfont-medium",
    fontSize: 18,
    color: "#fff",
    marginLeft: 5,
  },

  percentagea: {
    fontFamily: "appfont-medium",
    fontSize: 15,
    color: "#000000",
  },
  numbera: {
    fontFamily: "appfont-bold",
    fontSize: 30,
    color: Colors.MEMBERCOL,
  },
  texta: {
    fontFamily: "appfont-medium",
    color: Colors.Black,
    fontSize: 14,
  },
});

export default DaysList;
