import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Fellowship from "@/assets/images/fellowship.jpeg";

import Report1 from "@/assets/icons/report1.png";
import Members from "@/assets/icons/members.png";
import Person from "@/assets/icons/person.png";
import Giving from "@/assets/icons/giving.png";
import HeaderOne from "@/components/HeaderOne";

const MissionalCommunityScreen = ({ navigation, route }) => {
  const { item } = route.params;
  mc_name = item.mc_name;

  return (
    <View style={{ backgroundColor: "white", borderStartColor: "blue" }}>
      <HeaderOne iconName={"arrow-left"} />
      <View>
        <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "900" }}>
          {mc_name} MC
        </Text>
      </View>
      <View style={{ paddingHorizontal: 8, marginTop: 20 }}>
        <Image
          source={Fellowship}
          style={{
            width: "100%",
            height: "20%",
            borderRadius: 8,
            shadowRadius: 8,
            borderColor: "black",
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => navigation.navigate("mcReport", { item })}>
            <View
              style={{
                marginBottom: 8,
                borderRadius: 4,
                backgroundColor: "#ffbf00",
                alignItems: "center",
                height: 130,
                width: 180,
                margin: 8,
                paddingBottom: 8,
              }}
            >
              <Image
                source={Report1}
                style={{
                  width: 80,
                  height: 80,
                  justifyContent: "center",
                  marginTop: 8,
                  marginBottom: 12,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  lineHeight: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Weekly Report
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("mcMembers", { mc_name })}
          >
            <View
              style={{
                marginBottom: 8,
                borderRadius: 4,
                backgroundColor: "#bfff00",
                alignItems: "center",
                height: 130,
                width: 180,
                margin: 8,
                paddingBottom: 8,
              }}
            >
              <Image
                source={Members}
                style={{
                  width: 80,
                  height: 80,
                  justifyContent: "center",
                  marginTop: 8,
                  marginBottom: 8,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  lineHeight: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                MC Members
              </Text>
            </View>
          </Pressable>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => navigation.navigate("registermcMember")}>
            <View
              style={{
                marginBottom: 8,
                borderRadius: 4,
                backgroundColor: "#40ff00",
                alignItems: "center",
                height: 130,
                width: 180,
                margin: 8,
                paddingBottom: 8,
              }}
            >
              <Image
                source={Person}
                style={{
                  width: 80,
                  height: 80,
                  justifyContent: "center",
                  marginTop: 8,
                  marginBottom: 12,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  lineHeight: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Add Member
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("registerMc")}>
            <View
              style={{
                marginBottom: 8,
                borderRadius: 4,
                backgroundColor: "#00ff80",
                alignItems: "center",
                height: 130,
                width: 180,
                margin: 8,
                paddingBottom: 8,
              }}
            >
              <Image
                source={Giving}
                style={{
                  width: 80,
                  height: 80,
                  justifyContent: "center",
                  marginTop: 8,
                  marginBottom: 8,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  lineHeight: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Register MC
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MissionalCommunityScreen;

const styles = StyleSheet.create({});
