// screens/ChatListScreen.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const chats = [
  { id: "1", name: "Chat 1" },
  { id: "2", name: "Chat 2" },
];

function ChatListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Chat", { chatId: item.id })}
    >
      <Text style={styles.item}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 20, borderBottomWidth: 1, borderBottomColor: "gray" },
});

export default ChatListScreen;
