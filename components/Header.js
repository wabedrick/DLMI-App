import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import DLMILog from "@/assets/images/dlmi-icon-logo.png";

const Header = ({ headerText, headerIcon }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        marginBottom: 16,
      }}
    >
      {/* <Text style={{ fontSize: 22, marginRight: 4 }}>Hi,</Text> */}
      <Image
        source={DLMILog}
        style={{
          height: 30,
          width: 30,
          borderRadius: 30,
          marginEnd: 4,
          marginStart: 8,
        }}
      />
      <Text
        style={{
          flex: 1,
          fontSize: 18,
          fontWeight: "700",
          letterSpacing: 0.5,
          fontFamily: "serif",
        }}
      >
        {headerText}
      </Text>
      <FontAwesome name={headerIcon} size={24} color="#f96163" />
      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <Text
          style={{
            marginLeft: 8,
            marginRight: 8,
            fontSize: 18,
            color: "lightgreen",
            fontWeight: "bold",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
