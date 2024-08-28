// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
// } from "react-native";

// import DLMILog from "@/assets/images/dlmi-icon-logo.png";
// import { useState, useEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// const LoginScreen = () => {
//   const [username, setUname] = useState("");
//   const [password, setPasswd] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(true);
//   const [userInfor, setUserInfor] = useState([]);

//   const navigation = useNavigation();

//   // Getting the infor about the user
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "http://divinelifeministriesinternational.org/users/userRegister.php"
//       );
//       return response.data;
//     } catch (error) {
//       console.error("Failed to fetch data:", error);
//       throw error;
//     }
//   };
//   // useEffect(() => {
//   //   axios
//   //     .get(
//   //       "http://divinelifeministriesinternational.org/users/userRegister.php"
//   //     )
//   //     .then((response) => {
//   //       if (response.data.status === "success") {
//   //         setUserInfor(response.data.data);
//   //       } else {
//   //         console.error("Error:", response.data.message);
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error:", error);
//   //     });
//   // }, []);

//   // This logic is to return that user whose username and password has been entered
//   const handleLogin = async () => {
//     const userInfor = await fetchData();
//     const url =
//       "http://divinelifeministriesinternational.org/users/userRegister.php";

//     // Checking if the URL is reachable
//     fetch(url)
//       .then((response) => {
//         if (response.status === 404) {
//           throw new Error("Endpoint not found (404)");
//         }
//         return response.text();
//       })
//       .then(() => {
//         // Proceed with the login request if the URL is valid
//         axios
//           .post(url, {
//             action: "login",
//             username,
//             password,
//           })
//           .then((response) => {
//             const { status, message } = response.data;
//             if (status === "success") {
//               navigation.navigate("Main", { data: userInfor });
//             } else {
//               Alert.alert("Error", message);
//               setError(message);
//             }
//           })
//           .catch((error) => {
//             handleAxiosError(error);
//             setError(error.message); // Use error.message to access the error message
//           });
//       })
//       .catch((error) => {
//         console.error("Error:", error.message);
//         Alert.alert("Error", error.message);
//       });
//   };
//   // const getUserInfor = ()=>{
//   // }
//   // const handleLogin = async (username, password) => {
//   //   try {
//   //     const response = await axios.post(
//   //       "http://divinelifeministriesinternational.org/users/userRegister.php",
//   //       {
//   //         action: "login",
//   //         username,
//   //         password,
//   //       }
//   //     );

//   //     const { token, missionalCommunityId } = response.data;
//   //     if (token) {
//   //       await AsyncStorage.setItem("token", token);
//   //       await AsyncStorage.setItem(
//   //         "missionalCommunityId",
//   //         missionalCommunityId.toString()
//   //       );
//   //     } else {
//   //       // Handle login failure
//   //       alert("Something went wrong with your login");
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   const handleAxiosError = (error) => {
//     if (error.response) {
//       console.error("Response error:", error.response.data);
//       Alert.alert("Error", error.response.data.message || "An error occurred");
//     } else if (error.request) {
//       console.error("Request error:", error.request);
//       Alert.alert("Error", "No response from server");
//     } else {
//       console.error("Error:", error.message);
//       Alert.alert("Error", error.message);
//     }
//   };

//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
//       <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
//         <Image
//           source={DLMILog}
//           style={{
//             height: 250,
//             width: 250,
//             borderRadius: 150,
//             marginBottom: 26,
//             marginTop: 26,
//           }}
//         />
//         <View>
//           <Text style={{ fontSize: 20 }}>Enter Your Username and password</Text>

//           <TextInput
//             placeholder="Enter username"
//             placeholderTextColor="grey"
//             value={username}
//             onChangeText={setUname}
//             style={{
//               backgroundColor: "lightgray",

//               paddingHorizontal: 16,
//               paddingVertical: 16,
//               borderRadius: 8,
//               fontSize: 20,
//               marginTop: 26,
//               marginBottom: 16,
//             }}
//           />

//           <View
//             style={{
//               backgroundColor: "lightgray",
//               color: "gray",
//               paddingHorizontal: 16,
//               paddingVertical: 16,
//               borderRadius: 8,

//               marginBottom: 16,
//               flexDirection: "row",
//             }}
//           >
//             <TextInput
//               placeholder="Enter password"
//               placeholderTextColor="grey"
//               value={password}
//               onChangeText={setPasswd}
//               secureTextEntry={showPassword}
//               style={{ flex: 1, fontSize: 20 }}
//             />

//             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <Text style={{ fontSize: 20, color: "green" }}>
//                 {password !== "" ? (showPassword ? "Show" : "Hide") : null}
//               </Text>
//             </TouchableOpacity>
//           </View>

//           {/* Displaying an error message when something goes wrong while logging in */}
//           {error ? (
//             <Text style={{ fontSize: 18, color: "red", marginBottom: 10 }}>
//               {error}
//             </Text>
//           ) : null}

//           <TouchableOpacity
//             onPress={handleLogin}
//             style={{
//               backgroundColor: "#F96163",
//               paddingHorizontal: 12,
//               paddingVertical: 12,
//               // width: 320,
//               borderRadius: 16,
//               alignItems: "center",
//             }}
//           >
//             <Text style={{ fontSize: 22, fontWeight: "600" }}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default LoginScreen;

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
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const LoginScreen = () => {
  const [username, setUname] = useState("");
  const [password, setPasswd] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [userInfor, setUserInfor] = useState([]);
  const [token, setToken] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const url =
        "http://divinelifeministriesinternational.org/users/userRegister.php";
        // "http://192.168.42.76:80/DLMI/users/userRegister.php";

      const response = await axios.post(url, {
        action: "login",
        username,
        password,
      });

      setToken(response.data.token);
      const { status, message, data } = response.data;
      if (status === "success") {
        navigation.navigate("Main", { data });
      } else {
        // Alert.alert("Error", message);
        setError(message);
      }
    } catch (error) {
      handleAxiosError(error);
      setError(error.message);
    }
  };

  const handleAxiosError = (error) => {
    if (error.response) {
      console.error("Response error:", error.response.data);
      Alert.alert("Error", error.response.data.message || "An error occurred");
    } else if (error.request) {
      console.error("Request error:", error.request);
      Alert.alert("Error", "No response from server");
    } else {
      console.error("Error:", error.message);
      Alert.alert("Error", error.message);
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
            value={username}
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
              value={password}
              onChangeText={setPasswd}
              secureTextEntry={showPassword}
              style={{ flex: 1, fontSize: 20 }}
            />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={{ fontSize: 20, color: "green" }}>
                {password !== "" ? (showPassword ? "Show" : "Hide") : null}
              </Text>
            </TouchableOpacity>
          </View>

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
              borderRadius: 16,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "600" }}>Login</Text>
          </TouchableOpacity>
          <View style={{ margin: 8, flexDirection: "row" }}>
            <Text style={{ fontSize: 22, marginEnd: 8 }}>
              Don't have an account
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ fontSize: 22, color: "green" }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
