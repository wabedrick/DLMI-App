import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import DLMILog from "@/assets/images/dlmi-icon-logo.png";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [physicalLocation, setPhysicalLocation] = useState("");
  const [gender, setGender] = useState("");
  const [hasLocalChurch, setHasLocalChurch] = useState("Has a Local Chuch?");
  const [heardUsFrom, setHeardUsFrom] = useState("How did you hear about us?");
  const [missionalCommunity, setMissinalCommunity] = useState("");
  const [members, setMembers] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("http://10.0.2.2:80/divineLife/divineLife-api.php")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://10.0.2.2:80/divineLife/divineLife-api.php", {
        firstname,
        lastname,
        phoneNumber,
        email,
        physicalLocation,
        gender,
        hasLocalChurch,
        heardUsFrom,
        missionalCommunity,
      })
      .then((response) => {
        const existingMemmber = members.filter(
          (member) =>
            member.firstname.toLowerCase() === firstname.toLowerCase() &&
            member.lastname.toLowerCase() === lastname.toLowerCase() &&
            member.phoneNumber.toLowerCase() === phoneNumber.toLowerCase()
        );

        if (existingMemmber) {
          alert("Member exists already");
        }
        if (response.data.success) {
          setMembers([
            ...members,
            {
              firstname,
              lastname,
              phoneNumber,
              email,
              physicalLocation,
              gender,
              hasLocalChurch,
              heardUsFrom,
              missionalCommunity,
            },
          ]);
          alert("Member successifully Registerd");
          navigation.navigate("welcome");
          setFirstname("");
          setLastname("");
          setPhoneNumber("");
          setEmail("");
          setPhysicalLocation("");
          setGender("");
          setHasLocalChurch("");
          setHeardUsFrom("");
          setMissinalCommunity("");
        } else {
          console.error(response.data.error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingHorizontal: 18,
        backgroundColor: "white",
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
            // paddingHorizontal: 8,
            // paddingVertical: 6,
            borderRadius: 8,
            marginBottom: 8,
          }}
        >
          <Picker
            selectedValue={hasLocalChurch}
            onValueChange={(itemValue) => setHasLocalChurch(itemValue)}
          >
            <Picker.Item
              label="Has a Local Church?"
              value=""
              style={{ fontSize: 20 }}
            />
            <Picker.Item label="Yes" value="yes" style={{ fontSize: 20 }} />
            <Picker.Item label="No" value="no" style={{ fontSize: 20 }} />
          </Picker>
        </View>

        <View
          style={{
            backgroundColor: "lightgrey",
            // paddingHorizontal: 8,
            // paddingVertical: 6,
            borderRadius: 8,
            marginBottom: 20,
          }}
        >
          <Picker
            selectedValue={heardUsFrom}
            onValueChange={(itemValue) => setHeardUsFrom(itemValue)}
            // style={{ color: "grey" }}
          >
            <Picker.Item
              label="How did you hear about Us"
              value=""
              style={{ fontSize: 20 }}
            />
            <Picker.Item
              label="Spirit FM"
              value="spirit"
              style={{ fontSize: 20 }}
            />
            <Picker.Item
              label="A friend"
              value="friend"
              style={{ fontSize: 20 }}
            />

            <Picker.Item
              label="Anagkazo Team"
              value="anagkazo"
              style={{ fontSize: 20 }}
            />
          </Picker>
        </View>

        {/* The submit Button */}
        <TouchableOpacity
          onPress={handleSubmit}
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
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
