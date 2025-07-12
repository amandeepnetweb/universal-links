import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
    </Stack>
  );
};

export default RootLayout;
