// screens/GroupChatScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import api from "./Api";

const McChatScreen = ({ route }) => {
  const { item } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const mcId = item.mc_id;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get(`/messages.php?group_id=${mcId}`);
        setMessages(response.data.messages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [mcId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    try {
      await api.post("/messages.php", {
        mc_id: mcId,
        user_id: userId,
        message: newMessage,
        send_message: true,
      });
      setNewMessage("");
      // Refresh messages
      const response = await api.get(`/messages.php?group_id=${mcId}`);
      setMessages(response.data.messages);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.timestamp}>
              {new Date(item.timestamp).toLocaleString()}
            </Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  username: {
    fontWeight: "bold",
  },
  message: {
    marginTop: 5,
  },
  timestamp: {
    marginTop: 5,
    fontSize: 10,
    color: "gray",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default McChatScreen;
