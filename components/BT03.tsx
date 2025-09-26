import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: isOn ? "#fffbea" : "#333" }]}
    >
      <MaterialCommunityIcons
        name={isOn ? "lightbulb-on" : "lightbulb-off"}
        size={120}
        color={isOn ? "gold" : "gray"}
      />

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isOn ? "orange" : "#007AFF" },
        ]}
        onPress={toggleLight}
      >
        <Text style={styles.buttonText}>{isOn ? "TẮT ĐÈN" : "BẬT ĐÈN"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
