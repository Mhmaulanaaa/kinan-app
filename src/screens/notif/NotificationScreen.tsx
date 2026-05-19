import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
const notif = [
  {
    title: "Pengumuman Baru",
    desc: "Update jadwal pelatihan BLS",
  },
  {
    title: "Permintaan Layanan Disetujui",
    desc: "Permintaan akses SIM RS Anda telah disetujui.",
  },
  {
    title: "Pesan Baru",
    desc: "dr. Andi Nugroho mengirim pesan",
  },
];

export default function NotificationScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white pt-8 px-5">
      <StatusBar style="dark" />
      <View className="flex-row items-center justify-between">
        <Text className="text-3xl font-extrabold text-gray-800">
          Notifikasi
        </Text>

        <TouchableOpacity>
          <Text className="text-green-600 font-semibold">
            Tandai semua dibaca
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="mt-8" showsVerticalScrollIndicator={false}>
        {notif.map((item, index) => (
          <TouchableOpacity key={index} className="flex-row items-start mb-7">
            <Image
              source={{
                uri: `https://i.pravatar.cc/150?img=${index + 20}`,
              }}
              className="w-12 h-12 rounded-full"
            />

            <View className="flex-1 ml-4">
              <Text className="font-bold text-gray-800">{item.title}</Text>

              <Text className="text-gray-500 mt-1 leading-5">{item.desc}</Text>

              <Text className="text-gray-400 text-xs mt-2">
                2 jam yang lalu
              </Text>
            </View>

            <View className="w-3 h-3 rounded-full bg-green-500 mt-2" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
