import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Contact Us Screen!</Text>
      {/* Add your contact us screen content here */}
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
