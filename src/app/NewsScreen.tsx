import NewsSummaryComponent from "@/components/NewsSummaryComponent";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { demoNews } from "../storage/demoNews";
import { Colors } from "../storage/colorCodes";

const NewsScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.newsCard}>
            <View style={styles.headerRow}>
              <Text style={styles.headerTitle}>LATEST NEWS</Text>

              <Pressable onPress={() => router.push("/NewsAndMemoScreen")}>
                <Text style={styles.viewAll}>View All {">"}</Text>
              </Pressable>
            </View>

            {demoNews
              .filter((item) => {
                const newsDate = new Date(item.date);
                const today = new Date();

                return (
                  newsDate.getDate() === today.getDate() &&
                  newsDate.getMonth() === today.getMonth() &&
                  newsDate.getFullYear() === today.getFullYear()
                );
              })
              .map((item) => (
                <NewsSummaryComponent key={item.id} item={item} />
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
  newsCard: {
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.secondary,
    marginTop: 20,
  },
  headerRow: {
    height: 40,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },

  headerTitle: {
    color: Colors.textDark,
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 1,
  },
  viewAll: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: "700",
  },
  newsItem: {
    flexDirection: "row",
    gap: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },
  iconBadge: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  iconBadgeFeatured: {
    backgroundColor: Colors.primary,
  },
  iconBadgeMuted: {
    backgroundColor: Colors.secondary,
  },
  newsTextBlock: {
    flex: 1,
    gap: 3,
  },
  newsTitle: {
    color: Colors.textDark,
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 23,
  },
  newsSummary: {
    color: Colors.textLight,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "500",
  },
  newsDate: {
    color: Colors.primary,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "700",
    marginTop: 4,
  },
});

export default NewsScreen;
