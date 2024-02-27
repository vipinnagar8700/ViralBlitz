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
import Posts from "../Components/MainScreens/Posts";
import AdddetailsBusiness from "../Components/MainScreens/AdddetailsBussiness";
import Engagements from "../Components/MainScreens/Engagements";
import PostsEngagements from "../Components/MainScreens/PostsEngagements";
import Organisations from "../Components/Profile/EditOrganisation";
import Edit_Organisations from "../Components/Profile/EditOrganisation_1";
import EditProfile from "../Screens/Profile";
import Subscription from "../Components/Subscriptions/Subscription";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen
        name="Subscriptions"
        component={Subscription}
        options={{ screenOptions: false }}
      />
      {/* <Stack.Screen
        name="Profile_edit"
        component={EditProfile}
        options={{ screenOptions: false }}
      /> */}
      {/* <Stack.Screen
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
      <Stack.Screen name="HomeMain" component={HomeMain} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} /> */}
       {/* <Stack.Screen name="Posts" component={Posts} /> */}
       {/* <Stack.Screen name="PostEngagement" component={PostsEngagements} /> */}
       {/* <Stack.Screen name="AddDetails_business" component={AdddetailsBusiness} /> */}
        {/* <Stack.Screen name="Engagements" component={Engagements} /> */}
      {/* <Stack.Screen name='SingleProduct' component={SingleProduct} /> */}
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      {/* <Stack.Screen name="Edit_Organisations" component={Organisations} />  */}
      {/* <Stack.Screen name="Edit_Organisations_edit" component={Edit_Organisations} />  */}
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
