import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import image from "@/assets/images/fellowship.jpeg";
import HeaderOne from "@/components/HeaderOne";

const McMembers = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "lightblue" }}>
      <HeaderOne iconName={"arrow-left"} />
      <View
        style={{
          flex: 1,
          marginTop: "30%",
          backgroundColor: "#fff",
          borderTopLeftRadius: 90,
          borderTopRightRadius: 80,
        }}
      >
        <View style={{ alignItems: "center", top: -80 }}>
          <Image
            style={{ height: "50%", width: "40%", borderRadius: 100 }}
            source={image}
          />
        </View>
        <View
          style={{ top: -200, paddingHorizontal: 16, flexDirection: "row" }}
        >
          <Text style={{ fontSize: 22, flex: 1 }}>Name:</Text>
          <Text style={{ color: "blue", fontSize: 22 }}>
            {item.firstname} {item.lastname}
          </Text>
        </View>

        <View
          style={{
            top: -200,
            paddingHorizontal: 16,
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text style={{ fontSize: 22, flex: 1 }}>Phone Number:</Text>
          <Text style={{ color: "blue", fontSize: 22 }}>
            {item.phoneNumber}
          </Text>
        </View>

        <View
          style={{
            top: -200,
            paddingHorizontal: 16,
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text style={{ fontSize: 22, flex: 1 }}>Email:</Text>
          <Text style={{ color: "blue", fontSize: 22 }}>{item.email}</Text>
        </View>

        <View
          style={{
            top: -200,
            paddingHorizontal: 16,
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text style={{ fontSize: 22, flex: 1 }}>Physical Location:</Text>
          <Text style={{ color: "blue", fontSize: 22 }}>
            {item.physical_location}
          </Text>
        </View>

        <View
          style={{
            top: -200,
            paddingHorizontal: 16,
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text style={{ fontSize: 22, flex: 1 }}>Gender:</Text>
          <Text style={{ color: "blue", fontSize: 22 }}>{item.gender}</Text>
        </View>

        <View
          style={{
            top: -200,
            paddingHorizontal: 16,
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text style={{ fontSize: 22, flex: 1 }}>Date of Birth:</Text>
          <Text style={{ color: "blue", fontSize: 22 }}>
            {item.date_of_birth}
          </Text>
        </View>

        <View
          style={{
            top: -200,
            paddingHorizontal: 16,
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text style={{ fontSize: 22, flex: 1 }}>Member of DLMI:</Text>
          <Text style={{ color: "blue", fontSize: 22 }}>{item.dlm_member}</Text>
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default McMembers;
