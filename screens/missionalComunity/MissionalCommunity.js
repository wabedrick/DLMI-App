import { StyleSheet, Text, View } from "react-native";
import { React, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "@/components/SearchFilter";
import { missionalCommunities } from "@/constants/Constants";
import MC from "@/components/MC";

const MissionalCommunity = () => {
  const [query, setQuery] = useState("");
  const [filteredMC, setFilteredMC] = useState(missionalCommunities);

  useEffect(() => {
    // This is a search logic for the Missional Community
    setFilteredMC(
      missionalCommunities.filter((mc) =>
        mc.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, missionalCommunities]);
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Text
        style={{
          textAlign: "center",
          letterSpacing: 0.5,
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        Missional Communities
      </Text>

      <View style={{ marginTop: 22 }}>
        <SearchFilter
          icon={"search"}
          placeholder={"Search for your MC"}
          query={query}
          setQuery={setQuery}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <MC mcList={filteredMC} />
      </View>
    </SafeAreaView>
  );
};

export default MissionalCommunity;

const styles = StyleSheet.create({});
