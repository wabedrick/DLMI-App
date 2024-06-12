import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DLMILog from "@/assets/images/dlmi-icon-logo.png";
import axios from "axios";
import { users, registerUser } from "@/constants/Constants";

import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [username, setUname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwd, setPasswd] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  // const [users, setUsers] = useState([]);
  const [missionalCommunity, setMissinalCommunity] = useState("");
  const [message, setMessage] = useState("");

  const navigation = useNavigation();

  const registerdUser = users.find(
    (user) => user.username === username || user.phoneNumber === phoneNumber
  );

  const handleRegister = () => {
    if (registerdUser) {
      alert("Account already exists");
    } else if (username !== "" || phoneNumber !== "" || passwd !== "") {
      registerUser(username, passwd, phoneNumber);
      if (registerUser) {
        alert("You have been registered successfully");
        navigation.navigate("Login");
      } else {
        alert("Something went wrong");
      }
    } else {
      alert("Fill the form");
    }
  };

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

  // Function to check if the user exists already
  // const checkUserExists = async () => {
  //   const response = await axios.post(
  //     "http://10.0.2.2:80/divineLife/user-api.php"
  //   );
  //   const userData = response.data;
  //   if (userData.user_exists) {
  //     setUserExists(true);
  //   }
  //   if (userExists) {
  //     return <Alert>User already Exists</Alert>;
  //   }
  // };

  // const handleRegister = () => {
  //   axios
  //     .post("http://10.0.2.2:80/divineLife/user-api.php", {
  //       username,
  //       phoneNumber,
  //       passwd,
  //     })
  //     .then((response) => {
  //       if (response.data.success) {
  //         // Check if the user exists already
  //         const existingUser = users.find(
  //           (user) => user.username.toLowerCase() === username.toLowerCase()
  //         );

  //         if (existingUser) {
  //           alert("Member exists already");
  //         }

  //         setUsers([
  //           ...users,
  //           {
  //             username,
  //             phoneNumber,
  //             passwd,
  //           },
  //         ]);
  //         alert("Member successifully Registerd");
  //         navigation.navigate("Login");
  //         setUname("");
  //         setPhoneNumber("");
  //         setPasswd("");
  //       } else {
  //         console.error(response.data.error);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // const checkUserExists = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://10.0.2.2:80/divineLife/user-api.php",
  //       {
  //         username: username,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //       }
  //     );
  //     if (response.data.success) {
  //       setMessage("");
  //       // Proceed with registration logic
  //       axios
  //         .post("http://10.0.2.2:80/divineLife/user-api.php", {
  //           username,
  //           phoneNumber,
  //           passwd,
  //         })
  //         .then((response) => {
  //           if (response.data.success) {
  //             setUsers([
  //               ...users,
  //               {
  //                 username,
  //                 phoneNumber,
  //                 passwd,
  //               },
  //             ]);
  //             alert("Member successifully Registerd");
  //             navigation.navigate("Login");
  //             setUname("");
  //             setPhoneNumber("");
  //             setPasswd("");
  //           } else {
  //             console.error(response.data.error);
  //           }
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     } else {
  //       setMessage("User already exists.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setMessage("An error occurred. Please try again.");
  //   }
  // };

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
              value={phoneNumber}
              onChangeText={setPhoneNumber}
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
              value={missionalCommunity}
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
                value={passwd}
                onChangeText={setPasswd}
                style={{ fontSize: 20, flex: 1 }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text style={{ color: "green", fontSize: 20 }}>
                  {passwd !== "" ? (showPassword ? "Show" : "Hide") : null}
                </Text>
              </TouchableOpacity>
            </View>

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
            {/* {message ? (
              <Text style={{ color: "red", fontSize: 20 }}>{message}</Text>
            ) : null} */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
