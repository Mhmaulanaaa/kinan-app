import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const itServices = [
  "Helpdesk IT",
  "Maintenance Server",
  "Akses WiFi",
  "Monitoring Sistem",
];

export default function LayananITScreen() {
  return (
    <View className="flex-1 bg-white pt-16 px-5">
      <Text className="text-3xl font-extrabold text-gray-800 mb-6">
        Layanan IT
      </Text>

      <ScrollView>
        {itServices.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="bg-cyan-50 rounded-3xl p-5 mb-4 flex-row items-center"
          >
            <View className="w-14 h-14 rounded-2xl bg-cyan-100 items-center justify-center">
              <Ionicons name="desktop" size={26} color="#0891b2" />
            </View>

            <Text className="text-base font-bold text-gray-800 ml-4">
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
