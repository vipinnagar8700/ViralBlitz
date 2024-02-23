import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
  } from "react-native";
  import React from "react";
  import Colors from "../../assets/Shared/Colors";
  
  const Notifications = () => {


    const Categorieslist = [
      {
        id: "1",
      },
      {
        id: "2",
      },
      {
        id: "3",
      },
      {
        id: "4",
      },
      {
        id: "5",
       
      },
      {
        id: "6",
      },
      {
        id: "7",
      },
      {
        id: "8",
      },
    ];
    return (
      <ScrollView
        showsVerticalScrollIndicator={false} // Hide vertical scrollbar
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ padding: 20 }}>
          <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            data={Categorieslist}
            renderItem={({ item, index }) => (
                <View style={{ paddingVertical: 7 }}>
                  <View
                    style={{
                      width: "100%",
                      backgroundColor: Colors.white,
                      padding: 10,
                      borderRadius: 10,
                      shadowColor: Colors.MAIN,
                      flexWrap:'wrap',
                      elevation:1
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={{
                          uri: "https://img.freepik.com/free-photo/close-up-delicious-tacos_23-2150830997.jpg?t=st=1707979336~exp=1707982936~hmac=182e0244fa08be9e09b93369be26a1c43cdb2c5174a4d2ba2fdf7e0f98ca0c1b&w=996",
                        }}
                        style={{
                          width: Dimensions.get("screen").width * 0.2,
                          height: 70,
                          borderRadius: 10,
                        }}
                      />
  
                      <View
                        style={{ flex: 1}}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            fontFamily: "appfont-medium",
                            marginLeft: 10, flexWrap: "wrap" 
                          }}
                        >
                          Keep your readers updated. Always. No one wants to be
                          the last one to know.
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontFamily: "appfont-light",
                            marginLeft: 10,
                          }}
                        >
                          4 May 2023
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
            )}
          />
        </View>
      </ScrollView>
    );
  };
  
  export default Notifications;
  
  const styles = StyleSheet.create({});
  