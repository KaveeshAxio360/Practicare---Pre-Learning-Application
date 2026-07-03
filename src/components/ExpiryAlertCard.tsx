import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../storage/colorCodes";

type ExpiryRowProps = {
  expired: number;
  expiring: number;
  within30Days: number;
};

export default function ExpiryRow({
  expired,
  expiring,
  within30Days,
}: ExpiryRowProps) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.row, { backgroundColor: Colors.ExpiryDangerBG }]}
      >
        <Text style={[styles.rowNumber, { color: Colors.ExpiryDangerNumber }]}>
          {expired}
        </Text>
        <Text style={[styles.rowLabel, { color: Colors.ExpiryDangerLabel }]}>
          Items {"\n"}Expired
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.row, { backgroundColor: Colors.ExpiryWarningBG }]}
      >
        <Text style={[styles.rowNumber, { color: Colors.ExpiryWarningNumber }]}>
          {expiring}
        </Text>
        <Text style={[styles.rowLabel, { color: Colors.ExpiryWarningLabel }]}>
          Expiring {"\n\u2264"} 7 Days
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.row, { backgroundColor: Colors.ExpiryNormalBG }]}
      >
        <Text style={[styles.rowNumber, { color: Colors.ExpiryNormalNumber }]}>
          {within30Days}
        </Text>
        <Text style={[styles.rowLabel, { color: Colors.ExpiryNormalLabel }]}>
          Within {"\n"}30 Days
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  rowNumber: {
    fontSize: 28,
    fontWeight: "700",
    width: 36,
  },
  rowLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 19,
    marginLeft: 12,
  },
  chevron: {
    marginLeft: 8,
  },
});
