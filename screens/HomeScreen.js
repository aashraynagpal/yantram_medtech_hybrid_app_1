import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import YantramBannerImage from "../assets/yantram-banner.png";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <StatusBar style="light" />

      
      <Image source={YantramBannerImage} style={styles.banner} />

      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TextInput
            style={[styles.input, styles.inputUsername]}
            placeholder="Login id"
            placeholderTextColor="#cdcdcf"
          />

          <TextInput
            style={[styles.input, styles.inputPassword]}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#cdcdcf"
          />

          <TouchableOpacity style={styles.button}
            onPress={() => navigation.push("Dashboard")}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          </View>

        <View style={styles.footer}>
          <View style={styles.divider}>

          </View>

  <TouchableOpacity style={[styles.button, styles.buttonRegister]}>
    <Text style={[styles.buttonText, styles.buttonRegisterText]}>
      EXIT
    </Text>
  </TouchableOpacity>
</View>
</SafeAreaView>
</>
);
}

const styles = StyleSheet.create({
  banner: {
    resizeMode: "contain",
    width: "100%",
    height: null,
    aspectRatio: 750 / 460, // Image ratio
    marginVertical: 75,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    padding: 22,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cdcdcf",
    color: "#333333",
    fontSize: 16,
    height: 44,
    paddingHorizontal: 15,
  },
  inputUsername: {
    borderBottomWidth: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  inputPassword: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    
  },
  button: {
    height: 42,
    borderRadius: 6,
    backgroundColor: "#1977f3",
    justifyContent: "center",
    marginVertical: 32,
  },
  buttonText: {
    color: "#b4cafb",
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    paddingVertical: 8,
  },
  linkText: {
    color: "#1c6ede",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    padding: 22,
    paddingBottom: 0,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    marginBottom: 10,
  },
  dividerLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#cbccd0",
  },
  dividerText: {
    width: 50,
    textAlign: "center",
  },
  buttonRegister: {
    width: "100%",
    backgroundColor: "#e7f3ff",
    marginVertical: -260,
  },
  buttonRegisterText: {
    color: "#1077f7",
  },
});