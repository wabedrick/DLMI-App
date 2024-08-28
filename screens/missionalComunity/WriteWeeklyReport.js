
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import DLMILog from "@/assets/images/dlmi-icon-logo.png";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import HeaderOne from "@/components/HeaderOne";

const WriteWeeklyReport = ({ route }) => {
  const [mcName, setMcName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [newMembers, setNewMembers] = useState("");
  const [meetingDate, setMeetingDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [meetUp, setMeetUp] = useState("Did you meet?");
  const [givingAmount, setGivingAmount] = useState("");
  const [mcLeaderName, setMcLeaderName] = useState("");
  const [comment, setComment] = useState("");
  const { mc_name } = route.params;

  const navigation = useNavigation();

  const checkForMeetingStatus = () => {
    if (
      (meetUp == "yes" && attendance == "") ||
      newMembers == "" ||
      meetingDate == null ||
      givingAmount == "" ||
      mcLeaderName == ""
    ) {
      alert("Please fill the form");
    }
  };

  const handleRegister = () => {
    checkForMeetingStatus();
    const formattedDate = meetingDate
      ? meetingDate.toISOString().split("T")[0]
      : "";

    axios
      .post(
        "http://divinelifeministriesinternational.org/missionalCommunity/weeklyReport.php",
        // "http://192.168.42.76:80/DLMI/missionalCommunity/weeklyReport.php",
        {
          mcName: mc_name,
          meetingDate: formattedDate,
          attendance,
          newMembers,
          meetUp,
          givingAmount,
          mcLeaderName,
          comment,
        }
      )
      .then((response) => {
        const { status, message } = response.data;
        if (status === "success") {
          navigation.navigate("viewPreviousReports", { mc_name });
          setFormEmptyOnSuccess();
        } else {
          Alert.alert("Error", message);
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          console.error("Response error:", error.response.data);
          Alert.alert(
            "Error",
            error.response.data.message || "An error occurred"
          );
        } else if (error.request) {
          console.error("Request error:", error.request);
          Alert.alert("Error", "No response from server");
        } else {
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
    setMeetingDate(null);
    setGivingAmount("");
    setComment("");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderOne iconName={"arrow-left"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <SafeAreaView>
          <View style={styles.imageContainer}>
            <Image source={DLMILog} style={styles.image} />
          </View>
        </SafeAreaView>
        <View style={styles.formContainer}>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              placeholder="Enter the meeting date"
              placeholderTextColor="grey"
              value={meetingDate ? meetingDate.toISOString().split("T")[0] : ""}
              editable={false}
              style={styles.input}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={meetingDate || new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  setMeetingDate(selectedDate);
                }
              }}
              maximumDate={new Date()}
            />
          )}
          <TextInput
            placeholderTextColor="grey"
            value={mc_name}
            editable={false}
            style={styles.input}
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={meetUp}
              onValueChange={(itemValue) => setMeetUp(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Did you meet?" value="" />
              <Picker.Item label="Yes" value="yes" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>
          <TextInput
            placeholder="Total attendance"
            placeholderTextColor="grey"
            value={attendance}
            onChangeText={setAttendance}
            style={styles.input}
          />
          <TextInput
            placeholder="New members if any"
            placeholderTextColor="grey"
            value={newMembers}
            onChangeText={setNewMembers}
            style={styles.input}
          />
          <TextInput
            placeholder="Amount collected in offering"
            placeholderTextColor="grey"
            value={givingAmount}
            onChangeText={setGivingAmount}
            style={styles.input}
          />
          <TextInput
            placeholder="You name please"
            placeholderTextColor="grey"
            value={mcLeaderName}
            onChangeText={setMcLeaderName}
            style={styles.input}
          />
          <TextInput
            placeholder="Your Comment about the meeting"
            placeholderTextColor="grey"
            value={comment}
            onChangeText={setComment}
            multiline
            numberOfLines={4}
            style={[styles.input, styles.textArea]}
          />
          <TouchableOpacity onPress={handleRegister} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 18,
    marginBottom: 16,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 8,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "lightgrey",
    borderRadius: 8,
    fontSize: 22,
    marginBottom: 8,
    color: "#000",
  },
  textArea: {
    height: 120, // Adjust height for text area
  },
  pickerContainer: {
    backgroundColor: "lightgrey",
    borderRadius: 8,
    marginBottom: 8,
  },
  picker: {
    fontSize: 20,
  },
  button: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "#F96163",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default WriteWeeklyReport;
