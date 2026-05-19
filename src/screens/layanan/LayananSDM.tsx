import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const sdm = [
  "Absensi Pegawai",
  "Data Karyawan",
  "Cuti Online",
  "Penilaian Kinerja",
];

export default function LayananSDMScreen() {
  return (
    <View className="flex-1 bg-white pt-16 px-5">
      <Text className="text-3xl font-extrabold text-gray-800 mb-6">
        Layanan SDM
      </Text>

      <ScrollView>
        {sdm.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="bg-blue-50 rounded-3xl p-5 mb-4 flex-row items-center"
          >
            <View className="w-14 h-14 rounded-2xl bg-blue-100 items-center justify-center">
              <Ionicons name="people" size={26} color="#2563eb" />
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
