import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import DLMILog from "@/assets/images/dlmi-icon-logo.png";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import HeaderOne from "@/components/HeaderOne";

const RegisterMcMember = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [physicalLocation, setPhysicalLocation] = useState("");
  const [gender, setGender] = useState("");
  const [dlmMember, setDLMMember] = useState("Member of DLMI?");
  const [missionalCommunity, setMissinalCommunity] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    axios
      .post("http://divinelifeministriesinternational.org/mcMembers/registerMember.php", {
        firstname,
        lastname,
        phoneNumber,
        email,
        physicalLocation,
        gender,
        dlmMember,
        missionalCommunity,
        dateOfBirth,
      })
      .then((response) => {
        const { status, message } = response.data;
        if (status === "success") {
          const mc_name = missionalCommunity;
          navigation.navigate("mcMembers", { mc_name });
          setFormEmptyOnSuccess();
        } else {
          Alert.alert("Error", message);
          setFormEmptyOnSuccess();
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

  const setFormEmptyOnSuccess = () => {
    setFirstname("");
    setLastname("");
    setPhoneNumber("");
    setEmail("");
    setPhysicalLocation("");
    setGender("");
    setMissinalCommunity("");
    setGender("");
    setDLMMember("");
    setDateOfBirth("");
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <HeaderOne iconName={"arrow-left"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 18,
          backgroundColor: "white",
          marginBottom: 26,
        }}
      >
        <SafeAreaView>
          <View style={{ alignItems: "center", marginTop: 8 }}>
            <Image
              source={DLMILog}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          </View>
        </SafeAreaView>
        <View style={{ marginTop: 20 }}>
          <TextInput
            placeholder="First name"
            placeholderTextColor="grey"
            value={firstname}
            onChangeText={setFirstname}
            style={{
              // color: "grey",
              width: "100%",
              paddingHorizontal: 16,
              paddingVertical: 16,
              backgroundColor: "lightgrey",
              borderRadius: 8,
              fontSize: 22,
              marginBottom: 8,
            }}
          />
          <TextInput
            placeholder="Last name"
            placeholderTextColor="grey"
            value={lastname}
            onChangeText={setLastname}
            style={{
              width: "100%",
              paddingHorizontal: 16,
              paddingVertical: 16,
              backgroundColor: "lightgrey",
              borderRadius: 8,
              fontSize: 22,
              marginBottom: 8,
            }}
          />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="grey"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={{
              width: "100%",
              paddingHorizontal: 16,
              paddingVertical: 16,
              backgroundColor: "lightgrey",
              borderRadius: 8,
              fontSize: 22,
              marginBottom: 8,
            }}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="grey"
            value={email}
            onChangeText={setEmail}
            style={{
              width: "100%",
              paddingHorizontal: 16,
              paddingVertical: 16,
              backgroundColor: "lightgrey",
              borderRadius: 8,
              fontSize: 22,
              marginBottom: 8,
            }}
          />
          <TextInput
            placeholder="Physical Location"
            placeholderTextColor="grey"
            value={physicalLocation}
            onChangeText={setPhysicalLocation}
            style={{
              width: "100%",
              paddingHorizontal: 16,
              paddingVertical: 16,
              backgroundColor: "lightgrey",
              borderRadius: 8,
              fontSize: 22,
              marginBottom: 8,
            }}
          />

          <TextInput
            placeholder="Missional Community"
            placeholderTextColor="grey"
            value={missionalCommunity}
            onChangeText={setMissinalCommunity}
            style={{
              width: "100%",
              paddingHorizontal: 16,
              paddingVertical: 16,
              backgroundColor: "lightgrey",
              borderRadius: 8,
              fontSize: 22,
              marginBottom: 8,
            }}
          />
          <View
            style={{
              backgroundColor: "lightgrey",
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
            >
              <Picker.Item
                label="Select Gender"
                value=""
                style={{ fontSize: 20 }}
              />
              <Picker.Item label="Male" value="male" style={{ fontSize: 20 }} />
              <Picker.Item
                label="Female"
                value="female"
                style={{ fontSize: 20 }}
              />
            </Picker>
          </View>

          <View
            style={{
              backgroundColor: "lightgrey",
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <Picker
              selectedValue={dlmMember}
              onValueChange={(itemValue) => setDLMMember(itemValue)}
            >
              <Picker.Item
                label="Member of DLMI?"
                value=""
                style={{ fontSize: 20 }}
              />
              <Picker.Item label="Yes" value="yes" style={{ fontSize: 20 }} />
              <Picker.Item label="No" value="no" style={{ fontSize: 20 }} />
            </Picker>
          </View>

          <TextInput
            placeholder="Day of Birth"
            placeholderTextColor="grey"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            style={{
              width: "100%",
              paddingHorizontal: 16,
              paddingVertical: 16,
              backgroundColor: "lightgrey",
              borderRadius: 8,
              fontSize: 22,
              marginBottom: 8,
            }}
          />

          {/* The submit Button */}
          <TouchableOpacity
            onPress={handleRegister}
            style={{
              padding: 16,
              alignItems: "center",
              backgroundColor: "#F96163",
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterMcMember;

const styles = StyleSheet.create({});
