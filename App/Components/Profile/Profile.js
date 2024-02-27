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
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
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
        <Text style={styles.headerText}>My profile</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: "center", marginVertical: 30 }}>
          <Image
            source={require("../../../assets/images/user.jpg")}
            style={styles.Avatar}
          />
          <Text
            style={{
              fontSize: 18,
              fontFamily: "appfont-medium",
              marginTop: 10,
            }}
          >
            Vipin Nagar
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "appfont-light" }}>
            Admin
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 15, fontFamily: "appfont-light" }}>
            Referral code : ABCD1234
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "appfont-medium",
              color: Colors.MEMBERCOL,
            }}
          >
            Copy Link
          </Text>
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
          <SimpleLineIcons
            name="user-following"
            size={24}
            color={Colors.Black}
          />
          <Text style={{ fontSize: 18, fontFamily: "appfont-light" }}>
            Edit profile
          </Text>
          <FontAwesome name="angle-right" size={24} color={Colors.Black} />
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
          <SimpleLineIcons
            name="user-following"
            size={24}
            color={Colors.Black}
          />
          <Text style={{ fontSize: 18, fontFamily: "appfont-light" }}>
          Edit organisations
          </Text>
          <FontAwesome name="angle-right" size={24} color={Colors.Black} />
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
          <SimpleLineIcons
            name="user-following"
            size={24}
            color={Colors.Black}
          />
          <Text style={{ fontSize: 18, fontFamily: "appfont-light" }}>
          Edit social media connections
          </Text>
          <FontAwesome name="angle-right" size={24} color={Colors.Black} />
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
         
          <Feather name="dollar-sign" size={24}   color={Colors.Black} />
          <Text style={{ fontSize: 18, fontFamily: "appfont-light" }}>
          Subscription
          </Text>
          <FontAwesome name="angle-right" size={24} color={Colors.Black} />
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
          
          <MaterialCommunityIcons name="rotate-3d-variant" size={24}  color={Colors.Black} />
          <Text style={{ fontSize: 18, fontFamily: "appfont-light" }}>
          App Tour
          </Text>
          <FontAwesome name="angle-right" size={24} color={Colors.Black} />
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
         <AntDesign name="contacts" size={24} color={Colors.Black} />
          <Text style={{ fontSize: 18, fontFamily: "appfont-light" }}>
          Contact us
          </Text>
          <FontAwesome name="angle-right" size={24} color={Colors.Black} />
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
          <AntDesign name="like2" size={24} color={Colors.Black} />
          <Text style={{ fontSize: 18, fontFamily: "appfont-light" }}>
          Rate this app
          </Text>
          <FontAwesome name="angle-right" size={24} color={Colors.Black} />
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
            <MaterialIcons name="logout" size={24} color={Colors.Black} />
         
          <Text style={{ fontSize: 18, fontFamily: "appfont-light" }}>
            Logout
          </Text>
          <FontAwesome name="angle-right" size={24} color={Colors.Black} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  Avatar: {
    width: 100,
    height: 100,
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
});
