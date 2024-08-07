import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HeaderOne from "@/components/HeaderOne";

const WeeklyReports = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const mc_name = item.mc_name;
  return (
    <View style={{ flex: 1 }}>
      <HeaderOne iconName={"arrow-left"} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 30, paddingHorizontal: 16 }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 25,
              marginTop: 25,
            }}
          >
            MC WEEKLY REPORTS
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              onPress={() =>
                navigation.navigate("viewPreviousReports", { mc_name })
              }
            >
              <View
                style={{
                  marginBottom: 8,
                  borderRadius: 10,
                  backgroundColor: "#00FF00",
                  alignItems: "center",
                  height: 140,
                  width: 170,
                  margin: 8,
                  paddingBottom: 8,
                }}
              >
                <FontAwesome
                  name="eye"
                  size={60}
                  style={{ paddingVertical: 8, color: "white" }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    lineHeight: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  View Previous Reports
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() =>
                navigation.navigate("writeWeeklyReport", { mc_name })
              }
            >
              <View
                style={{
                  marginBottom: 8,
                  borderRadius: 10,
                  backgroundColor: "#800080",
                  alignItems: "center",
                  height: 140,
                  width: 170,
                  margin: 8,
                  paddingBottom: 8,
                }}
              >
                <FontAwesome
                  name="pencil"
                  size={60}
                  style={{ paddingVertical: 8, color: "white" }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    lineHeight: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Write Report
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WeeklyReports;

const styles = StyleSheet.create({
  textbelowcss: {
    fontSize: 23,
    marginBottom: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
