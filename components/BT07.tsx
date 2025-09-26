import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const validateField = (field: string) => {
    let message = "";

    if (field === "name" && !form.name.trim()) {
      message = "Tên không được để trống";
    }

    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!form.email) message = "Email không được để trống";
      else if (!emailRegex.test(form.email)) message = "Email không hợp lệ";
    }

    if (field === "password") {
      if (!form.password) message = "Mật khẩu không được để trống";
      else if (form.password.length < 6)
        message = "Mật khẩu phải ít nhất 6 ký tự";
    }

    if (field === "confirmPassword") {
      if (form.confirmPassword !== form.password)
        message = "Xác nhận mật khẩu không khớp";
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const isFormValid = () => {
    return (
      form.name &&
      form.email &&
      form.password.length >= 6 &&
      form.password === form.confirmPassword &&
      Object.values(errors).every((err) => err === "")
    );
  };

  const handleSubmit = () => {
    Alert.alert("Đăng ký thành công");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tạo tài khoản</Text>

      <TextInput
        style={styles.input}
        placeholder="Tên"
        value={form.name}
        onChangeText={(val) => handleChange("name", val)}
        onBlur={() => validateField("name")}
      />
      {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(val) => handleChange("email", val)}
        onBlur={() => validateField("email")}
        keyboardType="email-address"
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={form.password}
        onChangeText={(val) => handleChange("password", val)}
        onBlur={() => validateField("password")}
        secureTextEntry
      />
      {errors.password ? (
        <Text style={styles.error}>{errors.password}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Xác nhận mật khẩu"
        value={form.confirmPassword}
        onChangeText={(val) => handleChange("confirmPassword", val)}
        onBlur={() => validateField("confirmPassword")}
        secureTextEntry
      />
      {errors.confirmPassword ? (
        <Text style={styles.error}>{errors.confirmPassword}</Text>
      ) : null}

      <TouchableOpacity
        style={[styles.button, !isFormValid() && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={!isFormValid()}
      >
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
  },
  error: { color: "red", marginBottom: 10 },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonDisabled: { backgroundColor: "#aaa" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default RegisterForm;
