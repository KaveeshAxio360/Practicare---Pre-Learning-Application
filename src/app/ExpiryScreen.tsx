import ExpiryRow from "@/components/ExpiryAlertCard";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../demoData/colorCodes";

const ExpiryScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.headerText}>EXPIRY ALERT</Text>
            </View>
            <ExpiryRow expired={10} expiring={5} within30Days={15} />
          </View>

          <Button
            title="Users Page"
            onPress={() => router.push("/UsersScreen")}
          />
          <Button
            title="Pokemon Page"
            onPress={() => router.push("/PokemonScreen")}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  safeArea: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#F09595",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    gap: 8,
  },
  headerText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#E24B4A",
    letterSpacing: 1,
  },
});

export default ExpiryScreen;
