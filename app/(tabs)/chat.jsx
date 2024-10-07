import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { icons, images } from "../../constants";
import { Link, router } from "expo-router";

const Chat = () => {
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
              <Image
                source={images.propic}
                resizeMode="contain"
                style={styles.usernavpic}
              />
              <Text style={styles.usernavname}>Saman Kumara</Text>
            </View>
          </View>
        </View>

        <View style={styles.chatArea}>
          <View style={styles.chatAreaMargings}>
            {/* chat view box */}
            <Pressable
              onPress={() => {
                router.push("/singlechatview");
              }}
            >
              <View style={styles.chatareaview}>
                <View style={styles.chatProview}>
                  <Image
                    source={images.propic}
                    resizeMode="contain"
                    style={styles.chatPro}
                  />
                  <View style={styles.active}>
                    <View style={styles.online}></View>
                  </View>
                </View>
                <View style={styles.detailsarea}>
                  <Text style={styles.username}>Sman Kumara</Text>
                  <Text numberOfLines={1}>
                    this msg for you hi baib so finally we can say ai noefvfd
                  </Text>
                  <View style={styles.msgcountarea}>
                    <View style={styles.countback}>
                      <Text style={styles.countmsg}>2</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>

            {/* chat view box */}
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
});
