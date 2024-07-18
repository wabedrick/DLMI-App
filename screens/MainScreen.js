// import {
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useState, useEffect } from "react";
// import { FontAwesome } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import Header from "@/components/Header";
// import { weeklyEvents } from "@/constants/Constants";
// import WeeklyEventsFilter from "@/components/WeeklyEventsFilter";
// import SearchFilter from "@/components/SearchFilter";

// const MainScreen = ({ route }) => {
//   const navigation = useNavigation();
//   const { username } = route.params;
//   const [query, setQuery] = useState("");
//   const [filteredWeeklyEvent, setFilteredWeeklyEvent] = useState(weeklyEvents);

//   useEffect(() => {
//     // This is a search logic for the weekly events
//     setFilteredWeeklyEvent(
//       weeklyEvents.filter((event) =>
//         event.day.toLowerCase().includes(query.toLowerCase())
//       )
//     );
//   }, [query, weeklyEvents]);

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Header Rendered Here */}

//       <Header headerText={username} headerIcon={"bell-o"} />

//       {/* The SearchFilter Component */}
//       <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
//         <SearchFilter
//           icon={"search"}
//           placeholder={"Such for a day of the week for an event"}
//           query={query}
//           setQuery={setQuery}
//         />
//       </View>

//       {/* Weekly events */}
//       <View style={{ marginTop: 22, paddingHorizontal: 16 }}>
//         <Text
//           style={{
//             fontSize: 25,
//             fontWeight: "bold",
//             fontFamily: "serif",
//             marginBottom: 10,
//           }}
//         >
//           Weekly Events
//         </Text>
//         {/* WeeklyEventsFilter rendered */}
//         <Pressable onPress={() => alert("This is the event this day")}>
//           <WeeklyEventsFilter weeklyEvents={filteredWeeklyEvent} />
//         </Pressable>
//       </View>

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         style={{ marginTop: 30, paddingHorizontal: 16, width: "100%" }}
//       >
//         <View style={{ alignItems: "center" }}>
//           <Text
//             style={{
//               fontSize: 28,
//               fontWeight: "bold",
//               fontFamily: "serif",
//               marginBottom: 10,
//             }}
//           >
//             Our Services
//           </Text>
//           <View style={{ flexDirection: "row" }}>
//             <Pressable onPress={() => alert("Hi Chating..")}>
//               <View
//                 style={{
//                   marginBottom: 8,
//                   borderRadius: 10,
//                   backgroundColor: "#008080",
//                   alignItems: "center",
//                   height: 140,
//                   width: "100%",
//                   margin: 8,
//                   paddingBottom: 8,
//                 }}
//               >
//                 <FontAwesome
//                   name="whatsapp"
//                   size={60}
//                   style={{ paddingVertical: 8, color: "white" }}
//                 />
//                 <Text
//                   style={{
//                     color: "white",
//                     fontSize: 16,
//                     lineHeight: 20,
//                     fontWeight: "bold",
//                     textAlign: "center",
//                   }}
//                 >
//                   Chat
//                 </Text>
//               </View>
//             </Pressable>

//             <TouchableOpacity onPress={() => navigation.navigate("mcButtons")}>
//               <View
//                 style={{
//                   marginBottom: 8,
//                   borderRadius: 10,
//                   backgroundColor: "#FFA500",
//                   alignItems: "center",
//                   height: 140,
//                   width: "50%",
//                   margin: 8,
//                   paddingBottom: 8,
//                 }}
//               >
//                 <FontAwesome
//                   name="dollar"
//                   size={60}
//                   style={{ paddingVertical: 8, color: "white" }}
//                 />
//                 <Text
//                   style={{
//                     color: "white",
//                     fontSize: 16,
//                     lineHeight: 20,
//                     fontWeight: "bold",
//                     textAlign: "center",
//                   }}
//                 >
//                   Missional Communities
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={{ flexDirection: "row" }}>
//             <TouchableOpacity onPress={() => alert("Our SERMONS")}>
//               <View
//                 style={{
//                   marginBottom: 8,
//                   borderRadius: 10,
//                   backgroundColor: "blue",
//                   alignItems: "center",
//                   height: 140,
//                   width: 170,
//                   margin: 8,
//                   paddingBottom: 8,
//                 }}
//               >
//                 <FontAwesome
//                   name="file-video-o"
//                   size={60}
//                   style={{ paddingVertical: 8, color: "white" }}
//                 />
//                 <Text
//                   style={{
//                     color: "white",
//                     fontSize: 16,
//                     lineHeight: 20,
//                     fontWeight: "bold",
//                     textAlign: "center",
//                   }}
//                 >
//                   Sermons
//                 </Text>
//               </View>
//             </TouchableOpacity>

//             <Pressable onPress={() => navigation.navigate("RegisterNew")}>
//               <View
//                 style={{
//                   marginBottom: 8,
//                   borderRadius: 10,
//                   backgroundColor: "lightblue",
//                   alignItems: "center",
//                   height: 140,
//                   width: 170,
//                   margin: 8,
//                   paddingBottom: 8,
//                 }}
//               >
//                 <FontAwesome
//                   name="registered"
//                   size={60}
//                   style={{ paddingVertical: 8, color: "white" }}
//                 />
//                 <Text
//                   style={{
//                     color: "white",
//                     fontSize: 16,
//                     lineHeight: 20,
//                     fontWeight: "bold",
//                     textAlign: "center",
//                   }}
//                 >
//                   New Member
//                 </Text>
//               </View>
//             </Pressable>
//           </View>

