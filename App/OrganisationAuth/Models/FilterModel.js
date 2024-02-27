import React, { useState } from "react";
import { View, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import Colors from "../../../assets/Shared/Colors";

const FilterModel = ({ visible, onClose, onFilterSelect }) => {
  const [selectedFilter, setselectedFilter] = useState(null);

  const handleRoleSelection = (role) => {
    setselectedFilter(role);
    onFilterSelect(role);
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
            <Text style={styles.modalHeading}>Sort by</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </View>

          <RadioButton.Group
            onValueChange={handleRoleSelection}
            value={selectedFilter}
          >
            <View style={styles.roleContainer}>
              <RadioButton.Item
                label="None"
                value="None"
                color={
                  selectedFilter === "None" ? Colors.MEMBERCOL : Colors.MAIN
                }
                style={styles.radioItem}
                labelStyle={[
                  styles.roleText,
                  selectedFilter === "None" && styles.selectedFilterText,
                ]}
              />
              <RadioButton.Item
                label="Most impressions"
                value="Most impressions"
                color={
                  selectedFilter === "Most impressions"
                    ? Colors.MEMBERCOL
                    : Colors.MAIN
                }
                style={styles.radioItem}
                labelStyle={[
                  styles.roleText,
                  selectedFilter === "Most impressions" &&
                    styles.selectedFilterText,
                ]}
              />
              <RadioButton.Item
                label="Least impressions"
                value="Least impressions"
                color={
                  selectedFilter === "Least impressions"
                    ? Colors.MEMBERCOL
                    : Colors.MAIN
                }
                style={styles.radioItem}
                labelStyle={[
                  styles.roleText,
                  selectedFilter === "Least impressions" &&
                    styles.selectedFilterText,
                ]}
              />
              <RadioButton.Item
                label="Newest first"
                value="Newest first"
                color={
                  selectedFilter === "Newest first"
                    ? Colors.MEMBERCOL
                    : Colors.MAIN
                }
                style={styles.radioItem}
                labelStyle={[
                  styles.roleText,
                  selectedFilter === "Newest first" &&
                    styles.selectedFilterText,
                ]}
              />
              <RadioButton.Item
                label="Oldest first"
                value="Oldest first"
                color={
                  selectedFilter === "Oldest first"
                    ? Colors.MEMBERCOL
                    : Colors.MAIN
                }
                style={styles.radioItem}
                labelStyle={[
                  styles.roleText,
                  selectedFilter === "Oldest first" &&
                    styles.selectedFilterText,
                ]}
              />
            </View>
          </RadioButton.Group>
          <View style={{ flexDirection: "row", width: "100%",gap:10 }}>
            <TouchableOpacity style={[styles.button, { borderWidth: 1 }]}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: Colors.MEMBERCOL }]}
            >
              <Text style={[styles.buttonText, { color: Colors.white }]}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "appfont-medium",
  },
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

  roleText: {
    fontSize: 16,
    fontFamily: "appfont-medium",
  },
  selectedFilterText: {
    color: Colors.MEMBERCOL,
    // Define any other styles for the selected role text here
  },
});

export default FilterModel;
