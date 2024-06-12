import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DLMILog from "@/assets/images/dlmi-icon-logo.png";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "@/components/Header";
import { weeklyEvents } from "@/constants/Constants";
import WeeklyEventsFilter from "@/components/WeeklyEventsFilter";
import SearchFilter from "@/components/SearchFilter";
import { ourFunction } from "@/constants/Constants";
import OurService from "@/components/OurService";

const MainScreen = ({ route }) => {
  const navigation = useNavigation();
  const { username } = route.params;
  const [query, setQuery] = useState("");
  const [filteredWeeklyEvent, setFilteredWeeklyEvent] = useState(weeklyEvents);

  useEffect(() => {
    // This is a search logic for the weekly events
    setFilteredWeeklyEvent(
      weeklyEvents.filter((event) =>
        event.day.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, weeklyEvents]);

  return (
    <View style={{ flex: 1 }}>
      {/* Header Rendered Here */}

      <Header headerText={username} headerIcon={"bell-o"} />

      {/* The SearchFilter Component */}
      <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
        <SearchFilter
          icon={"search"}
          placeholder={"Such for a day of the week for an event"}
          query={query}
          setQuery={setQuery}
        />
      </View>

      {/* Weekly events */}
      <View style={{ marginTop: 22, paddingHorizontal: 16 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "serif",
            marginBottom: 10,
          }}
        >
          Weekly Events
        </Text>
        {/* WeeklyEventsFilter rendered */}
        <Pressable onPress={() => alert("This is the event this day")}>
          <WeeklyEventsFilter weeklyEvents={filteredWeeklyEvent} />
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 30, paddingHorizontal: 16 }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            fontFamily: "serif",
            marginBottom: 10,
          }}
        >
          Our Services
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => alert("Hi Chating..")}>
            <View
              style={{
                marginBottom: 8,
                borderRadius: 10,
                backgroundColor: "#008080",
                alignItems: "center",
                height: 140,
                width: 170,
                margin: 8,
                paddingBottom: 8,
              }}
            >
              <FontAwesome
                name="whatsapp"
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
                Chat
              </Text>
            </View>
          </Pressable>

          <TouchableOpacity onPress={() => alert("These are our MCs")}>
            <View
              style={{
                marginBottom: 8,
                borderRadius: 10,
                backgroundColor: "#FFA500",
                alignItems: "center",
                height: 140,
                width: 170,
                margin: 8,
                paddingBottom: 8,
              }}
            >
              <FontAwesome
                name="dollar"
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
                Missional Communities
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => alert("Our SERMONS")}>
            <View
              style={{
                marginBottom: 8,
                borderRadius: 10,
                backgroundColor: "blue",
                alignItems: "center",
                height: 140,
                width: 170,
                margin: 8,
                paddingBottom: 8,
              }}
            >
              <FontAwesome
                name="file-video-o"
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
                Sermons
              </Text>
            </View>
          </TouchableOpacity>

          <Pressable onPress={() => navigation.navigate("RegisterNew")}>
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
                name="registered"
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
                New Member
              </Text>
            </View>
          </Pressable>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              marginBottom: 8,
              borderRadius: 10,
              backgroundColor: "#C0C0C0",
              alignItems: "center",
              height: 140,
              width: 170,
              margin: 8,
              paddingBottom: 8,
            }}
          >
            <FontAwesome
              name="group"
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
              Church Members
            </Text>
          </View>

          <View
            style={{
              marginBottom: 8,
              borderRadius: 10,
              backgroundColor: "#808000",
              alignItems: "center",
              height: 140,
              width: 170,
              margin: 8,
              paddingBottom: 8,
            }}
          >
            <FontAwesome
              name="envelope"
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
              Giving
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
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
              name="address-card-o"
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
              About DLMI
            </Text>
          </View>

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
              name="heart-o"
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
              Annoucements
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
