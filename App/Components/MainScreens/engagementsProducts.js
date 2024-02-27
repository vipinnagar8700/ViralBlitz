import {
  Dimensions,
  FlatList,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";
import { SimpleLineIcons } from "@expo/vector-icons";

const EngagementsProduct = () => {
  const Categorieslist = [
    {
      id: 1,
      image: require("../../../assets/images/user.jpg"),
    },
    {
      id: 2,
      image: require("../../../assets/images/user.jpg"),
    },
    {
      id: 3,
      image: require("../../../assets/images/user.jpg"),
    },
    {
      id: 4,
      image: require("../../../assets/images/user.jpg"),
    },
    {
      id: 5,
      image: require("../../../assets/images/user.jpg"),
    },
    {
      id: 6,
      image: require("../../../assets/images/user.jpg"),
    },
    {
      id: 7,
      image: require("../../../assets/images/user.jpg"),
    },
    {
      id: 8,
      image: require("../../../assets/images/user.jpg"),
    },
    {
      id: 9,
      image: require("../../../assets/images/user.jpg"),
    },
  ];
  return (
    <View style={{ paddingHorizontal: 20, backgroundColor: "#fff" }}>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={Categorieslist}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <View style={{ paddingVertical: 10 }}>
              <View
                style={{
                  width: "100%",
                  backgroundColor: Colors.MAIN,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "start",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: Dimensions.get("screen").width * 0.2,
                      height: 80,
                      borderRadius: 10,
                    }}
                  />

                  <View style={{ justifyContent: "space-between" }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontFamily: "appfont-medium",
                        color: Colors.Black,
                      }}
                    >
                      First Campaign
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "appfont-light",
                        color: Colors.MEMBERCOL,
                      }}
                    >
                      12 people blitzed this!
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: "appfont-light",
                        color: Colors.Black,
                      }}
                    >
                      <Ionicons name="eye" size={14} color="#000000" /> 545{" "}
                      <SimpleLineIcons name="like" size={14} color="black" />{" "}
                      545
                    </Text>
                  </View>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        color: Colors.MEMBERCOL,
                        fontSize: 18,
                        fontFamily: "appfont-medium",
                      }}
                    >
                      View
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default EngagementsProduct;

const styles = StyleSheet.create({});
