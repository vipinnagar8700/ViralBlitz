import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Posts from "../Components/MainScreens/Posts";
import NotificationScreen from "../Components/MainScreens/NotificationScreen";
import AddMembers from "../OrganisationAuth/AddMembers";
import Colors from "../../assets/Shared/Colors";
import HomeMain from "../Screens/HomeMain";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // hide labels
        tabBarStyle: {
          borderTopLeftRadius: 20, // round top-left corner
          borderTopRightRadius: 20,
          paddingVertical: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../../assets/images/Footer/c.png")} />
          ),
        }}
      />

      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../../assets/images/Footer/a.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../../assets/images/Footer/b.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="AddMembers"
        component={AddMembers}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../../assets/images/Footer/d.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeMain"
        component={HomeMain}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../../assets/images/Footer/e.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
