import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs initialRouteName="(home)/index">
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="invite/index"
        options={{
          title: "Invite",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person-add" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact-us/index"
        options={{
          title: "Contact Us",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="mail" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
