import {
  NewsBackgroundColor,
  NewsBorderColor,
  NewsCategoryLabel,
  NewsPriorityColor,
  NewsPriorityLabel,
  NewsTypeColor,
  NewsTypeIcon,
  NewsTypeLabel,
} from "@/demoData/globalDataTypes";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../demoData/colorCodes";
interface NewsAndMemoComponentProps {
  item: {
    id: string;
    title: string;
    summary: string;
    created_date: string;
    published_date: string;
    featured: boolean;
    type: number;
    priority: number;
    category: number;
    by: string;
    detailedSummary: string;
  };
}

const NewsAndMemoComponent = ({ item }: NewsAndMemoComponentProps) => {
  return (
    <View
      key={item.id}
      style={[
        styles.newsItem,
        {
          backgroundColor: NewsBackgroundColor[item.priority],
          borderColor: NewsBorderColor[item.priority],
        },
      ]}
    >
      <View style={styles.itemTextBlock}>
        <View style={styles.titleRow}>
          <FontAwesome
            name={NewsTypeIcon[item.type]}
            size={22}
            color={Colors.primary}
          />
          <Text style={styles.newsTitle}>{item.title}</Text>
        </View>

        <View style={styles.secondaryRow}>
          <Text
            style={[
              styles.label,
              {
                backgroundColor: NewsTypeColor[item.type],
              },
            ]}
          >
            {NewsTypeLabel[item.type]}
          </Text>

          <Text
            style={[
              styles.label,
              {
                backgroundColor: NewsPriorityColor[item.priority],
              },
            ]}
          >
            {NewsPriorityLabel[item.priority]}
          </Text>

          <Text style={styles.label}>{NewsCategoryLabel[item.category]}</Text>
        </View>

        <Text style={styles.newsSummary}>{item.detailedSummary}</Text>

        <View style={styles.newsDateAndByContainer}>
          <Text style={styles.publisher}>By: {item.by}</Text>

          <Text style={styles.newsDate}>
            {new Date(item.created_date).toLocaleDateString()}
          </Text>
        </View>
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
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
  secondaryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
  label: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: Colors.secondary,
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
});

export default NewsAndMemoComponent;
