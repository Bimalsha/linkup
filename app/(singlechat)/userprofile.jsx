import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";
import { router } from "expo-router";

const userprofile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            router.push("/singlechatview");
          }}
        >
          <Image source={icons.back} style={styles.back} />
        </Pressable>
      </View>
      <View style={styles.main}>
        <Image
          source={images.propic}
          style={styles.propic}
          resizeMode="contain"
        />
        <Text style={styles.uname}>Upul Shantha</Text>
        <Text styles={styles.date}>Joined Date:2021.04.22</Text>
        <View style={styles.callchat}>
          <View style={styles.chatorcall}>
            <Pressable
              onPress={() => {
                router.push("/singlechatview");
              }}
            >
              <Image
                source={icons.chat}
                style={styles.iconic}
                resizeMode="contain"
                tintColor={"#33ba8e"}
              />
            </Pressable>
          </View>
          <View style={styles.chatorcall}>
            <Pressable>
              <Image
                source={icons.call}
                style={styles.iconic}
                resizeMode="contain"
                tintColor={"#33ba8e"}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default userprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    margin: 20,
    height: 50,
  },
  back: {
    height: 30,
    width: 30,
  },
  main: {
    width: "100%",
    alignItems: "center",
  },
  propic: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  uname: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 22,
  },
  date: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#a6a6a6",
  },
  callchat: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
  },
  chatorcall: {
    flex: 1,
    alignItems: "center",
  },
  iconic: {
    height: 40,
    width: 40,
  },
});
