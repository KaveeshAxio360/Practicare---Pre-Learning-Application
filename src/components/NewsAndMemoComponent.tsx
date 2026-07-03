import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../storage/colorCodes";

interface NewsAndMemoComponentProps {
  item: {
    id: string;
    title: string;
    summary: string;
    created_date: string;
    published_date: string;
    featured: boolean;
    type: string;
    priority: string;
    category: string;
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
          backgroundColor:
            item.priority === "Mandatory" ? Colors.MandatoryBG : Colors.white,
        },
        {
          borderColor:
            item.priority === "Mandatory"
              ? Colors.danger
              : item.priority === "High"
                ? Colors.warning
                : Colors.primary,
        },
      ]}
    >
      <View style={styles.itemTextBlock}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <View style={styles.secondaryRow}>
          <Text
            style={[
              styles.label,
              {
                backgroundColor:
                  item.type === "Practise Memo"
                    ? Colors.primary
                    : Colors.secondary,
              },
            ]}
          >
            {item.type}
          </Text>
          <Text
            style={[
              styles.label,
              {
                backgroundColor:
                  item.priority === "Mandatory"
                    ? Colors.danger
                    : item.priority === "High"
                      ? Colors.warning
                      : Colors.secondary,
              },
            ]}
          >
            {item.priority}
          </Text>
          <Text style={styles.label}>{item.category}</Text>
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
