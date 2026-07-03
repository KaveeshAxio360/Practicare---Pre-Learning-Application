import { StyleSheet, Text, View } from "react-native";

interface Props {
  name: string;
  email: string;
}

export default function UserCard({ name, email }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
