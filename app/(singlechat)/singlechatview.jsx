import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";

const SingleChatView = () => {
  const parameters = useLocalSearchParams();

  const [getChatText, setChatText] = new useState();
  const [getChatArray, setChatArray] = new useState([]);

  const [getimage, setImage] = useState();
  useEffect(() => {
    async function fetchChatArray() {
      let userJson = await AsyncStorage.getItem("user");
      let user = JSON.parse(userJson);

      let response = await fetch(
        "http://192.168.8.101:8080/LinkUp/LoadChat?logged_user_id=" +
          user.id +
          "&other_user_id=" +
          parameters.other_user_id
      );

      if (response.ok) {
        let chatArray = await response.json();
        setChatArray(chatArray);
        // console.log(chatArray);
      }
    }

    fetchChatArray();

    setInterval(() => {
      fetchChatArray();
    }, 5000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backview}
          onPress={() => {
            router.push("/chat");
          }}
        >
          <Image
            source={icons.back}
            tintColor={"#012b1c"}
            resizeMode="contain"
            style={styles.backico}
          />
        </Pressable>
        <Pressable
          style={styles.profilearea}
          onPress={async() => {
            router.push("/userprofile");
          }}
        >
          <View>
            <View style={styles.profileview}>
              {parameters.avatar_image_found == "true" ? (
                <Image
                  source={
                    "http://192.168.8.101:8080/LinkUp/AvatarImages/" +
                    parameters.other_user_mobile +
                    ".png"
                  }
                  style={styles.propic}
                />
              ) : (
                <Text style={styles.aletter}>
                  {parameters.other_avatar_letters}
                </Text>
              )}
            </View>
            <View style={styles.activate}>
              <View
                style={
                  parameters.other_user_status == 1
                    ? styles.online
                    : styles.offline
                }
              ></View>
            </View>
          </View>
          <View>
            <Text style={styles.uname}>{parameters.other_user_name}</Text>
            <Text style={styles.time}>{parameters.dateTime}</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.callview}>
            <Image
              source={icons.call}
              resizeMode="contain"
              style={styles.call}
              tintColor={"#676767"}
            />
          </View>
        </Pressable>
      </View>
      <View style={styles.chatarea}>
        <FlatList
          data={getChatArray}
          renderItem={({ item }) => (
            <View
              style={
                item.side == "right"
                  ? styles.chatalignright
                  : styles.chatalignleft
              }
            >
              <View
                style={
                  item.side == "right" ? styles.senderarea : styles.reciverarea
                }
              >
                <Text style={styles.msgtext}>{item.message}</Text>

                {item.side == "right" ? (
                  <Text
                    style={item.status == 1 ? styles.status : styles.status}
                  >
                    {item.status == 1 ? "Seen" : "Dilivered"}
                  </Text>
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.lower}>
        <Pressable
          onPress={async () => {
            let result = await ImagePicker.launchCameraAsync({});

            if (!result.canceled) {
              setImage(result.assets[0].uri);
            }
          }}
        >
          <Image
            source={icons.image}
            resizeMode="contain"
            style={styles.attach}
          />
        </Pressable>
        <TextInput
          style={styles.sendtext}
          placeholder="write your message.."
          value={getChatText}
          onChangeText={(text) => setChatText(text)}
        />
        <Pressable
          onPress={async () => {
            let userJson = await AsyncStorage.getItem("user");
            let user = JSON.parse(userJson);

            if (getChatText.length != 0) {
              let response = await fetch(
                "http://192.168.8.101:8080/LinkUp/SendChat?logged_user_id=" +
                  user.id +
                  "&other_user_id=" +
                  parameters.other_user_id +
                  "&message=" +
                  getChatText
              );
              if (response.ok) {
                let json = await response.json();
                if (json.success) {
                  setChatText("");
                }
              }
            }
          }}
        >
          <Image
            source={icons.send}
            resizeMode="contain"
            style={styles.attach}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SingleChatView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dad9d9",
    flex: 1,
  },
  backview: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    paddingStart: 20,
    flex:1,
  },
  backico: {
    height: 20,
    width: 20,
  },
  profilearea: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    flex:25,
  },
  profileview: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  propic: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  activate: {
    height: 60,
    width: 60,
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  online: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#10f751",
  },
  offline: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#f51b3a",
  },
  uname: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  time: {
    fontFamily: "Poppins-Medium",
    fontSize: 10,
    color: "#676767",
  },
  callview: {
    height: 40,
    justifyContent: "center",
    alignItems: "flex-end",
    flex:2,
    paddingHorizontal:15,
  },
  call: {
    height: 30,
    width: 30,
  },
  chatarea: {
    flex: 9,
  },
  lower: {
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  attach: {
    height: 30,
    width: 30,
    paddingHorizontal: 30,
  },
  sendtext: {
    height: 50,
    width: "70%",
    backgroundColor: "#f0f0f0",
    fontFamily: "Poppins-Medium",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  chatalignleft: {
    width: "100%",
    alignItems: "flex-start",
  },
  chatalignright: {
    width: "100%",
    alignItems: "flex-end",
  },
  reciverarea: {
    width: "auto",
    maxWidth: "70%",
    backgroundColor: "#f0f0f0",
    marginHorizontal: 15,
    marginTop: 8,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  senderarea: {
    width: "auto",
    maxWidth: "70%",
    backgroundColor: "#d3fee8",
    marginHorizontal: 15,
    marginTop: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  msgtext: {
    padding: 5,
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
  status: {
    paddingTop: 3,
    paddingEnd: 8,
    paddingBottom: 4,
    textAlign: "right",
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#04ba44",
  },
  status1: {
    paddingTop: 3,
    paddingEnd: 8,
    paddingBottom: 4,
    textAlign: "right",
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#808080",
  },
  aletter: {
    fontSize: 24,
  },
});
