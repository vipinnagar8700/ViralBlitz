import {
  Dimensions,
  FlatList,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HospitalDoctor from "../Components/HospitalScreen/HospitalDoctor";
import Colors from "../../assets/Shared/Colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const MainHomeCompaignList = () => {
  const Categorieslist = [
    {
      id: "1",
      image: require("../../assets/images/specialities-05.png"),
    },
    {
      id: "2",
      image: require("../../assets/images/specialities-04.png"),
    },
    {
      id: "3",
      image: require("../../assets/images/specialities-03.png"),
    },
    {
      id: "4",
      image: require("../../assets/images/specialities-02.png"),
    },
    {
      id: "5",
      image: require("../../assets/images/specialities-01.png"),
    },
  ];
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
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
            fontSize: 20,
            fontFamily: "appfont-medium",
            fontWeight: 600,
          }}
        >
          Campaign Ready to Blitz
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "appfont-medium",
              color: "#F59A93",
              padding: 10,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={Categorieslist}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <View style={{ paddingVertical: 10 }}>
              <View
                style={{
                  width: "100%",
                  height: 125,
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
                    source={{
                      uri: "https://img.freepik.com/free-photo/close-up-delicious-tacos_23-2150830997.jpg?t=st=1707979336~exp=1707982936~hmac=182e0244fa08be9e09b93369be26a1c43cdb2c5174a4d2ba2fdf7e0f98ca0c1b&w=996",
                    }}
                    style={{
                      width: Dimensions.get("screen").width * 0.25,
                      height: 100,
                      borderRadius: 10,
                    }}
                  />
                  <View style={{ justifyContent: "start",marginLeft:5 }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontFamily: "appfont-bold",
                      }}
                    >
                      McDonald New ..
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: "appfont-medium",
                        color: "#F59A93",
                      }}
                    >
                      Be the first to blitz!
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        justifyContent: "start",
                      }}
                    >
                      <Text
                        style={{
                          backgroundColor: "#c9ccd4",
                          padding: 5,
                          borderRadius: 15,
                          justifyContent: "center",
                          paddingHorizontal: 10,
                        }}
                      >
                        Lifestyle
                      </Text>
                      <Text
                        style={{
                          backgroundColor: "#c9ccd4",
                          padding: 5,
                          borderRadius: 15,
                          justifyContent: "center",
                          paddingHorizontal: 10,
                        }}
                      >
                        Food
                      </Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: "end", paddingTop: 20 }}>
                    <View style={{ alignItems: "center" }}>
                      <AnimatedCircularProgress
                        size={65}
                        width={7}
                        fill={80}
                        tintColor="#a5dd8b"
                        onAnimationComplete={() =>
                          console.log("onAnimationComplete")
                        }
                        backgroundColor="#c9ccd4"
                      />
                      <Text
                        style={{
                          position: "absolute",
                          top: "38%",
                          left: "61%",
                          transform: [{ translateX: -25 }, { translateY: -10 }],
                          fontFamily: "appfont-medium",
                          fontSize: 13,
                          color: "#c9ccd4",
                        }}
                      >
                        Earn{" "}
                        <Text
                          style={{
                            fontSize: 13,
                            fontFamily: "appfont-bold",
                            color: "#b99bd5",
                          }}
                        >
                          $2.04
                        </Text>
                      </Text>
                    </View>
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

export default MainHomeCompaignList;

const styles = StyleSheet.create({});
