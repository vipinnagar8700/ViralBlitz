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

import Colors from "../../assets/Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

const HomeCompaignsListMain = () => {
  const Categorieslist = [
    {
      id: 1,
      image: require("../../assets/images/image.png"),
    },
    {
      id: 2,
      image: require("../../assets/images/image.png"),
    },
    {
      id: 3,
      image: require("../../assets/images/image.png"),
    },
    {
      id: 4,
      image: require("../../assets/images/image.png"),
    },
    {
      id: 5,
      image: require("../../assets/images/image.png"),
    },
  ];
  return (
    <View style={{ paddingHorizontal: 20 ,backgroundColor:'#fff'}}>
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
                    source={
                    item.image}
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
                    color:Colors.Black
                      }}
                    >
                      Coffee Day
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: "appfont-light" ,color:Colors.Black
                      }}
                    >
                     <Ionicons name="eye" size={14} color="#000000" /> 780 people reached
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: "appfont-light",
                        color:Colors.Black
                      }}
                    >
                      Posted 21 hrs ago
                    </Text>
                  </View>
                  <View style={{ justifyContent: "end", }}>
                    <Text style={{color:Colors.MEMBERCOL,fontSize:22,fontFamily:'appfont-bold'}}>3.75k</Text>
                    <Text  style={{color:Colors.Black,fontSize:13,fontFamily:'appfont-medium'}}>impressions</Text>
                    <View style={{ flexDirection: "row",}}>
                    <Text style={{color:Colors.Black,fontSize:13,fontFamily:'appfont-light'}}>for only</Text>
                     <Text style={{color:Colors.MEMBERCOL,fontSize:13,fontFamily:'appfont-medium'}}>$ 50</Text>
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

export default HomeCompaignsListMain;

const styles = StyleSheet.create({});
