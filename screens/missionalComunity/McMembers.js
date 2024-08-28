
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const McMembers = ({ route }) => {
  const { mc_name } = route.params;
  const [mcMembers, setMcMembers] = useState([]);
  const [filteredMcMembers, setFilteredMcMembers] = useState([]);
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
        `http://divinelifeministriesinternational.org/mcMembers/registerMember.php?action=getMembersByMissionalCommunity&missional_community=${mc_name}`
        // `http://192.168.42.76:80/DLMI/mcMembers/registerMember.php?action=getMembersByMissionalCommunity&missional_community=${mc_name}`
      )
      .then((response) => {
        if (response.data.status === "success") {
          setMcMembers(response.data.data);
          setFilteredMcMembers(response.data.data);
        } else {
          setFilteredMcMembers([]);
          alert("No Member registered so far");
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
  }, [query, mcMembers]);

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("mcMember", { item: item })}>
      <View style={styles.userCard}>
        <Text style={styles.name}>
          {item.firstname} {item.lastname}
        </Text>

        <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
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
    <View style={styles.container}>
      <HeaderOne iconName={"arrow-left"} />
      <View style={styles.content}>
        <Text style={styles.mcName}>{mc_name} MC Members</Text>
        <View style={styles.searchContainer}>
          <SearchFilter
            icon={"search"}
            placeholder={"Search for MC member by name"}
            query={query}
            setQuery={setQuery}
          />
        </View>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Name</Text>
          <Text style={styles.headerText}>Phone Number</Text>
        </View>
        <FlatList
          data={filteredMcMembers}
          renderItem={renderItem}
          // keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginHorizontal: wp("4%"),
    marginTop: hp("2%"),
  },
  mcName: {
    textAlign: "center",
    letterSpacing: 0.5,
    fontSize: wp("6%"),
    fontWeight: "bold",
  },
  searchContainer: {
    marginTop: hp("2%"),
    marginBottom: hp("2%"),
  },
  headerRow: {
    flexDirection: "row",
    marginVertical: hp("1%"),
  },
  headerText: {
    flex: 1,
    fontSize: wp("5%"),
    fontWeight: "bold",
    color: "blue",
  },
  userCard: {
    backgroundColor: "#f9f9f9",
    padding: wp("4%"),
    borderRadius: 8,
    marginBottom: hp("2%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    flex: 1,
  },
  phoneNumber: {
    fontSize: wp("5%"),
    fontWeight: "600",
  },
});

export default McMembers;
