import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";

const Profile = () => {
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
        <View style={styles.inputrow}>
          <TextInput value="0774227449" style={styles.inputfield} />
          <Image
            source={icons.call}
            style={styles.call}
            tintColor={"#6f7070"}
          />
        </View>
        <View style={styles.inputrow}>
          <TextInput value="Upul Shantha" style={styles.inputfield} />
          <Image
            source={icons.user}
            style={styles.call}
            tintColor={"#6f7070"}
          />
        </View>

        <View style={styles.buttonarea}>
          <TouchableOpacity style={styles.buttonedit}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonsave}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

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
  inputrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    marginTop: 5,
  },
  inputfield: {
    height: 50,
    width: "70%",
    backgroundColor: "#f0f0f0",
    fontFamily: "Poppins-Medium",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  call: {
    height: 25,
    width: 25,
  },
  buttonarea:{
    flexDirection:'row',
    gap:20
  },

  buttonedit: {
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    marginTop: 40,
    width:100,
    alignItems:'center'
  },
  editText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: "Poppins-Medium",
  },
  buttonsave:{
    backgroundColor: "#0b7553",
    borderRadius: 15,
    marginTop: 40,
    width:100,
    alignItems:'center'
  },
  saveText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    color:'#fff'
  },
});
