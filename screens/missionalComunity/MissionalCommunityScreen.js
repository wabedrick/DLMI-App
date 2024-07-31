// import { Image, Pressable, StyleSheet, Text, View } from "react-native";
// import React from "react";
// import Fellowship from "@/assets/images/fellowship.jpeg";

// import Report1 from "@/assets/icons/report1.png";
// import Members from "@/assets/icons/members.png";
// import Person from "@/assets/icons/person.png";
// import Giving from "@/assets/icons/giving.png";
// import HeaderOne from "@/components/HeaderOne";

// const MissionalCommunityScreen = ({ navigation, route }) => {
//   const { item } = route.params;
//   mc_name = item.mc_name;

//   return (
//     <View style={{ backgroundColor: "white", borderStartColor: "blue" }}>
//       <HeaderOne iconName={"arrow-left"} />
//       <View>
//         <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "900" }}>
//           {mc_name} MC
//         </Text>
//       </View>
//       <View style={{ paddingHorizontal: 8, marginTop: 20 }}>
//         <Image
//           source={Fellowship}
//           style={{
//             width: "100%",
//             height: "20%",
//             borderRadius: 8,
//             shadowRadius: 8,
//             borderColor: "black",
//           }}
//         />

//         <View style={{ flexDirection: "row" }}>
//           <Pressable onPress={() => navigation.navigate("mcReport", { item })}>
//             <View
//               style={{
//                 marginBottom: 8,
//                 borderRadius: 4,
//                 backgroundColor: "#ffbf00",
//                 alignItems: "center",
//                 height: 130,
//                 width: 180,
//                 margin: 8,
//                 paddingBottom: 8,
//               }}
//             >
//               <Image
//                 source={Report1}
//                 style={{
//                   width: 80,
//                   height: 80,
//                   justifyContent: "center",
//                   marginTop: 8,
//                   marginBottom: 12,
//                 }}
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
//                 Weekly Report
//               </Text>
//             </View>
//           </Pressable>

//           <Pressable
//             onPress={() => navigation.navigate("mcMembers", { mc_name })}
//           >
//             <View
//               style={{
//                 marginBottom: 8,
//                 borderRadius: 4,
//                 backgroundColor: "#bfff00",
//                 alignItems: "center",
//                 height: 130,
//                 width: 180,
//                 margin: 8,
//                 paddingBottom: 8,
//               }}
//             >
//               <Image
//                 source={Members}
//                 style={{
//                   width: 80,
//                   height: 80,
//                   justifyContent: "center",
//                   marginTop: 8,
//                   marginBottom: 8,
//                 }}
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
//                 MC Members
//               </Text>
//             </View>
//           </Pressable>
//         </View>

//         <View style={{ flexDirection: "row" }}>
//           <Pressable onPress={() => navigation.navigate("registermcMember")}>
//             <View
//               style={{
//                 marginBottom: 8,
//                 borderRadius: 4,
//                 backgroundColor: "#40ff00",
//                 alignItems: "center",
//                 height: 130,
//                 width: 180,
//                 margin: 8,
//                 paddingBottom: 8,
//               }}
//             >
//               <Image
//                 source={Person}
//                 style={{
//                   width: 80,
//                   height: 80,
//                   justifyContent: "center",
//                   marginTop: 8,
//                   marginBottom: 12,
//                 }}
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
//                 Add Member
//               </Text>
//             </View>
//           </Pressable>

//           <Pressable
//             onPress={() => navigation.navigate("mcChatting", { item })}
//           >
//             <View
//               style={{
//                 marginBottom: 8,
//                 borderRadius: 4,
//                 backgroundColor: "#00ff80",
//                 alignItems: "center",
//                 height: 130,
//                 width: 180,
//                 margin: 8,
//                 paddingBottom: 8,
//               }}
//             >
//               <Image
//                 source={Giving}
//                 style={{
//                   width: 80,
//                   height: 80,
//                   justifyContent: "center",
//                   marginTop: 8,
//                   marginBottom: 8,
//                 }}
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
//                 Chat
//               </Text>
//             </View>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default MissionalCommunityScreen;

// const styles = StyleSheet.create({});

import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Fellowship from "@/assets/images/fellowship.jpeg";

import Report1 from "@/assets/icons/report1.png";
import Members from "@/assets/icons/members.png";
import Person from "@/assets/icons/person.png";
import Giving from "@/assets/icons/giving.png";
import HeaderOne from "@/components/HeaderOne";

const MissionalCommunityScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const mc_name = item.mc_name;
  const [imageUri, setImageUri] = useState(Fellowship);

  const selectImage = () => {
    launchImageLibrary({}, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImageUri({ uri: response.assets[0].uri });
      }
    });
  };

  // const takePhoto = () => {
  //   launchCamera({}, (response) => {
  //     if (response.assets && response.assets.length > 0) {
  //       setImageUri({ uri: response.assets[0].uri });
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      <HeaderOne iconName={"arrow-left"} />
      <View>
        <Text style={styles.mcName}>{mc_name} MC</Text>
      </View>
      <View style={styles.imageContainer}>
        <Pressable onLongPress={selectImage}>
          <Image source={imageUri} style={styles.image} />
        </Pressable>
        {/* <Pressable onPress={takePhoto} style={styles.cameraButton}>
          <Text style={styles.cameraButtonText}>Take Photo</Text>
        </Pressable> */}
      </View>

      <View style={styles.row}>
        <Pressable onPress={() => navigation.navigate("mcReport", { item })}>
          <View style={styles.button}>
            <Image source={Report1} style={styles.icon} />
            <Text style={styles.buttonText}>Weekly Report</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("mcMembers", { mc_name })}
        >
          <View style={styles.button}>
            <Image source={Members} style={styles.icon} />
            <Text style={styles.buttonText}>MC Members</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable onPress={() => navigation.navigate("registermcMember")}>
          <View style={styles.button}>
            <Image source={Person} style={styles.icon} />
            <Text style={styles.buttonText}>Add Member</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("mcChatting", { item })}>
          <View style={styles.button}>
            <Image source={Giving} style={styles.icon} />
            <Text style={styles.buttonText}>Chat</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: wp("2%"),
  },
  mcName: {
    textAlign: "center",
    fontSize: wp("5.5%"),
    fontWeight: "900",
  },
  imageContainer: {
    paddingHorizontal: wp("2%"),
    marginTop: hp("2%"),
  },
  image: {
    width: "100%",
    height: hp("25%"),
    borderRadius: 8,
    shadowRadius: 8,
    borderColor: "black",
  },
  cameraButton: {
    marginTop: hp("1%"),
    alignSelf: "center",
    backgroundColor: "#007AFF",
    borderRadius: 4,
    padding: wp("2%"),
  },
  cameraButtonText: {
    color: "white",
    fontSize: wp("4%"),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("2%"),
  },
  button: {
    marginBottom: hp("1%"),
    borderRadius: 4,
    backgroundColor: "#ffbf00",
    alignItems: "center",
    height: hp("16%"),
    width: wp("44%"),
    margin: wp("1%"),
    paddingBottom: hp("1%"),
  },
  icon: {
    width: wp("20%"),
    height: wp("20%"),
    justifyContent: "center",
    marginTop: hp("1%"),
    marginBottom: hp("1.5%"),
  },
  buttonText: {
    color: "white",
    fontSize: wp("4%"),
    lineHeight: hp("2.5%"),
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MissionalCommunityScreen;
