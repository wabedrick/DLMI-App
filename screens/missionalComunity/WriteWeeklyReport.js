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

const WriteWeeklyReport = () => {
  const [mcName, setMcName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [newMembers, setNewMembers] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetUp, setMeetUp] = useState("Did you meet?");
  const [givingAmount, setGivingAmount] = useState("");
  const [mcLeaderName, setMcLeaderName] = useState("");
  const [comment, setComment] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    axios
      .post("http://10.0.2.2:80/DLMI/missionalCommunity/weeklyReport.php", {
        mcName,
        meetingDate,
        attendance,
        newMembers,
        meetUp,
        givingAmount,
        mcLeaderName,
        comment,
      })
      .then((response) => {
        const { status, message } = response.data;
        if (status === "success") {
          // Alert.alert("Success", message);
          navigation.navigate("viewPreviousReports");
          setFormEmptyOnSuccess();
        } else {
          Alert.alert("Error", message);
          // setFormEmptyOnSuccess();
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
    setMcName("");
    setAttendance("");
    setNewMembers("");
    setMeetUp("");
    setMcLeaderName("");
    setMeetingDate("");
    setMcName("");
    setGivingAmount("");
    setComment("");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderOne iconName={"arrow-left"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 18,

          marginBottom: 16,
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
            placeholder="Date for meeting"
            placeholderTextColor="grey"
            value={meetingDate}
            onChangeText={setMeetingDate}
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
            placeholder="MC Name"
            placeholderTextColor="grey"
            value={mcName}
            onChangeText={setMcName}
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

          <View
            style={{
              backgroundColor: "lightgrey",
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <Picker
              selectedValue={meetUp}
              onValueChange={(itemValue) => setMeetUp(itemValue)}
            >
              <Picker.Item
                label="Did you meet?"
                value=""
                style={{ fontSize: 20 }}
              />
              <Picker.Item label="Yes" value="yes" style={{ fontSize: 20 }} />
              <Picker.Item label="No" value="no" style={{ fontSize: 20 }} />
            </Picker>
          </View>

          <TextInput
            placeholder="Total attendance"
            placeholderTextColor="grey"
            value={attendance}
            onChangeText={setAttendance}
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
            placeholder="New members if any"
            placeholderTextColor="grey"
            value={newMembers}
            onChangeText={setNewMembers}
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
            placeholder="Amount collected in offering"
            placeholderTextColor="grey"
            value={givingAmount}
            onChangeText={setGivingAmount}
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
            placeholder="You name please"
            placeholderTextColor="grey"
            value={mcLeaderName}
            onChangeText={setMcLeaderName}
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
            placeholder="Your Comment about the meeting"
            placeholderTextColor="grey"
            value={comment}
            onChangeText={setComment}
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

export default WriteWeeklyReport;

const styles = StyleSheet.create({});
