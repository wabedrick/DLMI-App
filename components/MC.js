import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "@/constants/Constants";

const MC = ({ mcList }) => {
  const navigation = useNavigation();
  return (
    <View style={{}}>
      <FlatList
        data={mcList}
        renderItem={({ item }) => (
          <Pressable
            // We are navigating to the next screen and we are passing the data to
            // that screen that we are navigating to
            onPress={() => navigation.navigate("mcs", { item: item })}
            style={{
              width: 180,
              height: 90,
              backgroundColor: colors.COLOR_LIGHT,
              borderRadius: 4,
              // marginVertical: 8,
              marginTop: 16,
              alignItems: "center",
              paddingHorizontal: 4,
              paddingVertical: 30,

              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 7,
              shadowOpacity: 0.1,
            }}
            key={item.id}
          >
            <Text style={{ fontSize: 18, fontWeight: "500", color: "blue" }}>
              {item.mc_name}
            </Text>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MC;

const styles = StyleSheet.create({});
