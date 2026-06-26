import { StyleSheet, Text, View } from "react-native";

interface NewsSummaryComponentProps {
  item: {
    id: string;
    title: string;
    summary: string;
    date: string;
    featured: boolean;
  };
}

const NewsSummaryComponent = ({ item }: NewsSummaryComponentProps) => {
  return (
    <View key={item.id} style={styles.newsItem}>
      <View
        style={[
          styles.iconBadge,
          item.featured ? styles.iconBadgeFeatured : styles.iconBadgeMuted,
        ]}
      ></View>

      <View style={styles.newsTextBlock}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsSummary}>{item.summary}</Text>
        <Text style={styles.newsDate}>{item.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default NewsSummaryComponent;
