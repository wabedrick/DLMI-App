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

import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [username, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  // const [users, setUsers] = useState([]);
  const [missional_community, setMissinalCommunity] = useState("");
  const [message, setMessage] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    axios
      .post(
        "http://divinelifeministriesinternational.org/users/userRegister.php",
        // "http://10.0.2.2:80/DLMI/users/userRegister.php",
        // "http://192.168.42.76:80/DLMI/users/userRegister.php",
        {
          action: "register",
          username,
          email,
          missional_community,
          password,
        }
      )
      .then((response) => {
        const { status, message } = response.data;
        if (status === "success") {
          // Alert.alert("Success", message);
          setMessage(message);
          navigation.navigate("Login");
        } else {
          // Alert.alert("Error", message);
          setMessage(message);
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
          // console.error("Request error:", error.request);
          Alert.alert("Error", "No response from server");
        } else {
          // Something else happened
          // console.error("Error:", error.message);
          // Alert.alert("Error", error.message);
        }
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
              Register Here
            </Text>

            <TextInput
              placeholder="Create Username"
              value={username}
              onChangeText={setUname}
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
              placeholder="Phone Number or Email"
              value={email}
              onChangeText={setEmail}
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
              placeholder="Missional Community"
              placeholderTextColor="grey"
              value={missional_community}
              onChangeText={setMissinalCommunity}
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
            <View
              style={{
                backgroundColor: "lightgray",
                color: "gray",
                paddingHorizontal: 16,
                paddingVertical: 16,
                borderRadius: 8,
                flexDirection: "row",
                marginBottom: 16,
              }}
            >
              <TextInput
                placeholder="Create Password"
                secureTextEntry={showPassword}
                value={password}
                onChangeText={setPassword}
                style={{ fontSize: 20, flex: 1 }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text style={{ color: "green", fontSize: 20 }}>
                  {password !== "" ? (showPassword ? "Show" : "Hide") : null}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Error Messages incase of failures in registration */}

            {message ? (
              <Text
                style={{
                  color: "red",
                  fontSize: 20,
                  paddingHorizontal: 8,
                  marginBottom: 8,
                }}
              >
                {message}
              </Text>
            ) : null}

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
            <View style={{ margin: 8, flexDirection: "row" }}>
              <Text style={{ fontSize: 22, marginEnd: 8 }}>
                Have an account already
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ fontSize: 22, color: "green" }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
