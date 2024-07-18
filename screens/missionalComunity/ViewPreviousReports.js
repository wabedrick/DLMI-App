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
  const [reports, setReports] = useState([]);
  const [fiteredReports, setFilteredReports] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    if (!mc_name) {
      console.error("Error: mc_name is undefined");
      // setLoading(false);
      return;
    }

    axios
      .get(
        `http://10.0.2.2:80/DLMI/missionalCommunity/weeklyReport.php?action=getReportsByMissionalCommunity&mcName=${mc_name}`
      )
      .then((response) => {
        if (response.data.status === "success") {
          setReports(response.data.data);
          setFilteredReports(response.data.data);
        } else {
          setFilteredReports([]);
          alert("No Reports so far");
          // console.error("Error:", response.data.message);
        }
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        // setLoading(false);
      });
  }, [mc_name]);

  useEffect(() => {
    if (query) {
      setFilteredMcMembers(
        reports.filter((report) =>
          report.meetingDate.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredReports(reports);
    }
  }, [query, reports]);

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("mcMember", { item: item })}>
      <View style={styles.userCard}>
        <Text style={{ fontSize: 20, fontWeight: "700", marginEnd: 56 }}>
          {item.meetingDate}
        </Text>

        <Text style={{ fontSize: 20, fontWeight: "700", marginEnd: 76 }}>
          {item.attendence}
        </Text>
        <Text style={styles.email}>{item.newMember}</Text>
      </View>
    </Pressable>
  );

  // if (loading) {
  //   return (
  //     <View style={styles.loader}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }

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
        <View style={{ flexDirection: "row", margin: 12 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "blue",
              marginEnd: 12,
            }}
          >
            MeetingDate
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "blue",
              marginEnd: 8,
            }}
          >
            Total Att
          </Text>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "blue" }}>
            New Mem
          </Text>
        </View>
        <FlatList
          data={fiteredReports}
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
