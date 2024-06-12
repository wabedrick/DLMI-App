import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/Constants";

const WeeklyEventsFilter = ({ weeklyEvents }) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {weeklyEvents.map((event, index) => {
          return (
            <View
              style={{
                backgroundColor:
                  index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 30,
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderRadius: 4,

                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowRadius: 7,
                shadowOpacity: 0.1,
                alignItems: "center",
                paddingVertical: 16,
                width: 160,
              }}
              key={event.id}
            >
              <Text
                style={{
                  color: index === 0 ? colors.COLOR_LIGHT : null,
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                {event.day}
              </Text>
              {/* <View>
                <Image
                  source={event.image}
                  style={{ height: 100, width: 100, borderRadius: 50 }}
                />
              </View>
              <Text style={{ fontSize: 20, color: "blue", margin: 8 }}>
                {event.event}
              </Text> */}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default WeeklyEventsFilter;

const styles = StyleSheet.create({});