//           <View style={{ flexDirection: "row" }}>
//             <View
//               style={{
//                 marginBottom: 8,
//                 borderRadius: 10,
//                 backgroundColor: "#C0C0C0",
//                 alignItems: "center",
//                 height: 140,
//                 width: 170,
//                 margin: 8,
//                 paddingBottom: 8,
//               }}
//             >
//               <FontAwesome
//                 name="group"
//                 size={60}
//                 style={{ paddingVertical: 8, color: "white" }}
//               />
//               <Text
//                 style={{
//                   color: "white",
//                   fontSize: 16,
//                   lineHeight: 20,
//                   fontWeight: "bold",
//                   textAlign: "center",
//                 }}
//               >
//                 Church Members
//               </Text>
//             </View>

//             <View
//               style={{
//                 marginBottom: 8,
//                 borderRadius: 10,
//                 backgroundColor: "#808000",
//                 alignItems: "center",
//                 height: 140,
//                 width: 170,
//                 margin: 8,
//                 paddingBottom: 8,
//               }}
//             >
//               <FontAwesome
//                 name="envelope"
//                 size={60}
//                 style={{ paddingVertical: 8, color: "white" }}
//               />
//               <Text
//                 style={{
//                   color: "white",
//                   fontSize: 16,
//                   lineHeight: 20,
//                   fontWeight: "bold",
//                   textAlign: "center",
//                 }}
//               >
//                 Giving
//               </Text>
//             </View>
//           </View>

//           <View style={{ flexDirection: "row" }}>
//             <View
//               style={{
//                 marginBottom: 8,
//                 borderRadius: 10,
//                 backgroundColor: "#00FF00",
//                 alignItems: "center",
//                 height: 140,
//                 width: 170,
//                 margin: 8,
//                 paddingBottom: 8,
//               }}
//             >
//               <FontAwesome
//                 name="address-card-o"
//                 size={60}
//                 style={{ paddingVertical: 8, color: "white" }}
//               />
//               <Text
//                 style={{
//                   color: "white",
//                   fontSize: 16,
//                   lineHeight: 20,
//                   fontWeight: "bold",
//                   textAlign: "center",
//                 }}
//               >
//                 About DLMI
//               </Text>
//             </View>

//             <View
//               style={{
//                 marginBottom: 8,
//                 borderRadius: 10,
//                 backgroundColor: "#800080",
//                 alignItems: "center",
//                 height: 140,
//                 width: 170,
//                 margin: 8,
//                 paddingBottom: 8,
//               }}
//             >
//               <FontAwesome
//                 name="heart-o"
//                 size={60}
//                 style={{ paddingVertical: 8, color: "white" }}
//               />
//               <Text
//                 style={{
//                   color: "white",
//                   fontSize: 16,
//                   lineHeight: 20,
//                   fontWeight: "bold",
//                   textAlign: "center",
//                 }}
//               >
//                 Annoucements
//               </Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default MainScreen;

// const styles = StyleSheet.create({});

import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "@/components/Header";
import { weeklyEvents } from "@/constants/Constants";
import WeeklyEventsFilter from "@/components/WeeklyEventsFilter";
import SearchFilter from "@/components/SearchFilter";

const { width, height } = Dimensions.get("window");

const MainScreen = ({ route }) => {
  const navigation = useNavigation();
  const { username } = route.params;
  const [query, setQuery] = useState("");
  const [filteredWeeklyEvent, setFilteredWeeklyEvent] = useState(weeklyEvents);

  useEffect(() => {
    setFilteredWeeklyEvent(
      weeklyEvents.filter((event) =>
        event.day.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, weeklyEvents]);

  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={username} headerIcon={"bell-o"} />

      <View style={styles.searchContainer}>
        <SearchFilter
          icon={"search"}
          placeholder={"Search for a day of the week for an event"}
          query={query}
          setQuery={setQuery}
        />
      </View>

      <View style={styles.eventsContainer}>
        <Text style={styles.heading}>Weekly Events</Text>
        <Pressable onPress={() => alert("This is the event this day")}>
          <WeeklyEventsFilter weeklyEvents={filteredWeeklyEvent} />
        </Pressable>
      </View>

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
            onPress={() => alert("Hi Chating..")}
          />
          <ServiceButton
            icon="dollar"
            text="Missional Communities"
            backgroundColor="#FFA500"
            onPress={() => navigation.navigate("mcButtons")}
          />
        </View>
        <View style={styles.serviceContainer}>
          <ServiceButton
            icon="file-video-o"
            text="Sermons"
            backgroundColor="blue"
            onPress={() => alert("Our SERMONS")}
          />
          <ServiceButton
            icon="registered"
            text="New Member"
            backgroundColor="lightblue"
            onPress={() => navigation.navigate("RegisterNew")}
          />
        </View>
        <View style={styles.serviceContainer}>
          <ServiceButton
            icon="group"
            text="Church Members"
            backgroundColor="#C0C0C0"
          />
          <ServiceButton
            icon="envelope"
            text="Giving"
            backgroundColor="#808000"
          />
        </View>
        <View style={styles.serviceContainer}>
          <ServiceButton
            icon="address-card-o"
            text="About DLMI"
            backgroundColor="#00FF00"
          />
          <ServiceButton
            icon="heart-o"
            text="Announcements"
            backgroundColor="#800080"
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
