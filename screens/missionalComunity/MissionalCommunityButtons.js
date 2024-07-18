import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HeaderOne from "@/components/HeaderOne";

const MissionalCommunityButtons = ({}) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* Header Rendered Here */}

      <HeaderOne iconName={"arrow-left"} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 30, paddingHorizontal: 16 }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={{ marginTop: 25 }}>
            <Text style={styles.textbelowcss}>
              DIVINE LIFE MINISTRIES INTERNATIONAL
            </Text>
            <Text style={{ fontSize: 20, marginBottom: 8 }}>
              Lead By{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  color: "blue",
                  letterSpacing: 1.2,
                }}
              >
                Pastor Magzi James
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 22,
                textAlign: "center",
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              OUR THEME SCRIPTURE
            </Text>
            <Text
              style={{
                color: "red",
                fontSize: 22,
                marginTop: 12,
                fontWeight: "900",
              }}
            >
              2 Peter 3:18
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              But grow in grace, and in the knowledge of our Lord and Saviour
              Jesus Christ. To him be glory both now and for ever. Amen
            </Text>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 25,
              marginTop: 25,
            }}
          >
            MISSIONAL COMMUNITY
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              onPress={() => navigation.navigate("missionalCommunity")}
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
                  View MCs
                </Text>
              </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("registerMc")}>
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
                  name="plus"
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
                  Add an MC
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MissionalCommunityButtons;

const styles = StyleSheet.create({
  textbelowcss: {
    fontSize: 23,
    marginBottom: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
