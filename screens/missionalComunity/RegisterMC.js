import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import DLMILog from "@/assets/images/dlmi-icon-logo.png";
import axios from "axios";
import HeaderOne from "@/components/HeaderOne";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [name, setName] = useState("");
  const [leader, setLeader] = useState("");
  const [location, setLocation] = useState("");
  const [leaderPhoneNumber, setLeaderPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    axios
      .post("http://divinelifeministriesinternational.org/missionalCommunity/registerMC.php", {
        action: "register",
        name,
        leader,
        location,
        leaderPhoneNumber,
      })
      .then((response) => {
        const { status, message } = response.data;
        if (status === "success") {
          Alert.alert("Success", message);
          navigation.navigate("missionalCommunity");
        } else {
          Alert.alert("Error", message);
        }
      })
      .catch((error) => {
        console.error(error); // Log the error for debugging
        if (error.response) {
          // Server responded with a status other than 200 range
          console.error("Response error:", error.response.data);
          Alert.alert(
            "Error",
            error.response.data.message || "An error occurred"
          );
        } else if (error.request) {
          // Request was made but no response was received
          console.error("Request error:", error.request);
          Alert.alert("Error", "No response from server");
        } else {
          // Something else happened
          console.error("Error:", error.message);
          Alert.alert("Error", error.message);
        }
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderOne iconName={"arrow-left"} />
      <ScrollView>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Image
            source={DLMILog}
            style={{
              height: 250,
              width: 250,
              borderRadius: 150,
              marginBottom: 26,
              marginTop: 16,
            }}
          />
          <View>
            <Text style={{ fontSize: 26, fontWeight: "700" }}>
              MC Registration
            </Text>

            <TextInput
              placeholder="MC Name"
              value={name}
              onChangeText={setName}
              style={{
                backgroundColor: "lightgray",
                color: "gray",
                paddingHorizontal: 16,
                paddingVertical: 16,
                borderRadius: 8,
                fontSize: 20,
                marginTop: 26,
                marginBottom: 16,
              }}
            />

            <TextInput
              placeholder="MC Leader's name"
              value={leader}
              onChangeText={setLeader}
              style={{
                backgroundColor: "lightgray",
                color: "gray",
                paddingHorizontal: 16,
                paddingVertical: 16,
                borderRadius: 8,
                fontSize: 20,
                marginBottom: 16,
              }}
            />
            <TextInput
              placeholder="MC Location"
              placeholderTextColor="grey"
              value={location}
              onChangeText={setLocation}
              style={{
                // width: "100%",
                paddingHorizontal: 16,
                paddingVertical: 16,
                backgroundColor: "lightgrey",
                borderRadius: 8,
                fontSize: 22,
                marginBottom: 16,
              }}
            />

            <TextInput
              placeholder="Leader Phone Number"
              placeholderTextColor="grey"
              value={leaderPhoneNumber}
              onChangeText={setLeaderPhoneNumber}
              style={{
                // width: "100%",
                paddingHorizontal: 16,
                paddingVertical: 16,
                backgroundColor: "lightgrey",
                borderRadius: 8,
                fontSize: 22,
                marginBottom: 16,
              }}
            />

            <TouchableOpacity
              onPress={handleRegister}
              style={{
                backgroundColor: "#F96163",
                paddingHorizontal: 16,
                paddingVertical: 12,
                width: 350,
                borderRadius: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "600" }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
