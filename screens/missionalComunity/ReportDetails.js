
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HeaderOne from "@/components/HeaderOne";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ReportDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <HeaderOne iconName={"arrow-left"} />
      <View style={styles.content}>
        {/* <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View> */}
        <View style={styles.infoContainer}>
          <InfoRow label="Meeting Date:" value={item.meetingDate} />
          <InfoRow label="MC Name:" value={item.mcName} />
          <InfoRow label="Total Attendence:" value={item.attendence} />
          <InfoRow label="Total New Members:" value={item.newMember} />
          <InfoRow label="Amount Given(In UGX):" value={item.giving} />
          {/* <InfoRow label="Leader's Comment:" value={item.comment} /> */}
        </View>
        <View style={{alignItems:'center', paddingHorizontal:wp("5%"), paddingTop:hp("3%") }}>
            <Text style={{fontSize:wp("5%"), marginBottom:wp("3%"), fontWeight:'bold'}}>The MC Leader's Comment about the Meeting</Text>
            <Text style={{fontSize:wp("5%"), color:'blue'}}>{item.comment}</Text>
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
    borderTopLeftRadius: wp("5%"),
    borderTopRightRadius: wp("5%"),
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

export default ReportDetails;
