import { Host, RadioButton } from "@expo/ui/jetpack-compose";
import DateTimePicker from "@react-native-community/datetimepicker";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";
import CountryPicker from "react-native-country-picker-modal";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardScreen() {
  const [fullName, setFullName] = React.useState("");
  const [selectedDesignation, setSelectedDesignation] = React.useState("");
  const [selectedSatisfaction, setSelectedSatisfaction] = React.useState("yes");
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showCountry, setShowCountry] = React.useState(false);
  const [country, setCountry] = React.useState<any>(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState<any>("");
  const [selectedSkills, setSelectedSkills] = React.useState<any>("");
  const [selectedPriceRange, setSelectedPriceRange] = React.useState(50);
  const [selectedAge, setSelectedAge] = React.useState(25);
  const [startDate, setStartDate] = React.useState<any>(null);
  const [endDate, setEndDate] = React.useState<any>(null);

  const satisfactionOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  const languageOptions = [
    { label: "English", value: "english" },
    { label: "Sinhala", value: "sinhala" },
    { label: "Spanish", value: "spanish" },
    { label: "French", value: "french" },
    { label: "German", value: "german" },
  ];

  const skillOptions = [
    { label: "Swimming", value: "swimming" },
    { label: "Dancing", value: "dancing" },
    { label: "Singing", value: "singing" },
    { label: "Cooking", value: "cooking" },
    { label: "Painting", value: "painting" },
  ];

  const calendarTheme = {
    backgroundColor: "#ffffff",
    calendarBackground: "#ffffff",
    textSectionTitleColor: "#000000",
    dayTextColor: "#000000",
    monthTextColor: "#000000",
    arrowColor: "#009688",
  };

  const getDatesInRange = (start: string, end: string) => {
    const dates: any = {};

    let current = new Date(start);
    const last = new Date(end);

    while (current <= last) {
      const dateString = current.toISOString().split("T")[0];

      dates[dateString] = {
        color: "#70d7c7",
        textColor: "white",
      };

      current.setDate(current.getDate() + 1);
    }

    dates[start] = {
      startingDay: true,
      color: "#009688",
      textColor: "white",
    };

    dates[end] = {
      endingDay: true,
      color: "#009688",
      textColor: "white",
    };

    return dates;
  };

  const onDayPress = (day: any) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day.dateString);
      setEndDate(null);
      return;
    }

    if (day.dateString >= startDate) {
      setEndDate(day.dateString);
    } else {
      setStartDate(day.dateString);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <Text style={styles.headerText}>Basic Input Types</Text>

          <View>
            <Text style={styles.sectionTitle}>Text Input</Text>
            <TextInput
              placeholder="Enter your full name"
              placeholderTextColor="#000000"
              value={fullName}
              onChangeText={setFullName}
              style={styles.textInput}
            />
          </View>

          <View>
            <Text style={styles.sectionTitle}>Dropdown</Text>
            <View style={styles.pickerCard}>
              <Picker
                selectedValue={selectedDesignation}
                onValueChange={(itemValue) => setSelectedDesignation(itemValue)}
                style={styles.picker}
                dropdownIconColor="#000000"
              >
                <Picker.Item label="Select Designation" value="" />
                <Picker.Item
                  label="Software Engineer"
                  value="software_engineer"
                />
                <Picker.Item label="Product Manager" value="product_manager" />
                <Picker.Item label="Designer" value="designer" />
              </Picker>
            </View>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Radio Buttons</Text>
            <Text style={styles.helperText}>
              Are you satisfied with the service?
            </Text>
            <View style={styles.radioGroup}>
              {satisfactionOptions.map((option) => {
                const isSelected = selectedSatisfaction === option.value;

                return (
                  <View
                    key={option.value}
                    style={[
                      styles.radioOption,
                      isSelected && styles.radioOptionSelected,
                    ]}
                  >
                    <Text style={styles.radioOptionLabel}>{option.label}</Text>
                    <Host matchContents>
                      <RadioButton
                        selected={isSelected}
                        onClick={() => setSelectedSatisfaction(option.value)}
                      />
                    </Host>
                  </View>
                );
              })}
            </View>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Switch</Text>
            <View style={styles.switchRow}>
              <Text style={styles.helperText}>Enable notifications</Text>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
              />
            </View>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Slider</Text>
            <View style={styles.sliderRow}>
              <Text style={styles.helperText}>Price Range </Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={10}
                value={selectedPriceRange}
                minimumTrackTintColor="#31ddc4"
                maximumTrackTintColor="#ffffff"
                thumbTintColor="#31ddc4"
                thumbSize={20}
                onValueChange={(value) => {
                  setSelectedPriceRange(value);
                }}
              />
              <Text style={styles.dateValue}>{selectedPriceRange}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionTitle}>Number</Text>
            <View style={styles.sliderRow}>
              <Text style={styles.helperText}>Your Age </Text>

              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                value={selectedAge.toString()}
                onChangeText={(text) => {
                  const age = parseInt(text, 10);
                  if (!isNaN(age)) {
                    setSelectedAge(age);
                  }
                }}
              />
            </View>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Searchable DropDown</Text>
            <View>
              <Dropdown
                style={styles.dropdown}
                data={languageOptions}
                valueField="value"
                maxHeight={300}
                labelField="label"
                search
                placeholder="Select language"
                searchPlaceholder="Search languages "
                value={selectedLanguage}
                onChange={(item) => {
                  setSelectedLanguage(item.value);
                }}
              />
            </View>
            <Text style={styles.dateValue}>
              {selectedLanguage || "No language selected"}
            </Text>
          </View>

          <View>
            <Text style={styles.sectionTitle}>MultiSelect DropDown</Text>
            <View>
              <MultiSelect
                style={styles.dropdown}
                data={skillOptions}
                labelField="label"
                valueField="value"
                placeholder="Select your skills"
                value={selectedSkills}
                onChange={(items) => {
                  setSelectedSkills(items);
                }}
              />
            </View>
            {/* <Text style={styles.dateValue}>
              {selectedSkills.length > 0
                ? selectedSkills.join(", ")
                : "No skills selected"}
            </Text> */}
          </View>

          <View>
            <Text style={styles.sectionTitle}>Date</Text>
            <View style={styles.sliderRow}>
              <Text style={styles.helperText}>Select a Date</Text>
              <Pressable
                onPress={() => setShowDatePicker(true)}
                style={styles.dateButton}
              >
                <Text style={styles.dateButtonText}>
                  {selectedDate.toDateString()}
                </Text>
              </Pressable>
              {showDatePicker ? (
                <DateTimePicker
                  value={selectedDate}
                  onValueChange={(_, date) => {
                    setShowDatePicker(false);

                    if (date) {
                      setSelectedDate(date);
                    }
                  }}
                  mode="date"
                  display="default"
                  style={styles.datePicker}
                />
              ) : null}
              <Text style={styles.dateValue}>
                {selectedDate.toDateString()}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Calendar Range</Text>
            <View style={styles.calendarCard}>
              <Text style={styles.helperText}>Tap start and end dates</Text>
              <Calendar
                markingType="period"
                markedDates={
                  startDate && endDate
                    ? getDatesInRange(startDate, endDate)
                    : startDate
                      ? {
                          [startDate]: {
                            selected: true,
                            selectedColor: "#009688",
                          },
                        }
                      : {}
                }
                onDayPress={onDayPress}
                theme={calendarTheme}
              />
              <Text style={styles.dateValue}>
                Start Date: {startDate || "Not selected"}
              </Text>
              <Text style={styles.dateValue}>
                End Date: {endDate || "Not selected"}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Country Picker</Text>
            <View style={styles.sliderRow}>
              <Pressable
                onPress={() => setShowCountry(true)}
                style={styles.dateButton}
              >
                <Text style={styles.dateButtonText}>Select Country</Text>
              </Pressable>
              {showCountry && (
                <CountryPicker
                  withFilter
                  withFlag
                  withCountryNameButton
                  withAlphaFilter
                  withCallingCode
                  visible={showCountry}
                  onSelect={(country) => {
                    console.log("Selected country:", country.name);
                    setCountry(country.name);
                    setShowCountry(false);
                  }}
                  onClose={() => setShowCountry(false)}
                  countryCode={"US"}
                />
              )}
              <Text style={styles.dateValue}>
                {country || "No country selected"}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Checkbox</Text>
            <View style={styles.checkboxRow}>
              <Checkbox
                value={acceptTerms}
                onValueChange={setAcceptTerms}
                color="#31ddc4"
                style={styles.checkbox}
              />
              <Text style={styles.helperText}>I agree to the terms</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 25,
  },
  safeArea: {
    flex: 1,
  },

  headerText: {
    fontSize: 25,
    fontWeight: "800",
    color: "#ffffff",
  },

  sectionTitle: {
    color: "#eff8f5",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    marginTop: 20,
    paddingLeft: 5,
  },
  textInput: {
    borderRadius: 15,
    backgroundColor: "#ffffff",
    color: "#000000",
    paddingHorizontal: 15,
    fontSize: 15,
  },
  pickerCard: {
    borderRadius: 15,
    backgroundColor: "#ffffff",
    borderWidth: 1,
  },
  picker: {
    color: "#000000",
    width: "100%",
  },
  helperText: {
    color: "#ffffff",
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 10,
  },
  radioGroup: {
    gap: 10,
  },
  radioOption: {
    minHeight: 50,
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  radioOptionSelected: {
    borderColor: "#31ddc4",
    backgroundColor: "#31ddc4",
  },
  radioOptionLabel: {
    color: "#eff8f5",
    fontSize: 15,
    fontWeight: "600",
  },
  switchRow: {
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sliderRow: {
    minHeight: 50,
    flexDirection: "column",
    alignItems: "stretch",
    gap: 10,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  dateButton: {
    width: "100%",
    minHeight: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#31ddc4",
    backgroundColor: "rgba(49, 221, 196, 0.12)",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  dateButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
  datePicker: {
    width: "100%",
  },
  dateValue: {
    color: "#cfeee8",
    fontSize: 14,
    marginLeft: 10,
  },
  calendarCard: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#31ddc4",
    backgroundColor: "rgba(49, 221, 196, 0.12)",
    padding: 12,
    gap: 10,
  },
  checkboxRow: {
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  dropdown: {
    width: "100%",
    minHeight: 50,
    borderRadius: 15,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    paddingHorizontal: 15,
    color: "#000000",
    marginBottom: 10,
  },

  checkbox: {
    width: 20,
    height: 20,
  },
});
