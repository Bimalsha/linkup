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
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";

const SignUp = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [getAvatar, setAvatar] = useState(icons.uprofileupdate);
  const [getMobile, setMobile] = useState("");
  const [getName, setName] = useState("");
  const [getPassword, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.flex_1}>
      <LinearGradient
        colors={["#012b1c", "#06734e", "#012b1c"]}
        style={styles.flex_1}
      >
        {/* header */}
        <View style={styles.header}>
          <Image source={images.logoSmall} style={styles.logoSmall} />
          <Text style={styles.description}>
            our chat app is the perfect way to stay connected with friends and
            familly
          </Text>
        </View>
        {/* header */}

        {/* signup area */}
        <View style={styles.footer}>
          <View style={styles.proare}>
            <Pressable
              onPress={async () => {
                let result = await ImagePicker.launchImageLibraryAsync({});

                if (!result.canceled) {
                  setAvatar(result.assets[0].uri);
                }
              }}
            >
              <LinearGradient
                colors={["#62e1fb", "#87e8b6"]}
                style={styles.userProfile}
              >
                <Image source={getAvatar} style={styles.uprofileupdate} />
              </LinearGradient>
            </Pressable>
          </View>
          <Text style={styles.signintext}>Sign Up</Text>

          <View>
            <Text>Mobile Number</Text>
            <View style={styles.inputs}>
              <TextInput
                placeholder="077 *** ** **"
                style={styles.mobile}
                inputMode="tel"
                onChangeText={(text) => setMobile(text)}
                maxLength={10}
              />
            </View>
          </View>
          <View>
            <Text>Name</Text>
            <View style={styles.inputs}>
              <TextInput
                placeholder="Ebraham Linkan"
                style={styles.mobile}
                inputMode="text"
                onChangeText={(text) => setName(text)}
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
                maxLength={20}
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
                let formData = new FormData();
                formData.append("mobile", getMobile);
                formData.append("name", getName);
                formData.append("password", getPassword);

                if (getAvatar != icons.uprofileupdate) {
                  formData.append("avatarImage", {
                    name: "avatar.png",
                    type: "image/png",
                    uri: getAvatar,
                  });
                }

                let response = await fetch(
                  "http://192.168.8.101:8080/LinkUp/SignUp",
                  {
                    method: "POST",
                    body: formData,
                  }
                );
                if (response.ok) {
                  let json = await response.json();
                  if (json.success) {
                    Alert.alert("Success", json.message);
                    router.push("/sign-in");

                    let user = json.user;
                  } else {
                    Alert.alert("Error", json.message);
                  }
                }
              }}
            >
              <Text style={styles.btnText}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.orview}>
              <Text style={styles.or}>or</Text>
              <View style={styles.borderbottom}></View>
            </View>
            <Pressable
              onPress={() => {
                router.push("/sign-in");
              }}
            >
              <Text style={styles.signup}>
                Allready have a account |{" "}
                <Text style={styles.colorsignup}>Sign In</Text>
              </Text>
            </Pressable>
          </View>
        </View>
        {/* signup area */}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUp;

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
    resizeMode: "contain",
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
    borderRadius: 75,
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
  uprofileupdate: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
