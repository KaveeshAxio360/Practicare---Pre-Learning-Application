import NewsSummaryComponent from "@/components/NewsSummaryComponent";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const summaryNewsItems = [
  {
    id: "1",
    title: "New Pathology Referral Pathway - Effective",
    summary:
      "Following feedback from our pathology partner, all referrals should now use the updated electronic form. Paper referrals will no longer be",
    date: "Jun 21, 2026 at 9:14 AM",
    featured: true,
  },
  {
    id: "2",
    title: "Cold & Flu Season Preparation - Stock Check Required",
    summary:
      "Pharmacy leads are requested to complete a full stock audit before 25 June to ensure adequate supplies for the upcoming cold and flu season",
    date: "Jun 19, 2026 at 2:45 PM",
    featured: false,
  },
  {
    id: "3",
    title: "Practicare Platform Update: Version 4.2 Released",
    summary:
      "The latest update includes improvements to the Noticeboards feature, faster task completion workflows, and a redesigned compliance alerts",
    date: "Jun 18, 2026 at 11:02 AM",
    featured: false,
  },
];

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

            {summaryNewsItems.map((item) => (
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
    backgroundColor: "#eef2f3",
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  safeArea: {
    flex: 1,
  },
  newsCard: {
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d9e3e5",
    marginTop: 20,
  },
  headerRow: {
    height: 40,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#e3ebed",
  },

  headerTitle: {
    color: "#101314",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 1,
  },
  viewAll: {
    color: "#1f958c",
    fontSize: 14,
    fontWeight: "700",
  },
  newsItem: {
    flexDirection: "row",
    gap: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#e3ebed",
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
    backgroundColor: "#1f958c",
  },
  iconBadgeMuted: {
    backgroundColor: "#e3ebed",
  },
  newsTextBlock: {
    flex: 1,
    gap: 3,
  },
  newsTitle: {
    color: "#111618",
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 23,
  },
  newsSummary: {
    color: "#768386",
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "500",
  },
  newsDate: {
    color: "#15998f",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "700",
    marginTop: 4,
  },
});

export default NewsScreen;
