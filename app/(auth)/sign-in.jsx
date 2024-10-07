import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { icons, images } from "../../constants";
import { router } from "expo-router";

const SignIn = () => {
  const [showPassword, setshowPassword] = useState(false);
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
              <Text style={styles.userletter}>AB</Text>
            </LinearGradient>
          </View>
          <Text style={styles.signintext}>Sign In</Text>

          <View>
            <Text>Mobile Number</Text>
            <View style={styles.inputs}>
              <TextInput
                placeholder="077 *** ** **"
                style={styles.mobile}
                keyboardType="number-pad"
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
              onPress={() => {
                router.push("/sign-in");
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
  userletter: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 32,
  },
});
