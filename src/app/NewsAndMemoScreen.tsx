import NewsSummaryComponent from "@/components/NewsSummaryComponent";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../demoData/colorCodes";
import demoNews from "../demoData/demoNews.json";

const NewsAndMemoScreen = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          router.back();

          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.pageHeader}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.pageTitle}>All News </Text>

              <Text>
                Returning in:{" "}
                {`${minutes.toString().padStart(2, "0")}:${seconds
                  .toString()
                  .padStart(2, "0")}`}
              </Text>
            </View>
            <Text style={styles.pageSubtitle}>
              The latest updates and internal reminders in one place.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            {demoNews.map((item) => (
              // <NewsAndMemoComponent item={item} key={item.id} />
              <NewsSummaryComponent item={item} key={item.id} />
            ))}
          </View>
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
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  pageHeader: {
    paddingHorizontal: 4,
    paddingTop: 12,
    paddingBottom: 16,
  },
  pageTitle: {
    color: Colors.textDark,
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: 0.4,
  },
  pageSubtitle: {
    marginTop: 6,
    color: Colors.textLight,
    fontSize: 14,
    lineHeight: 20,
  },
  sectionCard: {
    borderRadius: 15,
    marginBottom: 20,
  },

  newsItem: {
    flexDirection: "row",
    gap: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 30,
    borderRadius: 10,
    borderWidth: 1,
  },

  itemTextBlock: {
    flex: 1,
    gap: 5,
  },
  newsTitle: {
    color: Colors.textDark,
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 23,
  },
  newsSummary: {
    color: Colors.textLight,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "500",
    marginVertical: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },
  newsDateAndByContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
  },
  publisher: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 16,
    marginTop: 4,
  },
  newsDate: {
    color: Colors.primary,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "700",
    marginTop: 4,
  },
  secondaryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: -20,
  },
  label: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: Colors.secondary,
  },
});

export default NewsAndMemoScreen;
