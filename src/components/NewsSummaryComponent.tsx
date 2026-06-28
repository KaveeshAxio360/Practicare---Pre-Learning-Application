import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../storage/colorCodes";

interface NewsSummaryComponentProps {
  item: {
    id: string;
    title: string;
    summary: string;
    date: string;
    featured: boolean;
    type: string;
    priority: string;
    category: string;
    by: string;
    detailedSummary: string;
  };
}

const NewsSummaryComponent = ({ item }: NewsSummaryComponentProps) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/news/[id]",
          params: { id: item.id },
        })
      }
    >
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
          <Text style={styles.newsDate}>
            {new Date(item.date).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default NewsSummaryComponent;
