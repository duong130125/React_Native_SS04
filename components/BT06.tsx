import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const TodoItem = ({ note, onDelete }: any) => {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{note}</Text>
      <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
        <Text style={styles.deleteText}>Xóa</Text>
      </TouchableOpacity>
    </View>
  );
};

const BT06 = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (text.trim() === "") return;
    setNotes([...notes, text]);
    setText("");
  };

  const deleteNote = (index: number) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📒 Ghi chú</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập ghi chú mới..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addNote}>
          <Text style={styles.addText}>Thêm</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TodoItem note={item} onDelete={() => deleteNote(index)} />
        )}
        scrollEnabled={false}
      />
    </View>
  );
};

export default BT06;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 15,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(29, 26, 26, 0.1)",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  addBtn: {
    marginLeft: 10,
    backgroundColor: "#007BFF",
    paddingHorizontal: 15,
    borderRadius: 6,
    justifyContent: "center",
  },
  addText: {
    color: "#fff",
    fontWeight: "bold",
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  todoText: {
    fontSize: 16,
    paddingVertical: 8,
  },
  deleteBtn: {
    backgroundColor: "#dc3545",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: "center",
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
