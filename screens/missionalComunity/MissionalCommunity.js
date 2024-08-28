import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "@/components/SearchFilter";
import axios from "axios";
import { colors } from "@/constants/Constants";
import { useNavigation } from "@react-navigation/native";
import HeaderOne from "@/components/HeaderOne";

const MissionalCommunity = ({ route }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [missionalCommunities, setMissionalCommunities] = useState([]);
  const [filteredMC, setFilteredMC] = useState([]);
  const navigation = useNavigation();
  const { data } = route.params;

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://divinelifeministriesinternational.org/users/userRegister.php"
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //     throw error;
  //   }
  // };

  // Fetching all the MCS
  useEffect(() => {
    axios
      .get(
        `http://divinelifeministriesinternational.org/missionalCommunity/registerMC.php?action=getAllMCs`
        // `http://192.168.42.76:80/DLMI/missionalCommunity/registerMC.php?action=getAllMCs`
      )
      .then((response) => {
        if (response.data.status === "success") {
          setMissionalCommunities(response.data.data);
          setFilteredMC(response.data.data);
        } else {
          console.error("Error:", response.data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  // Search for a missional community
  useEffect(() => {
    // Logic to implement the searching
    if (query) {
      setFilteredMC(
        missionalCommunities.filter((mc) =>
          mc.mc_name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredMC(missionalCommunities);
    }
  }, [query, missionalCommunities]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const missionalCommunityPress = () => {
    if (userData.missional_community.toLowerCase() == mc.mc_name) {
      navigation.navigate("mcs", { data });
    } else {
      alert("You don't belong to this MC");
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <HeaderOne iconName={"arrow-left"} />

      <SafeAreaView style={{ marginHorizontal: 16 }}>
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
          {/* <MC mcList={filteredMC} /> */}
          <View style={{}}>
            <FlatList
              data={filteredMC}
              renderItem={({ item }) => (
                <Pressable
                  // We are navigating to the next screen and we are passing the data to
                  // that screen that we are navigating to
                  onPress={() => navigation.navigate("mcs", { item })}
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
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "blue" }}
                  >
                    {item.mc_name}
                  </Text>
                </Pressable>
              )}
              // keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: "space-between",
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MissionalCommunity;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
