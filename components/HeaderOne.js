import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const HeaderOne = ({ iconName }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 1 }}>
        <FontAwesome
          name={iconName}
          size={20}
          style={{ paddingHorizontal: 12, color: "green" }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Welcome")}
        style={{ marginEnd: 16 }}
      >
        <Text style={{ color: "green", fontSize: 18, fontWeight: "600" }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderOne;

const styles = StyleSheet.create({});
