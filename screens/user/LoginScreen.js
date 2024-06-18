import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DLMILog from "@/assets/images/dlmi-icon-logo.png";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { users } from "@/constants/Constants";

const LoginScreen = () => {
  const [uname, setUname] = useState("");
  const [passwd, setPasswd] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  // const [users, setUsers] = useState([]);

  const navigation = useNavigation();

  // This logic is to return that user whose username
  //   and password has been enterd

  // useEffect(() => {
  //   axios
  //     .get("http://10.0.2.2:80/divineLife/user-api.php")
  //     .then((response) => {
  //       setUsers(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  // const validUser = users.find(
  //   (vUser) => vUser.uname === uname && vUser.passwd === passwd
  // );
  // const handleLogin = () => {
  //   setUname(uname);
  //   setPasswd(passwd);
  //   if (uname === "" || passwd === "") {
  //     setError("Please Enter the Username and password");
  //   } else if (validUser) {
  //     alert("Successfully Logged In");
  //     navigation.navigate("welcome", { username: uname });
  //     setUname("");
  //     setPasswd("");
  //     setError("");
  //   } else {
  //     setError("Incorrect Username Or Password");
  //   }
  // };

  // This logic is to return that user whose username and password has been enterd
  const registeredUser = users.find(
    (ruser) => ruser.username === uname && ruser.password === passwd
  );
  const handleLogin = () => {
    setUname(uname);
    setPasswd(passwd);
    if (uname === "" || passwd === "") {
      setError("Please Enter the Username and password");
    } else if (registeredUser) {
      navigation.navigate("Main", { username: uname });
      setError("");
      setUname("");
      setPasswd("");
    } else {
      setError("Incorrect Username Or Password");
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Image
          source={DLMILog}
          style={{
            height: 250,
            width: 250,
            borderRadius: 150,
            marginBottom: 26,
            marginTop: 26,
          }}
        />
        <View>
          <Text style={{ fontSize: 20 }}>Enter Your Username and password</Text>

          <TextInput
            placeholder="Enter username"
            placeholderTextColor="grey"
            value={uname}
            onChangeText={setUname}
            style={{
              backgroundColor: "lightgray",

              paddingHorizontal: 16,
              paddingVertical: 16,
              borderRadius: 8,
              fontSize: 20,
              marginTop: 26,
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

              marginBottom: 16,
              flexDirection: "row",
            }}
          >
            <TextInput
              placeholder="Enter password"
              placeholderTextColor="grey"
              value={passwd}
              onChangeText={setPasswd}
              secureTextEntry={showPassword}
              style={{ flex: 1, fontSize: 20 }}
            />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={{ fontSize: 20, color: "green" }}>
                {passwd !== "" ? (showPassword ? "Show" : "Hide") : null}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Displaying an error message when something goes wrong while logging in */}
          {error ? (
            <Text style={{ fontSize: 18, color: "red", marginBottom: 10 }}>
              {error}
            </Text>
          ) : null}

          <TouchableOpacity
            onPress={handleLogin}
            style={{
              backgroundColor: "#F96163",
              paddingHorizontal: 12,
              paddingVertical: 12,
              // width: 320,
              borderRadius: 16,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "600" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
