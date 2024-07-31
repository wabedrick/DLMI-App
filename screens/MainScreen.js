import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "@/components/Header";

const { width, height } = Dimensions.get("window");

const MainScreen = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params || {};
  const [userMC, setUserMC] = useState([]);
  const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   setFilteredWeeklyEvent(
  //     weeklyEvents.filter((event) =>
  //       event.day.toLowerCase().includes(query.toLowerCase())
  //     )
  //   );
  // }, [query, weeklyEvents]);
  const fetchUserData = async () => {
    const response = await axios.get(
      // "http://divinelifeministriesinternational.org/users/userRegister.php",
      "http://10.0.2.2:80/DLMI/users/userRegister.php",
      {
        headers: {
          Authorization: `Bearer ${route.params.token}`,
        },
      }
    );
    setUserData(response.data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const userMCdetails = () => {
    useEffect(() => {
      axios
        .get(
          `http://divinelifeministriesinternational.org/missionalCommunity/registerMC.php?action=getMemberMC&username=${username}`
        )
        .then((response) => {
          if (response.data.status === "success") {
            setUserMC(response.data.data);
            // setFilteredMC(response.data.data);
          } else {
            console.error("Error:", response.data.message);
          }
          // setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          // setLoading(false);
        });
    }, []);
    const mcUser = userMC.find((mc) => {
      mc.username.toLowerCase().equals(username.toLowerCase());
    });

    if (mcUser) {
      navigation.navigate("mcs", { userMC });
    } else {
      alert("You dont belong to any MC");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={userData.username} headerIcon={"bell-o"} />

      {/* <View style={styles.searchContainer}>
        <SearchFilter
          icon={"search"}
          placeholder={"Search for a day of the week for an event"}
          query={query}
          setQuery={setQuery}
        />
      </View> */}

      {/* <View style={styles.eventsContainer}>
        <Text style={styles.heading}>Weekly Events</Text>
        <Pressable onPress={() => alert("This is the event this day")}>
          <WeeklyEventsFilter weeklyEvents={filteredWeeklyEvent} />
        </Pressable>
      </View> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Text style={styles.heading}>Our Services</Text>
        <View style={styles.serviceContainer}>
          <ServiceButton
            icon="whatsapp"
            text="Chat"
            backgroundColor="#008080"
            onPress={() => alert("Comming soon..")}
          />
          <ServiceButton
            icon="dollar"
            text="Missional Communities"
            backgroundColor="#FFA500"
            onPress={() =>
              navigation.navigate("missionalCommunity", { data: userData })
            }
          />
        </View>
        <View style={styles.serviceContainer}>
          <ServiceButton
            icon="file-video-o"
            text="Sermons"
            backgroundColor="blue"
            onPress={() => alert("Comming soon..")}
          />
          <ServiceButton
            icon="registered"
            text="New Member"
            backgroundColor="lightblue"
            onPress={() => alert("Coming soon..")}
          />
        </View>
        <View style={styles.serviceContainer}>
          <ServiceButton
            icon="group"
            text="Church Members"
            backgroundColor="#C0C0C0"
            onPress={undefined}
          />
          <ServiceButton
            icon="envelope"
            text="Giving"
            backgroundColor="#808000"
            onPress={undefined}
          />
        </View>
        <View style={styles.serviceContainer}>
          <ServiceButton
            icon="address-card-o"
            text="About DLMI"
            backgroundColor="#00FF00"
            onPress={undefined}
          />
          <ServiceButton
            icon="heart-o"
            text="Announcements"
            backgroundColor="#800080"
            onPress={undefined}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ServiceButton = ({ icon, text, backgroundColor, onPress }) => (
  <Pressable
    onPress={onPress}
    style={[styles.serviceButton, { backgroundColor }]}
  >
    <FontAwesome name={icon} size={60} style={styles.serviceIcon} />
    <Text style={styles.serviceText}>{text}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  eventsContainer: {
    marginTop: 22,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "serif",
    marginBottom: 10,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  serviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  serviceButton: {
    marginBottom: 8,
    borderRadius: 10,
    alignItems: "center",
    height: height * 0.2,
    width: width * 0.45,
    margin: 8,
    paddingBottom: 8,
  },
  serviceIcon: {
    paddingVertical: 8,
    color: "white",
  },
  serviceText: {
    color: "white",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MainScreen;

// import React, { useState, useEffect } from "react";
// import {
//   Dimensions,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   SafeAreaView,
// } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import Header from "@/components/Header";
// import { weeklyEvents } from "@/constants/Constants";
// import WeeklyEventsFilter from "@/components/WeeklyEventsFilter";
// import SearchFilter from "@/components/SearchFilter";

// const { width, height } = Dimensions.get("window");

// const MainScreen = ({ route }) => {
//   const navigation = useNavigation();
//   const { data } = route.params || {};
//   const [query, setQuery] = useState("");
//   const [filteredWeeklyEvent, setFilteredWeeklyEvent] = useState(weeklyEvents);
//   const [userMC, setUserMC] = useState([]);

//   useEffect(() => {
//     setFilteredWeeklyEvent(
//       weeklyEvents.filter((event) =>
//         event.day.toLowerCase().includes(query.toLowerCase())
//       )
//     );
//   }, [query]);

//   // const userMCdetails = () => {
//   //   useEffect(() => {
//   //     axios
//   //       .get(
//   //         `http://divinelifeministriesinternational.org/missionalCommunity/registerMC.php?action=getMemberMC&username=${username}`
//   //       )
//   //       .then((response) => {
//   //         if (response.data.status === "success") {
//   //           setUserMC(response.data.data);
//   //         } else {
//   //           console.error("Error:", response.data.message);
//   //         }
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error:", error);
//   //       });
//   //   }, []);
//   //   const mcUser = userMC.find((mc) =>
//   //     mc.username.toLowerCase().equals(username.toLowerCase())
//   //   );

//   //   if (mcUser) {
//   //     navigation.navigate("mcs", { userMC });
//   //   } else {
//   //     alert("You dont belong to any MC");
//   //   }
//   // };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         {Array.isArray(data) &&
//           data.map((item) => (
//             <Header
//               key={item.username}
//               headerText={item.username}
//               headerIcon={"bell-o"}
//             />
//           ))}
//       </View>

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollViewContent}
//       >
//         <Text style={styles.heading}>Our Services</Text>
//         <View style={styles.serviceContainer}>
//           <ServiceButton
//             icon="whatsapp"
//             text="Chat"
//             backgroundColor="#008080"
//             onPress={() => alert("Coming soon..")}
//           />
//           <ServiceButton
//             icon="dollar"
//             text="Missional Communities"
//             backgroundColor="#FFA500"
//             onPress={() =>
//               navigation.navigate("missionalCommunity", { username })
//             }
//           />
//         </View>
//         <View style={styles.serviceContainer}>
//           <ServiceButton
//             icon="file-video-o"
//             text="Sermons"
//             backgroundColor="blue"
//             onPress={() => alert("Coming soon..")}
//           />
//           <ServiceButton
//             icon="registered"
//             text="New Member"
//             backgroundColor="lightblue"
//             onPress={() => alert("Coming soon..")}
//           />
//         </View>
//         <View style={styles.serviceContainer}>
//           <ServiceButton
//             icon="music"
//             text="Worship Songs"
//             backgroundColor="#ccffff"
//             onPress={() => alert("Coming soon..")}
//           />
//           <ServiceButton
//             icon="calendar-check-o"
//             text="Weekly Events"
//             backgroundColor="#b3b300"
//             onPress={() => alert("Coming soon..")}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const ServiceButton = ({ icon, text, backgroundColor, onPress }) => (
//   <TouchableOpacity
//     onPress={onPress}
//     style={[styles.serviceButton, { backgroundColor }]}
//   >
//     <FontAwesome name={icon} size={32} color="white" />
//     <Text style={styles.serviceText}>{text}</Text>
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     padding: 20,
//   },
//   scrollViewContent: {
//     paddingBottom: 20,
//   },
//   heading: {
//     fontSize: 32,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   serviceContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   serviceButton: {
//     width: width * 0.4,
//     height: height * 0.2,
//     borderRadius: 16,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   serviceText: {
//     fontSize: 18,
//     color: "white",
//     fontWeight: "bold",
//     marginTop: 10,
//   },
// });

// export default MainScreen;
