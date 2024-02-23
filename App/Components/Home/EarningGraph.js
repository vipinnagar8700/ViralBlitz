import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { BarChart } from "react-native-gifted-charts";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const CustomLabel = ({ value, label, frontColor }) => (
  <Text
    style={{ color: frontColor, fontFamily: "appfont-bold", fontWeight: 900 }}
  >
    {label}
  </Text>
);

const EarningGraph = () => {
  return (
    <View style={{ paddingHorizontal: 20, backgroundColor: "#fff" }}>
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
         Impressions this week
        </Text>
      </View>
      <View
        style={{
          width: Dimensions.get("screen").width * 0.88,
          height: 150,
          borderRadius: 10,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
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
        <View style={{ padding:5, paddingTop: 30 }}>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <FontAwesome name="dollar" size={14} color="#000000" />
            </View>
            <AntDesign name="arrowdown" size={18} color="#000000" />
            <Text style={styles.percentagea}>33%</Text>
          </View>
          <Text
            style={{
              fontFamily: "appfont-bold",
              fontSize: 30,
              color: Colors.MEMBERCOL,
            }}
          >
            5.2K
          </Text>
          <Text style={{ fontFamily: "appfont-medium", fontSize: 13,color:Colors.Black }}>
            12 Sep - 18 Sep
          </Text>
        </View>
        <View style={{ right: 28, top: 20 }}>
          <BarChart
            data={[
              {
                value: 150,
                label: "Mon",
                frontColor:Colors.MEMBERCOL,
                spacing: 5,
                topLabelComponent: () => (
                  <Text style={{ color: "#000", fontSize: 18 }}></Text>
                ),
              },
              {
                value: 220,
                label: "Tue",
                frontColor:Colors.MEMBERCOL,

                spacing: 5,
                topLabelComponent: () => (
                  <Text style={{ color: "#000", fontSize: 18 }}></Text>
                ),
              },
              {
                value: 280,
                label: "Wed",
                frontColor:Colors.MEMBERCOL,
                spacing: 5,
                topLabelComponent: () => (
                  <Text style={{ color: "#000", fontSize: 18 }}></Text>
                ),
              },
              {
                value: 420,
                label: "Thru",
                frontColor:Colors.MEMBERCOL,

                spacing: 5,
                topLabelComponent: () => (
                  <Text style={{ color: "#000", fontSize: 18 }}>48</Text>
                ),
              },
              {
                value: 350,
                label: "Fri",
                frontColor:Colors.MEMBERCOL,

                spacing: 5,
                topLabelComponent: () => (
                  <Text style={{ color: "#000", fontSize: 11 }}></Text>
                ),
              },
              {
                value: 200,
                label: "Sat",
                frontColor:Colors.MEMBERCOL,

                spacing: 5,
                topLabelComponent: () => (
                  <Text style={{ color: "#000", fontSize: 18 }}></Text>
                ),
              },
              {
                value: 300,
                label: "Sun",
                frontColor:Colors.MEMBERCOL,

                spacing: 5,
                topLabelComponent: () => (
                  <Text style={{ color: "#000", fontSize: 12 }}></Text>
                ),
              },
            ]}
            barBorderRadius={4}
            barMarginBottom={10}
            hideYAxisText
            yAxisThickness={0}
            xAxisThickness={0}
            hideRules
            height={80}
            barWidth={25}
            isAnimated
            renderLabel={({ value, label, frontColor }) => (
              <CustomLabel label={label} frontColor={frontColor}  style={{ color: frontColor, fontFamily: "appfont-bold", fontWeight: 900, fontSize: 10 }}/>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default EarningGraph;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#fff5f5",
    padding: 5,
    borderRadius: 50,
  },
});
