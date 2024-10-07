import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";

import { icons } from "../../constants";

// tab bar icon component

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.tabiconview}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={styles.tabIcon}
      />

      <Text
        style={[
          focused ? styles.font_semibold : styles.font_regular,
          { color: color },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#0c885f",
          tabBarInactiveTintColor: "#021947",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderColor: "#fff",
            height: 85,
          },
        }}
      >
        <Tabs.Screen
          name="chat"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.chat}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="story"
          options={{
            title: "Updates",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.updates}
                color={color}
                name="Updates"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.user}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  tabiconview: {
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  tabIcon: {
    height: 24,
    width: 24,
  },
  font_semibold: {
    fontFamily: "Poppins-SemiBold",
  },
  font_regular: {
    fontFamily: "Poppins-Regular",
  },
});
