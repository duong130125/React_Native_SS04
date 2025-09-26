import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Button, Text } from "react-native";

import BT01 from "@/components/BT01";
import BT02 from "@/components/BT02";
import BT03 from "@/components/BT03";
import BT04 from "@/components/BT04";
import BT05 from "@/components/BT05";
import BT06 from "@/components/BT06";
import BT07 from "@/components/BT07";
import BT08 from "@/components/BT08";

export default function HomePage() {
  const [selected, setSelected] = useState<number | null>(null);

  const renderExercise = () => {
    switch (selected) {
      case 1:
        return <BT01 />;
      case 2:
        return <BT02 />;
      case 3:
        return <BT03 />;
      case 4:
        return <BT04 />;
      case 5:
        return <BT05 />;
      case 6:
        return <BT06 />;
      case 7:
        return <BT07 />;
      case 8:
        return <BT08 />;
      default:
        return (
          <Text style={{ textAlign: "center", color: "gray" }}>
            👉 Vui lòng chọn một bài tập ở trên
          </Text>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.title}>Danh sách bài tập</Text>
          <View style={styles.buttonGroup}>
            {[...Array(8)].map((_, i) => (
              <Button
                key={i + 1}
                title={`Bài tập ${i + 1}`}
                onPress={() => setSelected(i + 1)}
              />
            ))}
            {selected !== null && (
              <Button
                title="Quay lại danh sách"
                onPress={() => setSelected(null)}
              />
            )}
          </View>
        </View>

        <View style={styles.section}>{renderExercise()}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollContent: {
    padding: 10,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonGroup: {
    gap: 10,
  },
});
