import { StyleSheet, Text, View } from "react-native";

interface NewsAndMemoComponentProps {
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
            item.priority === "Mandatory" ? "#fcf5f2" : "#ffffff",
        },
        {
          borderColor:
            item.priority === "Mandatory"
              ? "#ff4d4f"
              : item.priority === "High"
                ? "#faad14"
                : "#15998f",
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
                  item.type === "Practise Memo" ? "#1f958c" : "#e3ebed",
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
                    ? "#ff4d4f"
                    : item.priority === "High"
                      ? "#faad14"
                      : "#e3ebed",
              },
            ]}
          >
            {item.priority}
          </Text>
          <Text style={styles.label}>{item.category}</Text>
        </View>
        <Text style={styles.newsSummary}>{item.summary}</Text>
        <View style={styles.newsDateAndByContainer}>
          <Text style={styles.publisher}>By: {item.by}</Text>
          <Text style={styles.newsDate}>{item.date}</Text>
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
    color: "#111618",
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 23,
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
    backgroundColor: "#e3ebed",
  },
  newsSummary: {
    color: "#768386",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "500",
    marginVertical: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#d6dadb",
  },
  newsDateAndByContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
  },
  publisher: {
    color: "#15998f",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 16,
    marginTop: 4,
  },
  newsDate: {
    color: "#15998f",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "700",
    marginTop: 4,
  },
});

export default NewsAndMemoComponent;
