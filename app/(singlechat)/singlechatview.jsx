import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";
import { router } from "expo-router";

const SingleChatView = () => {
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
          onPress={() => {
            router.push("/userprofile");
          }}
        >
          <View>
            <View style={styles.profileview}>
              <Image
                source={images.propic}
                style={styles.propic}
                resizeMode="contain"
              />
            </View>
            <View style={styles.activate}>
              <View style={styles.online}></View>
            </View>
          </View>
          <View>
            <Text style={styles.uname}>Upul Shnatha</Text>
            <Text style={styles.time}>2024.06.01</Text>
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
        {/* chatleft */}
        <View style={styles.chatalignleft}>
          <View style={styles.reciverarea}>
            <Text style={styles.msgtext}>
              he screenOptions prop is passed to the Stack.Navigator, and inside
              it, you set headerShown: false to globally hide the header for all
              screens within the stack.
            </Text>
          </View>
        </View>
        {/* chatleft */}
        {/* chatright */}
        <View style={styles.chatalignright}>
          <View style={styles.senderarea}>
            <Text style={styles.msgtext}>
              he screenOptions prop is passed to the Stack.Navigator, and inside
              it, you set headerShown: false to globally hide the header for all
              screens within the stack.
            </Text>

            <Text style={styles.status}>
              Seen
            </Text>
          </View>
        </View>
        {/* chatright */}

      </View>
      <View style={styles.lower}>
        <Image
          source={icons.image}
          resizeMode="contain"
          style={styles.attach}
        />
        <TextInput style={styles.sendtext} placeholder="write your message.." />
        <Pressable>
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
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    paddingStart: 20,
  },
  backico: {
    height: 20,
    width: 20,
  },
  profilearea: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
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
    width: 130,
    justifyContent: "center",
    alignItems: "flex-end",
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
  status:{
    paddingTop:3,
    paddingEnd:8,
    paddingBottom:4,
    textAlign:'right',
    fontFamily:'Poppins-Medium',
    fontSize:12,
    color:'#04ba44',
  }
});
