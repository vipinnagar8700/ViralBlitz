import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import CheckBox from "react-native-checkbox";
import * as ImagePicker from "expo-image-picker";
const { width } = Dimensions.get("window") * 4;
import Colors from "../../../assets/Shared/Colors";
import Checkbox from "../../Fields/Checkbox";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const PostsEngagements = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const maxCharacters = 2200;
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const handleChangeText = (text) => {
    setTextInputValue(text);
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const data = [
    { id: 1, name: "Health" },
    { id: 2, name: "Education" },
    { id: 3, name: "Technology" },
    { id: 4, name: "Food" },
    { id: 5, name: "Fitness" },
    { id: 6, name: "Fashion" },
    { id: 7, name: "Travel" },
    { id: 8, name: "Finance" },
    { id: 9, name: "Music" },
    { id: 10, name: "Art" },
  ];

  return (
    <View style={{ backgroundColor: Colors.white, flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            style={{ fontFamily: "appfont-bold" }}
            color={Colors.MEMBERCOL}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Engagements</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false} // Hide vertical scrollbar
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.contentContainera}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: width,
              }}
            >
              {data &&
                data.map((item) => (
                  <Image
                    key={item.id}
                    source={require("../../../assets/images/li.png")}
                    style={styles.taga}
                  />
                ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.contentContainera}>
          {!image && ( // Render TouchableOpacity only if image is not selected
            <TouchableOpacity
              style={{
                width: Dimensions.get("screen").width * 0.89,
                height: 170,

                color: Colors.Black,
                borderRadius: 10,
                backgroundColor: Colors.MAIN,
                justifyContent: "center", // Center vertically
                alignItems: "center", // Center horizontally
                margin: 2,
                marginTop: 10,
              }}
              onPress={pickImage}
            >
              <Feather name="upload" size={24} color={Colors.MEMBERCOL} />
              <Text
                style={{
                  color: Colors.MEMBERCOL,
                  fontFamily: "appfont-light",
                  fontSize: 20,
                }}
              >
                Add Media
              </Text>
            </TouchableOpacity>
          )}
          {image && ( // Conditionally render the image if it exists
            <View style={{}}>
              <Image
                source={{ uri: image }}
                style={{
                  width: Dimensions.get("screen").width * 0.89,
                  height: 270,
                  borderRadius: 10,
                  margin: 2,
                }}
              />
            </View>
          )}
        </View>
        <View style={[styles.contentContainera, { marginVertical: 10 }]}>
          <Text style={styles.label}>First Campaign</Text>
          <Text style={styles.labela}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia... See more
          </Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            borderColor: Colors.MAIN,
            borderWidth: 2,
            borderLeftWidth: 0,
            padding: 10,
            borderRightWidth: 0,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontFamily: "appfont-light",
              color: Colors.Black,
            }}
          >
            <SimpleLineIcons name="like" size={20} color={Colors.MEMBERCOL} /> 545{" "}
          </Text>
          <Text>
            <Fontisto name="commenting" size={20} color={Colors.MEMBERCOL} /> 545
          </Text>
          <Text>
            <SimpleLineIcons name="share-alt" size={20} color={Colors.MEMBERCOL} />23
          </Text>
        </View>

        <View
          style={[
            styles.contentContainer,
            {
              marginVertical: 10,
              marginHorizontal: 20,
              flexDirection: "row",
              borderColor: Colors.MAIN,
              borderWidth: 1,
              borderRadius: 10,
            },
          ]}
        >
          <Image
            source={require("../../../assets/images/user.jpg")}
            style={styles.Avatar}
          />
          <View style={{ gap: 2 }}>
            <Text
              style={{
                fontFamily: "appfont-medium",
                color: Colors.Black,
                marginLeft: 10,
                fontSize: 18,
              }}
            >
              Joana Almeida
            </Text>
            <Text
              style={{
                fontFamily: "appfont-light",
                color: Colors.Black,
                marginLeft: 10,
                fontSize: 15,
              }}
            >
              Fantastic! Keep going 🎉{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 40,
                padding: 5,
                marginLeft: 6,
              }}
            >
              <Text
                style={{ fontFamily: "appfont-light", color: Colors.MEMBERCOL }}
              >
                Like
              </Text>
              <Text
                style={{ fontFamily: "appfont-light", color: Colors.MEMBERCOL }}
              >
                Reply
              </Text>
              <Text style={{ fontFamily: "appfont-light", color: Colors.MAIN }}>
                23 h
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.contentContainer,
            {
              marginVertical: 10,
              marginHorizontal: 20,
              flexDirection: "row",
              borderColor: Colors.MAIN,
              borderWidth: 1,
              borderRadius: 10,
            },
          ]}
        >
          <Image
            source={require("../../../assets/images/user.jpg")}
            style={styles.Avatar}
          />
          <View style={{ gap: 2 }}>
            <Text
              style={{
                fontFamily: "appfont-medium",
                color: Colors.Black,
                marginLeft: 10,
                fontSize: 18,
              }}
            >
              Joana Almeida
            </Text>
            <Text
              style={{
                fontFamily: "appfont-light",
                color: Colors.Black,
                marginLeft: 10,
                fontSize: 15,
              }}
            >
              Fantastic! Keep going 🎉{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 40,
                padding: 5,
                marginLeft: 6,
              }}
            >
              <Text
                style={{ fontFamily: "appfont-light", color: Colors.MEMBERCOL }}
              >
                Like
              </Text>
              <Text
                style={{ fontFamily: "appfont-light", color: Colors.MEMBERCOL }}
              >
                Reply
              </Text>
              <Text style={{ fontFamily: "appfont-light", color: Colors.MAIN }}>
                23 h
              </Text>
            </View>
            <View
              style={[
                styles.contentContainer,
                { flexDirection: "row", gap: 10 },
              ]}
            >
              <Image
                source={require("../../../assets/images/user.jpg")}
                style={styles.Avatara}
              />
              <TextInput
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 10,
                  width: "70%",
                  minHeight: 70,
                  textAlignVertical: "top", // Align text to the top
                  marginVertical: 1,
                  borderWidth: 1,
                  borderColor: Colors.MAIN,
                  color: Colors.Black,
                  backgroundColor: Colors.white,
                }}
                multiline
                placeholder="Write a reply..."
                onChangeText={handleChangeText}
                value={textInputValue}
                maxLength={maxCharacters}
              />
            </View>
            <View
              style={[styles.contentContainera,{
                flexDirection:'row',justifyContent:'space-between'
              }]}
            >
                <Text></Text>
                <Text></Text>
              <Text
                style={{
                  fontFamily: "appfont-medium",
                  color: Colors.MEMBERCOL,
                }}
              >
                Send{" "}
                <FontAwesome name="send" size={22} color={Colors.MEMBERCOL}  style={{marginLeft:10}}/>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  Avatara: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  tag: {
    fontFamily: "appfont-light",
    flexDirection: "row",
    borderColor: Colors.MAIN,
    borderWidth: 1,
    padding: 6,
    borderRadius: 15,
  },
  label: {
    fontSize: 16,
    marginTop: 6,
    marginBottom: 4,
    fontFamily: "appfont-medium",
  },
  labela: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 4,
    fontFamily: "appfont-light",
  },
  header: {
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 22,
    color: Colors.Black,
    fontFamily: "appfont-medium",
  },
  contentContainer: {
    width: width,
    padding: 20,
  },
  contentContainera: {
    width: width,
    paddingHorizontal: 20,
  },
  headerTexta: {
    fontSize: 18,
    color: Colors.Black,
    fontFamily: "appfont-medium",
  },
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  taga: {
    height: 50,
    width: 50,
    fontFamily: "appfont-light",
    flexDirection: "row",
    borderColor: Colors.MAIN,
    borderWidth: 1,
    padding: 6,
    borderRadius: 70,
  },
  tagContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },
  input: {
    width: "100%",
    height: 50,
    marginVertical: 1,
    borderWidth: 1,
    padding: 15,
    borderColor: Colors.MAIN,
    borderRadius: 8,
    color: Colors.Black,
    backgroundColor: Colors.white,
  },
  button: {
    width: "100%",
    backgroundColor: "transparent",
    borderColor: Colors.MEMBERCOL,
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    marginBottom: 70,
  },
  buttonText: {
    color: Colors.MEMBERCOL,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "appfont-medium",
  },
});

export default PostsEngagements;
