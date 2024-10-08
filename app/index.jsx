import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = () => {

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
        style={[styles.flex_1,styles.lineararea]}
      >
        <Image source={images.logoSmall} resizeMode="contain" style={styles.smalllogo} />
        <View style={styles.coverarea}>
          <Image source={images.cover} resizeMode="contain" style={styles.coverimg}/>
        </View>
        <Text style={styles.welcomegraating}>Connect friends easily & quickly</Text>
        <Text style={styles.caption}>Our chat app is the perfect way to stay connected with friends and familly</Text>
        <TouchableOpacity style={styles.btn}
        
        onPress={
          ()=>{
            router.push('/sign-in')
          }
        }>
          <Text style={styles.btnText}>Enjoy LinkUp</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
  },
  lineararea:{
    justifyContent:'center',
    padding:40,
    alignItems:'center'
  },
  smalllogo:{
    height:100,
    width:'50%'
  },coverarea:{
    width:'100%',
    alignItems:'center'
  },coverimg:{
    width:400,
    height:400
  },
  welcomegraating:{
    color:"#fff",
    fontFamily:'Poppins-SemiBold',
    fontSize:32,
    textAlign:'center'
  },
  caption:{
    color:'#fff',
    fontFamily:"Poppins-Regular",
    textAlign:'center'
  },
  btn:{
    backgroundColor:'#3cbf92',
    width:300,
    height:50,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15
  },
  btnText:{
    color:'#fff',
    fontFamily:'Poppins-SemiBold',
    fontSize:18
  }

});
