// screens/ChatScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

function ChatScreen({ route }) {
  const { chatId } = route.params;
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const sendMessage = () => {
    setMessages([...messages, { id: Date.now().toString(), text }]);
    setText("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <Text style={styles.message}>{item.text}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  message: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    marginVertical: 5,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default ChatScreen;
