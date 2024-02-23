import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../assets/Shared/Colors";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import RoleModel from "./Models/RoleModel";

const AddMembers = () => {
    const [selectedRole, setSelectedRole] = useState(null);

    const handleRoleSelect = (role) => {
      setSelectedRole(role);
      // Do whatever you want with the selected role here
    };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [roleModalVisible, setRoleModalVisible] = useState(false); // State to control the visibility of the role model

  // Function to handle opening the role model
  const handleOpenRoleModal = () => {
    setRoleModalVisible(true);
  };

  // Function to handle closing the role model
  const handleCloseRoleModal = () => {
    setRoleModalVisible(false);
  };

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

 

  const handleNavigateToAddMembers = () => {
    // Form validation
   
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
          <Text style={styles.headerText}> Add members</Text>
          <TouchableOpacity onPress={handleNavigateToAddMembers}>
          <Text style={{ color: Colors.MEMBERCOL }}>Skip</Text>

          </TouchableOpacity>
        </View>
        <View></View>
        {/* Display selected image */}
        {/* Button to pick image */}

        <View style={styles.inputBox}>
          <Text style={styles.label}> Name</Text>
          <TextInput
            style={[styles.input, nameError && styles.inputError]}
            onChangeText={setName}
            placeholder="Enter member name"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter your email address"
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Role</Text>
          <TouchableOpacity style={styles.input}  onPress={handleOpenRoleModal}>
          <Text>{selectedRole ? selectedRole : "Select role"}</Text>
            {roleModalVisible ? (
              <Ionicons
                name="chevron-up"
                style={{ position: "absolute", right: 10, top: 10 }}
                size={20}
                color={Colors.MEMBERCOL}
              />
            ) : (
              <Ionicons
                name="chevron-down"
                style={{ position: "absolute", right: 10, top: 10 }}
                size={20}
                color={Colors.MEMBERCOL}
              />
            )}
            
          </TouchableOpacity>
          <View style={styles.row}>
            <AntDesign name="pluscircleo" size={20} color={Colors.MEMBERCOL} />
            <Text style={styles.addMemberText}>Add new member</Text>
          </View>

        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigateToAddMembers}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
        <RoleModel visible={roleModalVisible} onClose={handleCloseRoleModal}   onRoleSelect={handleRoleSelect} />

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
    color: Colors.MEMBERCOL,
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
    alignItems: "start",
    marginVertical: 10,
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
    borderColor: "red", // Change border color to red
  },
  header: {
    marginVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center content horizontally
  },
  inputBox: {
    width: "100%",
    marginTop: 20,
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
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  visibilityIcon: {
    position: "absolute",
    right: 10,
    top: "-23%",
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
  addMemberText: {
    color: Colors.MEMBERCOL,
    fontFamily: "appfont-medium",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default AddMembers;
