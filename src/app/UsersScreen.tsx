import UserCard from "@/components/UserCard";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const response = await api.get("/users");
      console.log("Users response:", response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UserCard name={item.name} email={item.email} />
        )}
      />
    </SafeAreaView>
  );
}
