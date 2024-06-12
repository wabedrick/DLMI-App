import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DLMILog from "@/assets/images/dlmi-icon-logo.png";
import { StackNavigationProp } from "@react-navigation/stack";

import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/components/navigation/types";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
    >
      <Image
        source={DLMILog}
        style={{ height: 360, width: 380, borderRadius: 180 }}
      />

      <Text
        style={{
          fontSize: 22,
          color: "#F96163",
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        2 Peter 3:18
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "#3c444c",
          fontWeight: "bold",
          marginTop: 8,
          marginBottom: 40,
          paddingHorizontal: 36,
        }}
      >
        But grow in grace, and in the knowledge of our Lord and Saviour Jesus
        Christ. To him be glory both now and forever. Amen.
      </Text>
      {/* <Text
        style={{
          color: "#3c444c",
          fontSize: 44,
          fontWeight: "bold",
          marginBottom: 50,
        }}
      >
        Be a soul Winner
      </Text> */}

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          backgroundColor: "#F96163",
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
          borderRadius: 18,
          marginBottom: 8,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{
          backgroundColor: "#F96163",
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
          borderRadius: 18,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
          Register
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
