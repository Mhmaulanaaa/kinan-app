import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const diklat = [
  "Pelatihan ICU",
  "Workshop Bedah",
  "Seminar Nasional",
  "E-Learning Rumah Sakit",
];

export default function LayananDiklatScreen() {
  return (
    <View className="flex-1 bg-white pt-16 px-5">
      <Text className="text-3xl font-extrabold text-gray-800 mb-6">
        Layanan Diklat
      </Text>

      <ScrollView>
        {diklat.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="bg-purple-50 rounded-3xl p-5 mb-4 flex-row items-center"
          >
            <View className="w-14 h-14 rounded-2xl bg-purple-100 items-center justify-center">
              <Ionicons name="school" size={26} color="#7c3aed" />
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
