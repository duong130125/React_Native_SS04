import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type CurrencyInputProps = {
  label: string;
  value: string;
  onChange: (text: string) => void;
};

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default function BT05() {
  const [vnd, setVnd] = useState("");
  const [usd, setUsd] = useState("");

  const rate = 25000;

  const handleVndChange = (text: string) => {
    setVnd(text);
    const num = parseFloat(text);
    if (!isNaN(num)) {
      setUsd((num / rate).toFixed(2));
    } else {
      setUsd("");
    }
  };

  const handleUsdChange = (text: string) => {
    setUsd(text);
    const num = parseFloat(text);
    if (!isNaN(num)) {
      setVnd((num * rate).toString());
    } else {
      setVnd("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chuyển đổi tiền tệ</Text>

      <CurrencyInput label="VND" value={vnd} onChange={handleVndChange} />
      <CurrencyInput label="USD" value={usd} onChange={handleUsdChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 12,
    backgroundColor: "#fff",
  },
});
