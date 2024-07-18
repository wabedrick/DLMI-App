import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "@/components/SearchFilter";
import HeaderOne from "@/components/HeaderOne";

const McMembers = ({ route }) => {
  const { mc_name } = route.params;
  const [mcMembers, setMcMembers] = useState([]);
  const [fiteredMcMembers, setFilteredMcMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    if (!mc_name) {
      console.error("Error: mc_name is undefined");
      setLoading(false);
      return;
    }

    axios
      .get(
        `http://10.0.2.2:80/DLMI/mcMembers/registerMember.php?action=getMembersByMissionalCommunity&missional_community=${mc_name}`
        // `http://10.0.2.2:80/DLMI/mcMembers/registerMember.php?action=getMembers`
      )
      .then((response) => {
        if (response.data.status === "success") {
          setMcMembers(response.data.data);
          setFilteredMcMembers(response.data.data);
        } else {
          setFilteredMcMembers([]);
          alert("No Member registered so far");
          // console.error("Error:", response.data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [mc_name]);

  useEffect(() => {
    if (query) {
      setFilteredMcMembers(
        mcMembers.filter(
          (member) =>
            member.firstname.toLowerCase().includes(query.toLowerCase()) ||
            member.lastname.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredMcMembers(mcMembers);
    }
  }, [query, McMembers]);

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("mcMember", { item: item })}>
      <View style={styles.userCard}>
        <Text style={styles.name}>
          {item.firstname} {item.lastname}
        </Text>

        <Text style={styles.email}>{item.phoneNumber}</Text>
      </View>
    </Pressable>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <HeaderOne iconName={"arrow-left"} />
      <View style={{ flex: 1, marginHorizontal: 16, marginTop: 20 }}>
        {/* <View style={styles.container}> */}
        <Text
          style={{
            textAlign: "center",
            letterSpacing: 0.5,
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          {mc_name} MC Members
        </Text>

        <View style={{ marginTop: 22, marginBottom: 25 }}>
          <SearchFilter
            icon={"search"}
            placeholder={"Search for MC member by name"}
            query={query}
            setQuery={setQuery}
          />
        </View>
        <View style={{ flexDirection: "row", margin: 16 }}>
          <Text
            style={{ flex: 1, fontSize: 24, fontWeight: "bold", color: "blue" }}
          >
            Name
          </Text>
          <Text
            style={{ flex: 1, fontSize: 24, fontWeight: "bold", color: "blue" }}
          >
            Phone Number
          </Text>
        </View>
        <FlatList
          data={fiteredMcMembers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        {/* </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: "row",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  email: {
    fontSize: 20,
    // color: "gray",
    fontWeight: "600",
  },
  missional: {
    fontSize: 16,
    color: "darkgray",
  },
});

export default McMembers;
