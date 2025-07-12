import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function InviteScreen() {
  const { token } = useLocalSearchParams<{ token: string }>();

  useEffect(() => {
    if (token) {
      // Handle the invite token logic here
      console.log("Received invite token:", token);
      // Process the invitation
      handleInvite(token);
    }
  }, [token]);

  const handleInvite = (inviteToken: string) => {
    // Your invite handling logic
    // e.g., API call to accept invitation
    console.log("Processing invite with token:", inviteToken);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Processing Invitation</Text>
      {token ? <Text>Token: {token}</Text> : <Text>No token received</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
