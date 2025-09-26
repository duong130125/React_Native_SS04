import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

type UserProps = {
  name: string;
  email: string;
  avatarUrl: string;
};

const UserInfoCard: React.FC<UserProps> = ({ name, email, avatarUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default function BT01() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Danh sách người dùng</Text>

      <UserInfoCard
        name="Trần Văn An"
        email="tran.an@example.com"
        avatarUrl="https://i.pravatar.cc/150?u=2"
      />

      <UserInfoCard
        name="Lý Thị Bình"
        email="ly.binh@example.com"
        avatarUrl="https://i.pravatar.cc/150?u=1"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
});
