import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Alert
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../assets/Shared/Colors";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import * as Location from 'expo-location'; 
import Checkbox from "../Fields/Checkbox";

const CreateOrganisation = () => {
  const [image, setImage] = useState("https://s3-alpha-sig.figma.com/img/3a7f/077c/e062487a71ea9f3c9d6bd14c2fe186e9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d9oKhSLdlNT4mkIXX22ryDg6F0f-xjUh99MQsg5S6skVmzvZcqlHiWhJ9lRhdW7amA931QOdZbTkxODwM9JQYwquSBqolCgL7tHCQpaCdO5zqTXn7Vt-fGNPOnaG8oJeOHfRTHgSkak9xawc-wgHvfZGmmlfJh4A97jUFt1AAUbZn1N2ycxsnHsny-Mthf4zjJHc9ioxEUp9~8E-THjbu09Jkfum2wMwkc3GqtUBIQB4atfzsmksobmsJe7nunw2xKtSGbd~T7ZhDlQDK46cIbtcX~IpkY8WeFXAxaMmoeMGYWKrGDEUdRCu6rNDm4JhuRHgGQRHs3xHOBdVK53Jlw__");
  const [location, setLocation] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [subscribeToEmails, setSubscribeToEmails] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleImagePicker = async () => {
    // Image picker logic here
  };

  const handleNavigateToCreateOrganisation = () => {
    // Form validation
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      
      setNameError(true); // Set nameError to true to show red border
      return;
    }

    if (password !== confirmPassword) {
      setNameError(true);
      return;
    }
    setNameError(false);
    // Navigate to the next screen if all validations pass
    navigation.navigate("Interest");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <AntDesign name="left" size={18} color={Colors.MEMBERCOL} />
          </TouchableOpacity>
          <Text style={styles.headerText}> Create organisation</Text>
          <Text></Text>
        </View>
        <View></View>
        {/* Display selected image */}

        {/* Button to pick image */}
        <TouchableOpacity style={styles.buttona} onPress={handleImagePicker}>
          {image && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          )}
          <Text style={styles.buttonTexta}>
            <AntDesign
              name="pluscircleo"
              size={20}
              color={Colors.MEMBERCOL}
            />
          </Text>
        </TouchableOpacity>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Business Name</Text>
          <TextInput style={[styles.input, nameError && styles.inputError]} onChangeText={setName} placeholder="Enter business name" />
         
          <Text style={styles.label}>Business Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your  address"
            onChangeText={setEmail}
          />
          
          <Text style={styles.label}>Referral code</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter referral from friends to win points"
            onChangeText={setEmail}
          />
         
        </View>
        <View style={{justifyContent:'center',textAlign:'center',alignContent:'center',alignItems:'center',marginTop:150}}>
          <Text style={[styles.notADoctorTexta,{justifyContent:'center',textAlign:'center',alignContent:'center',alignItems:'center'}]}>
          By creating a Viral Blitz account, you agree to follow Viral Blitz’s
          </Text>
          <TouchableOpacity>
          <Text style={styles.notADoctorText}>Terms and Conditions</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigateToCreateOrganisation}
        >
          <Text style={styles.buttonText}>Create organisation</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  notADoctorText: {
    marginTop: 8,
    fontSize: 13,
    fontFamily: "appfont-light",
    textDecorationLine: "underline",
    color:Colors.MEMBERCOL
  },
  notADoctorTexta: {
    marginTop: 8,
    fontSize: 13,
    fontFamily: "appfont-light",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1,
  },

  headerText: {
    fontSize: 22,
    fontFamily: "appfont-light",
    textAlign: "center", // Center the text
    flex: 1, // Allow text to take remaining space
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.MAIN,
  },
  buttona: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // backgroundColor: Colors.MAIN,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // backgroundColor: Colors.MAIN,
  },
  inputError: {
    borderColor: 'red', // Change border color to red
  },
  header: {
    marginVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center content horizontally
  },
  inputBox: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    marginTop: 7,
    marginBottom: 4,
    fontFamily: "appfont-medium",
  },
  input: {
    height: 50,
    marginVertical: 1,
    borderWidth: 1,
    padding: 15,
    borderColor: Colors.MAIN,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  passwordContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  visibilityIcon: {
    position: 'absolute',
    right: 10,
    top:'-23%'
  },
  button: {
    width: "100%",
    backgroundColor: Colors.MEMBERCOL,
    borderColor: Colors.MEMBERCOL,
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "appfont-light",
  },
  buttonTexta: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    position: "absolute",
    fontSize: 16,
    fontFamily: "appfont-light",
    left: 68,
    top: 65,
    color: Colors.white,
    fontSize: 16,
    fontFamily: "appfont-light",
  },
 
 

});

export default CreateOrganisation;
