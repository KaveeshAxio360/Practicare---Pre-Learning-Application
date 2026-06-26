import NewsAndMemoComponent from "@/components/NewsAndMemoComponent";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const newsItems = [
  {
    id: "1",
    title: "New Pathology Referral Pathway - Effective",
    summary: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus, felis vitae placerat ultricies, arcu sapien tristique diam, sed pharetra tortor libero eget sapien. Sed tincidunt lectus a lectus venenatis, nec molestie ex placerat. Fusce mauris dui, cursus ut diam nec, laoreet gravida mauris. Praesent risus velit, fringilla sit amet fringilla et, ultricies nec mi. Vestibulum quis pharetra ex. Mauris auctor sed dolor ac egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris accumsan velit nisi. Nulla molestie venenatis orci nec aliquet.

Curabitur mattis tortor id metus vulputate, a elementum diam sollicitudin. Nunc euismod non ante sed lacinia. Donec in diam ac risus pellentesque volutpat id vel leo. Nunc risus orci, elementum nec malesuada nec, sodales et mauris. Duis quis arcu urna. Integer in tellus facilisis, feugiat lacus eget, elementum libero. Pellentesque consequat magna non nunc condimentum consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Suspendisse ac turpis molestie justo venenatis ultrices. Curabitur ultricies sapien sit amet felis lacinia, venenatis convallis magna sagittis. Praesent a metus odio. Nullam nisi enim, ornare a porta eget, commodo dignissim orci. Maecenas ultrices dui sit amet libero tristique laoreet non sit amet ligula. Phasellus cursus efficitur nisl ut pellentesque. Nullam ac imperdiet ligula, eu consectetur orci. Ut purus felis, euismod pretium dui eget, cursus blandit quam. Maecenas volutpat ullamcorper ante. In commodo mi lectus, eget mattis dui placerat quis. Curabitur elementum velit a pulvinar laoreet. Integer mollis viverra tristique. Fusce dapibus vitae felis eu venenatis. Cras tristique sed dui id commodo.`,
    featured: true,
    type: "Practise Memo",
    priority: "Mandatory",
    category: "General",
    by: "Clinical Lead",
    date: "Jun 21, 2026 at 9:14 AM",
  },
  {
    id: "2",
    title: "Cold & Flu Season Preparation - Stock Check Required",
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex rem, est optio qui beatae praesentium voluptate! Libero dicta cum aut sit voluptate expedita eius iure illo assumenda, doloremque sapiente.
      Molestias quis iste minus voluptates repudiandae rerum, maiores iusto, hic modi esse molestiae doloremque mollitia nemo reiciendis tempore voluptatum. Officiis dolore optio, voluptatem quibusdam possimus eos maiores incidunt expedita maxime.
      Sunt enim voluptatem rem ducimus deleniti at fugiat nulla tempore incidunt in similique, ea ad maxime ex quas vitae dignissimos fuga quo nostrum quis dolore possimus autem. Veritatis, quo beatae!`,
    featured: false,
    type: "Practice News",
    priority: "High",
    category: "Clinical",
    by: "Pharmacy Lead",
    date: "Jun 19, 2026 at 2:45 PM",
  },
  {
    id: "3",
    title: "Practicare Platform Update: Version 4.2 Released",
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptatibus repudiandae officia id atque deleniti ratione unde quae fuga, maxime esse dolor at corrupti. Cumque, alias. Magnam cumque modi recusandae?
      Deleniti blanditiis ullam tempora optio amet incidunt sed natus, hic, perspiciatis error veritatis voluptates voluptas doloribus. Rem facilis explicabo rerum id asperiores? Provident fuga eum similique et alias! Magnam, velit?
      Neque quod temporibus, reiciendis veritatis itaque maxime accusantium, asperiores pariatur enim porro animi nam modi! Enim fugiat harum dolore quisquam, libero asperiores nemo ipsum rerum aperiam, rem doloribus cum consequatur.`,
    featured: false,
    type: "Practice News",
    priority: "Normal",
    category: "Administrative",
    by: "Product Team",
    date: "Jun 18, 2026 at 11:02 AM",
  },
];

const NewsAndMemoScreen = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(20); // 20 seconds countdown

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          router.back();
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.pageHeader}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.pageTitle}>News & Memos</Text>

              <Text>
                Returning in:{" "}
                {`${minutes.toString().padStart(2, "0")}:${seconds
                  .toString()
                  .padStart(2, "0")}`}
              </Text>
            </View>
            <Text style={styles.pageSubtitle}>
              The latest updates and internal reminders in one place.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            {newsItems.map((item) => (
              <NewsAndMemoComponent item={item} key={item.id} />
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
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  pageHeader: {
    paddingHorizontal: 4,
    paddingTop: 12,
    paddingBottom: 16,
  },
  pageTitle: {
    color: "#101314",
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: 0.4,
  },
  pageSubtitle: {
    marginTop: 6,
    color: "#6f8085",
    fontSize: 14,
    lineHeight: 20,
  },
  sectionCard: {
    borderRadius: 15,
    marginBottom: 20,
  },

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
});

export default NewsAndMemoScreen;
