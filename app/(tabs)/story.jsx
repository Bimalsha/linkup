import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../../constants";

const Story = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainview}>
        <Text style={styles.uName}>Updates</Text>

        <View style={styles.statsarea}>
          {/* myprofile */}
          <View style={styles.myUp}>
            <Image
              source={images.propic}
              resizeMode="contain"
              style={styles.propic}
            />
            <View style={styles.storyplus}>
              <Image
                source={icons.story}
                style={styles.story}
                tintColor={"#fff"}
                resizeMode="contain"
              />
            </View>
            <View style={styles.textpro}>
              <Text style={styles.namepro}>My Updates</Text>
            </View>
          </View>
          {/* myprofile */}

          {/* other user status */}
          <View style={styles.myUp}>
            <Image
              source={images.propic}
              resizeMode="contain"
              style={styles.propic}
            />
            <View style={styles.textpro}>
              <Text style={styles.namepro} umberOfLines={1}>
                Upul
              </Text>
            </View>
          </View>
          {/* other user status */}
        </View>
      </View>
      <View style={styles.upperview}>
        <Pressable
          onPress={() => {
            Alert.alert("Hi", "hi");
          }}
        >
          <Image
            source={icons.story}
            style={styles.addUpdate}
            tintColor={"#fff"}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainview: {
    padding: 15,
    backgroundColor: "#f3fffb",
    flex: 2,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  uName: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 22,
  },
  statsarea: {
    marginVertical: 10,
    flexDirection: "row",
    width: "100%",
    height: 70,
    alignItems: "center",
    gap: 20,
  },
  myUp: {
    height: 70,
    width: 70,
  },
  propic: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  storyplus: {
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    height: 75,
    widthL: 75,
  },
  story: {
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: "center",
    backgroundColor: "#0c885f",
  },
  textpro: {
    flexDirection: "row",
    paddingTop: 10,
  },
  namepro: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
  },
  upperview: {
    flex: 8,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  addUpdate: {
    backgroundColor: "#0c885f",
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
