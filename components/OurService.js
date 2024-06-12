import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-web";

const OurService = ({ serviceList }) => {
  return (
    <View>
      <FlatList
        data={serviceList}
        renderItem={({ service }) => (
          <Pressable onPress={() => alert("Pressed")}>
            <View
              style={{
                marginBottom: 8,
                borderRadius: 10,
                backgroundColor: "lightblue",
                alignItems: "center",
                height: 140,
                width: 170,
                margin: 8,
                paddingBottom: 8,
              }}
            >
              <FontAwesome
                name={service.iconName}
                size={60}
                style={{ paddingVertical: 8, color: "white" }}
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
                {service.name}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default OurService;

const styles = StyleSheet.create({});
