import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { icons, images } from "../../constants";
import { router } from "expo-router";
import { Image } from "expo-image";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [getMobile, setMobile] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getLetters, setLetters] = useState("");
  const [getAvatar, setAvatar] = useState(false);

  
  useEffect(
    ()=>{
      async function CheckUserAsyncStorage() {
   
        try {
          let userJson = await AsyncStorage.getItem("user");
          if (userJson != null) {
            router.replace("/chat");
          }
        } catch {
          console.log();
        }
    }
    CheckUserAsyncStorage();
    }
  );


  return (
    <SafeAreaView style={styles.flex_1}>
      <LinearGradient
        colors={["#012b1c", "#06734e", "#012b1c"]}
        style={styles.flex_1}
      >
        <View style={styles.header}>
          <Image
            source={images.logoSmall}
            resizeMode="contain"
            style={styles.logoSmall}
          />
          <Text style={styles.description}>
            our chat app is the perfect way to stay connected with friends and
            familly
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.proare}>
            <LinearGradient
              colors={["#62e1fb", "#87e8b6"]}
              style={styles.userProfile}
            >
              {getAvatar == true ? (
                <Image
                  source={
                    "http://192.168.8.101:8080/LinkUp/AvatarImages/" +
                    getMobile +
                    ".png"
                  }
                  style={styles.propic}
                />
              ) : (
                <Text style={styles.userletter}>{getLetters}</Text>
              )}
            </LinearGradient>
          </View>
          <Text style={styles.signintext}>Sign In</Text>

          <View>
            <Text>Mobile Number</Text>
            <View style={styles.inputs}>
              <TextInput
                placeholder="077 *** ** **"
                style={styles.mobile}
                inputMode="tel"
                onChangeText={(text) => setMobile(text)}
                onEndEditing={async () => {
                  let response = await fetch(
                    "http://192.168.8.101:8080/LinkUp/LoadNameOrImage?mobile=" +
                      getMobile
                  );
                  if (response.ok) {
                    let json = await response.json();
                    setLetters(json.letters);
                    if (json.avatar == true) {
                      setAvatar(true);
                    } else {
                      setAvatar(false);
                    }
                  }
                }}
              />
            </View>
          </View>
          <View>
            <Text>Password</Text>
            <View style={styles.inputs}>
              <TextInput
                placeholder="User14#$"
                style={styles.mobile}
                secureTextEntry={!showPassword}
                onChangeText={(text) => setPassword(text)}
              />
              <Pressable onPress={() => setshowPassword(!showPassword)}>
                <Image
                  source={!showPassword ? icons.eyeHide : icons.eye}
                  style={styles.pass}
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.navigate}>
            <TouchableOpacity
              style={styles.btn}
              onPress={async () => {
                let response = await fetch(
                  "http://192.168.8.101:8080/LinkUp/SignIn",
                  {
                    method: "POST",
                    body: JSON.stringify({
                      mobile: getMobile,
                      password: getPassword,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
    
                if (response.ok) {
                  let json = await response.json();
                  if (json.success) {
                    // user regisration complete
    
                    let user = json.user;

    
                    try {
                      await AsyncStorage.setItem("user", JSON.stringify(user));
                    
                      router.push("/chat");
                    } catch(e) {
                      Alert.alert("Error","Unable to Process your request");
                    }
                  } else {
                    // PROBLEM OCCURED
                    Alert.alert("Error", json.message);
                  }
                }
              }}
            >
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.orview}>
              <Text style={styles.or}>or</Text>
              <View style={styles.borderbottom}></View>
            </View>
            <Pressable
              onPress={() => {
                router.push("sign-up");
              }}
            >
              <Text style={styles.signup}>
                New User |{" "}
                <Text style={styles.colorsignup}>Create Account</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
  },
  header: {
    width: "100%",
    flex: 3,
    padding: 20,
    justifyContent: "center",
  },
  footer: {
    flex: 12,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    justifyContent: "center",
  },

  logoSmall: {
    width: 100,
    height: 70,
  },
  description: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
  signintext: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 22,
    marginVertical: 20,
    color: "#012b1c",
    marginTop: 0,
  },

  inputs: {
    backgroundColor: "#e5e5e5",
    width: "100%",
    padding: 10,
    borderRadius: 12,
    marginTop: 4,
    border: 1,
    borderStyle: "solid",
    borderColor: "#d8feed",
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  mobile: {
    width: "90%",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    paddingStart: 10,
  },
  pass: {
    height: 20,
    width: 20,
  },
  navigate: {
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#012b1c",
    width: "100%",
    height: 50,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
  orview: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  or: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginVertical: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    zIndex: 10,
  },
  borderbottom: {
    borderBottomColor: "#dedede",
    borderStyle: "solid",
    borderBottomWidth: 2,
    width: "100%",
    position: "absolute",
    height: 5,
  },
  signup: {
    fontFamily: "Poppins-SemiBold",
  },
  colorsignup: {
    color: "#2ab589",
  },
  userProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  proare: {
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  userletter: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 40,
    color: "#012b1c",
  },
  propic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
