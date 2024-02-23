import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import SplashScreen from "../Screens/SplashScreen";
import Register from "../Screens/Register";
import Profile from "../Components/Profile/Profile";
import Interest from "../Screens/Interest";
import HomeMain from "../Screens/HomeMain";
import NotificationScreen from "../Components/MainScreens/NotificationScreen";

import { screenOptions } from "./NavigationOptions";
import CreateOrganisation from "../OrganisationAuth/CreateOrganisation";
import AddMembers from "../OrganisationAuth/AddMembers";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ screenOptions: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ screenOptions: false }}
      /> 
     <Stack.Screen
        name="CreateOrganisation"
        component={CreateOrganisation}
        options={{ screenOptions: false }}
      />
     <Stack.Screen
        name="AddMembers"
        component={AddMembers}
        options={{ screenOptions: false }}
      /> 
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ screenOptions: true }}
      />
     
      <Stack.Screen
        name="Interest"
        component={Interest}
        options={{ screenOptions: false }}
      />
     <Stack.Screen
        name="HomeMain"
        component={HomeMain}
      />
 <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      {/* <Stack.Screen name='SingleProduct' component={SingleProduct} /> */}
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
