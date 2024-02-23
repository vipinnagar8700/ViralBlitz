import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import CustomDrawer from "../../Navigations/CustomDrawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";
import { Fontisto } from '@expo/vector-icons';

const Header = () => {
  const navigation = useNavigation(); // Initialize useNavigation hook

  // Function to navigate to cart screen
  const goToCart = () => {
    navigation.navigate("NotificationScreen"); // Replace 'Cart' with your actual screen name
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderBottomColor: "#e7e9f0",
        borderBottomWidth: 2,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 7,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 7,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1707974115~exp=1707977715~hmac=87a89bfeedd2f2e9035305d1c9701631e873d6f379938309b91013c400a26c20&w=740",
            }}
            style={{ width: 50, height: 50, borderRadius: 99 }}
          />
         
          <View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "appfont-medium",
            }}
          >
            Vipin Nagar
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "appfont-light",
            }}
          >
            John Smith, Admin
          </Text>
          </View>
        
          
        </TouchableOpacity>

        <View style={{ flexDirection: "row", gap: 4 }}>
          <TouchableOpacity
            onPress={goToCart}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 7,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            
            <Fontisto name="bell" size={24} color={Colors.Black}   style={{
                borderRadius: 50,
              }} />
          </TouchableOpacity>
       
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
