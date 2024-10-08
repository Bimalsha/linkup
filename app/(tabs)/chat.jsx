import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { icons, images } from "../../constants";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";

const Chat = () => {
  const [getChatArray, setChatArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let userJson = await AsyncStorage.getItem("user");
      let user = JSON.parse(userJson);

      let response = await fetch(
        "http://192.168.8.101:8080/LinkUp/LoadHome?id=" + user.id
      );

      if (response.ok) {
        let json = await response.json();

        if (json.success) {
          let chatArray = json.jsonChatArray;
          // console.log(chatArray);
          setChatArray(chatArray);
        }
      }
    }

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.flex_1}>
      <LinearGradient
        colors={["#012b1c", "#fff", "#192f6a"]}
        style={styles.flex_1}
      >
        {/* header */}
        <View style={styles.header}>
          {/* header upper */}
          <View style={styles.headupper}>
            <View style={styles.flex_1}>
              <View style={styles.searchback}>
                <Image
                  source={icons.search}
                  tintColor={"#0c885f"}
                  resizeMode="contain"
                  style={styles.searchimage}
                />
              </View>
            </View>
            <View style={styles.centerhead}>
              <Text style={styles.headertext}>LinkUp</Text>
            </View>
            <View style={styles.flex_1}>
              <View style={styles.propicarea}>
                <Pressable
                  onPress={() => {
                    router.push("/profile");
                  }}
                >
                  <Image
                    source={images.propic}
                    resizeMode="contain"
                    style={styles.propic}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          {/* header footer */}
          <View style={styles.headerfooter}>
            <View style={styles.usernavview}>
              <Image source={images.propic} style={styles.usernavpic} />
              <Text style={styles.usernavname}>Saman Kumara</Text>
            </View>
          </View>
        </View>

        <View style={styles.chatArea}>
          <View style={styles.chatAreaMargings}>
            <FlatList
              data={getChatArray}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    router.push({ pathname: "/singlechatview", params: item });
                  }}
                >
                  <View style={styles.chatareaview}>
                    <View style={styles.chatProview}>
                      {item.avatar_image_found == true ? (
                        <Image
                          source={
                            "http://192.168.8.101:8080/LinkUp/AvatarImages/" +
                            item.other_user_mobile +
                            ".png"
                          }
                          style={styles.chatPro}
                        />
                      ) : (
                        <Text style={styles.profileText}>
                          {item.other_avatar_letters}
                        </Text>
                      )}

                      <View style={styles.active}>
                        <View
                          style={
                            item.other_user_status == 1
                              ? styles.online
                              : styles.offline
                          }
                        ></View>
                      </View>
                    </View>
                    <View style={styles.detailsarea}>
                      <Text style={styles.username}>
                        {item.other_user_name}
                      </Text>
                      <Text numberOfLines={1}>{item.message}</Text>
                      {item.count == 0 ? (
                        <View style={styles.msgcountarea}>
                          {/* <View style={styles.countback}>
                            <Text style={styles.countmsg}>2</Text>
                          </View> */}
                        </View>
                      ) : (
                        <View style={styles.msgcountarea}>
                          <View style={styles.countback}>
                            <Text style={styles.countmsg}>{item.count}</Text>
                          </View>
                        </View>
                      )}
                    </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
  },
  header: {
    height: 120,
    width: "100%",
    flex: 2,
  },
  headupper: {
    alignItems: "center",
    flexDirection: "row",
    padding: 14,
  },
  searchback: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchimage: {
    height: 20,
    width: 20,
  },
  centerhead: {
    flex: 1,
    alignItems: "center",
  },
  headertext: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
  },
  propicarea: {
    flex: 1,
    alignSelf: "flex-end",
  },
  propic: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  headerfooter: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "yellow",
  },
  usernavview: {
    height: 60,
    alignItems: "center",
  },
  usernavpic: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  usernavname: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#fff",
  },
  chatArea: {
    height: 200,
    width: "100%",
    backgroundColor: "#fff",
    flex: 6,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  chatAreaMargings: {
    padding: 15,
  },
  chatareaview: {
    height: 90,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  chatProview: {
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  chatPro: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  active: {
    height: 70,
    width: 70,
    zIndex: 10,
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  online: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#10f751",
  },
  detailsarea: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: "column",
    flex: 8,
    justifyContent: "center",
  },
  username: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#012b1c",
  },
  msgcountarea: {
    height: 60,
    width: "100%",
    zIndex: 10,
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  countback: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: "#f51d1d",
    marginStart: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  countmsg: {
    fontFamily: "Poppins-SemiBold",
    color: "#ffffff",
  },
  profileText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
    color: "#10f751",
  },
  offline: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#f51b3a",
  },
});
