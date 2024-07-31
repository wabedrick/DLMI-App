// import React from "react";
// import { View, Text, StyleSheet, Image } from "react-native";
// import image from "@/assets/images/fellowship.jpeg";
// import HeaderOne from "@/components/HeaderOne";

// const McMembers = ({ route }) => {
//   const { item } = route.params;

//   return (
//     <View style={{ flex: 1, backgroundColor: "lightblue" }}>
//       <HeaderOne iconName={"arrow-left"} />
//       <View
//         style={{
//           flex: 1,
//           marginTop: "30%",
//           backgroundColor: "#fff",
//           borderTopLeftRadius: 90,
//           borderTopRightRadius: 80,
//         }}
//       >
//         <View style={{ alignItems: "center", top: -80 }}>
//           <Image
//             style={{ height: "50%", width: "40%", borderRadius: 100 }}
//             source={image}
//           />
//         </View>
//         <View
//           style={{ top: -200, paddingHorizontal: 16, flexDirection: "row" }}
//         >
//           <Text style={{ fontSize: 22, flex: 1 }}>Name:</Text>
//           <Text style={{ color: "blue", fontSize: 22 }}>
//             {item.firstname} {item.lastname}
//           </Text>
//         </View>

//         <View
//           style={{
//             top: -200,
//             paddingHorizontal: 16,
//             flexDirection: "row",
//             marginTop: 16,
//           }}
//         >
//           <Text style={{ fontSize: 22, flex: 1 }}>Phone Number:</Text>
//           <Text style={{ color: "blue", fontSize: 22 }}>
//             {item.phoneNumber}
//           </Text>
//         </View>

//         <View
//           style={{
//             top: -200,
//             paddingHorizontal: 16,
//             flexDirection: "row",
//             marginTop: 16,
//           }}
//         >
//           <Text style={{ fontSize: 22, flex: 1 }}>Email:</Text>
//           <Text style={{ color: "blue", fontSize: 22 }}>{item.email}</Text>
//         </View>

//         <View
//           style={{
//             top: -200,
//             paddingHorizontal: 16,
//             flexDirection: "row",
//             marginTop: 16,
//           }}
//         >
//           <Text style={{ fontSize: 22, flex: 1 }}>Physical Location:</Text>
//           <Text style={{ color: "blue", fontSize: 22 }}>
//             {item.physical_location}
//           </Text>
//         </View>

//         <View
//           style={{
//             top: -200,
//             paddingHorizontal: 16,
//             flexDirection: "row",
//             marginTop: 16,
//           }}
//         >
//           <Text style={{ fontSize: 22, flex: 1 }}>Gender:</Text>
//           <Text style={{ color: "blue", fontSize: 22 }}>{item.gender}</Text>
//         </View>

//         <View
//           style={{
//             top: -200,
//             paddingHorizontal: 16,
//             flexDirection: "row",
//             marginTop: 16,
//           }}
//         >
//           <Text style={{ fontSize: 22, flex: 1 }}>Date of Birth:</Text>
//           <Text style={{ color: "blue", fontSize: 22 }}>
//             {item.date_of_birth}
//           </Text>
//         </View>

//         <View
//           style={{
//             top: -200,
//             paddingHorizontal: 16,
//             flexDirection: "row",
//             marginTop: 16,
//           }}
//         >
//           <Text style={{ fontSize: 22, flex: 1 }}>Member of DLMI:</Text>
//           <Text style={{ color: "blue", fontSize: 22 }}>{item.dlm_member}</Text>
//         </View>
//       </View>
//       {/* </ImageBackground> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default McMembers;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import image from "@/assets/images/fellowship.jpeg";
import HeaderOne from "@/components/HeaderOne";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const McMembers = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <HeaderOne iconName={"arrow-left"} />
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.infoContainer}>
          <InfoRow label="Name:" value={`${item.firstname} ${item.lastname}`} />
          <InfoRow label="Phone Number:" value={item.phoneNumber} />
          <InfoRow label="Email:" value={item.email} />
          <InfoRow label="Physical Location:" value={item.physical_location} />
          <InfoRow label="Gender:" value={item.gender} />
          <InfoRow label="Date of Birth:" value={item.date_of_birth} />
          <InfoRow label="Member of DLMI:" value={item.dlm_member} />
        </View>
      </View>
    </View>
  );
};

const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  content: {
    flex: 1,
    marginTop: hp("15%"),
    backgroundColor: "#fff",
    borderTopLeftRadius: wp("20%"),
    borderTopRightRadius: wp("20%"),
  },
  imageContainer: {
    alignItems: "center",
    marginTop: -hp("10%"),
  },
  image: {
    height: hp("25%"),
    width: wp("50%"),
    borderRadius: wp("50%"),
  },
  infoContainer: {
    marginTop: -hp("0%"),
    paddingHorizontal: wp("5%"),
  },
  infoRow: {
    flexDirection: "row",
    marginTop: hp("3%"),
  },
  label: {
    fontSize: wp("5%"),
    flex: 1,
  },
  value: {
    color: "blue",
    fontSize: wp("5%"),
  },
});

export default McMembers;
