import React, { useState } from "react";
import { View, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import Colors from "../../../assets/Shared/Colors";

const RoleModel = ({ visible, onClose, onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    onRoleSelect(role);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.modalHeading}></Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </View>

          <RadioButton.Group onValueChange={handleRoleSelection} value={selectedRole}>
            <View style={styles.roleContainer}>
              <RadioButton.Item
                label="Admin"
                value="Admin"
                color={selectedRole === "Admin" ? Colors.MEMBERCOL : Colors.MAIN}
                style={styles.radioItem}
                labelStyle={[styles.roleText, selectedRole === "Admin" && styles.selectedRoleText]}
              />
              <RadioButton.Item
                label="Manager"
                value="Manager"
                color={selectedRole === "Manager" ? Colors.MEMBERCOL : Colors.MAIN}
                style={styles.radioItem}
                labelStyle={[styles.roleText, selectedRole === "Manager" && styles.selectedRoleText]}
              />
              <RadioButton.Item
                label="Content Creator"
                value="ContentCreator"
                color={selectedRole === "ContentCreator" ? Colors.MEMBERCOL : Colors.MAIN}
                style={styles.radioItem}
                labelStyle={[styles.roleText, selectedRole === "ContentCreator" && styles.selectedRoleText]}
              />
            </View>
          </RadioButton.Group>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: Colors.white,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  modalHeading: {
    fontSize: 24,
    marginBottom: 10,
    color: Colors.black,
    fontFamily: "appfont-medium",
  },
  closeButton: {
    fontSize: 18,
    color: Colors.SplashButton,
    textAlign: "center",
  },
  roleContainer: {
    flexDirection: "column",
  },
  radioItem: {
    marginBottom: 10,
  },
  roleText: {
    fontSize: 16,
    fontFamily: "appfont-medium",
  },
  selectedRoleText: {
    color: Colors.MEMBERCOL,
    // Define any other styles for the selected role text here
  },
});

export default RoleModel;
