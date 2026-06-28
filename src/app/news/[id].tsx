import NewsAndMemoComponent from "@/components/NewsAndMemoComponent";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { demoNews } from "../../storage/demoNews";

export default function NewsDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/NewsScreen");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const news = demoNews.find((item) => item.id === id);

  if (!news) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, paddingTop: 8 }}>
      <ScrollView>
        <NewsAndMemoComponent item={news} />
      </ScrollView>
    </SafeAreaView>
  );
}
