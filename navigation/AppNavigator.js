import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "@/screens/retension/RegisterScreen";
import WelcomeScreen from "@/screens/WelcomeScreen";
import LoginScreen from "@/screens/user/LoginScreen";
import Register from "@/screens/user/Register";

import MainScreen from "@/screens/MainScreen";
import MainScreenAdmin from "@/screens/MainScreenAdmin";

import ChatListScreen from "@/screens/ChatListScreen";
import MissionalCommunityScreen from "@/screens/missionalComunity/MissionalCommunityScreen";
import SermonsScreen from "@/screens/SermonsScreen";
import ChurchMembersScreen from "@/screens/ChurchMembersScreen";
import AnnoucementsScreen from "@/screens/AnnoucementsScreen";
import AboutDLMIScreen from "@/screens/AboutDLMIScreen";
import GivingScreen from "@/screens/GivingScreen";
import WeeklyReports from "@/screens/missionalComunity/WeeklyReports";
import MissinalCommunity from "@/screens/missionalComunity/MissionalCommunity";
import RegisterMcMember from "@/screens/missionalComunity/RegisterMcMember";
import McMembers from "@/screens/missionalComunity/McMembers";
import McMemberAdmin from "@/screens/missionalComunity/McMemberAdmin";
import McMember from "@/screens/missionalComunity/McMember";
import RegisterMC from "@/screens/missionalComunity/RegisterMC";
import MissionalCommunityButtons from "@/screens/missionalComunity/MissionalCommunityButtons";
import WriteWeeklyReport from "@/screens/missionalComunity/WriteWeeklyReport";
import ViewPreviousReports from "@/screens/missionalComunity/ViewPreviousReports";
import McChatScreen from "@/screens/missionalComunity/chatting/McChatScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterNew" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="mainScreenAdmin" component={MainScreenAdmin} />
      <Stack.Screen name="chat" component={ChatListScreen} />
      <Stack.Screen name="mcs" component={MissionalCommunityScreen} />
      <Stack.Screen name="sermons" component={SermonsScreen} />
      <Stack.Screen name="members" component={ChurchMembersScreen} />
      <Stack.Screen name="give" component={GivingScreen} />
      <Stack.Screen name="annoucements" component={AnnoucementsScreen} />
      <Stack.Screen name="about" component={AboutDLMIScreen} />
      <Stack.Screen name="mcReport" component={WeeklyReports} />
      <Stack.Screen name="missionalCommunity" component={MissinalCommunity} />
      <Stack.Screen name="registermcMember" component={RegisterMcMember} />
      <Stack.Screen name="mcMembers" component={McMembers} />
      <Stack.Screen name="mcMember" component={McMember} />
      <Stack.Screen name="mcMemberAdmin" component={McMemberAdmin} />
      <Stack.Screen name="registerMc" component={RegisterMC} />
      <Stack.Screen name="mcButtons" component={MissionalCommunityButtons} />
      <Stack.Screen name="writeWeeklyReport" component={WriteWeeklyReport} />
      <Stack.Screen
        name="viewPreviousReports"
        component={ViewPreviousReports}
      />

      <Stack.Screen name="mcChatting" component={McChatScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AppNavigator;
