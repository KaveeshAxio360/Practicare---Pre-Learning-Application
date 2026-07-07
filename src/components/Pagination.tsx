import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

interface Props {
  currentPage: number;

  totalPages: number;

  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        disabled={currentPage === 1}
        onPress={() => onPageChange(currentPage - 1)}
      >
        <Text>Previous</Text>
      </Pressable>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {pages.map((page) => (
          <Pressable
            key={page}
            onPress={() => onPageChange(page)}
            style={[styles.pageButton, currentPage === page && styles.active]}
          >
            <Text>{page}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        style={styles.button}
        disabled={currentPage === totalPages}
        onPress={() => onPageChange(currentPage + 1)}
      >
        <Text>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "center",

    padding: 10,
  },

  pageButton: {
    padding: 10,

    marginHorizontal: 3,

    borderRadius: 8,

    backgroundColor: "#eee",
  },

  active: {
    backgroundColor: "#1f958c",
  },

  button: {
    padding: 10,
  },
});
