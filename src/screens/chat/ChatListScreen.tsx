import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const chats = [
  {
    name: "dr. Andi Nugroho, Sp.B",
    message: "Operasi laparotomi sudah selesai...",
    time: "09:45",
  },
  {
    name: "Ns. Siti Rahayu, S.Kep",
    message: "Terima kasih Ns. Siti",
    time: "09:32",
  },
  {
    name: "Group ICU",
    message: "Pasien di ruang ICU stabil",
    time: "09:28",
  },
  {
    name: "Ns. Dewi Lestari",
    message: "Dok, triage pasien baru...",
    time: "Kemarin",
  },
];

export default function ChatListScreen() {
  return (
    <View className="flex-1 bg-white pt-16 px-5">
      {/* HEADER */}
      <View className="flex-row items-center justify-between">
        <Text className="text-4xl font-extrabold text-gray-800">Chat</Text>

        <TouchableOpacity className="bg-gray-100 p-3 rounded-full">
          <Ionicons name="add" size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      {/* SEARCH */}
      <View className="bg-[#f5f6f8] rounded-2xl px-4 py-1 mt-6 flex-row items-center">
        <Ionicons name="search" size={20} color="#9ca3af" />

        <TextInput
          placeholder="Cari staf, departemen, grup..."
          className="flex-1 ml-3 py-3"
        />
      </View>

      {/* FILTER */}
      <View className="flex-row mt-5">
        <TouchableOpacity className="bg-green-100 px-5 py-2 rounded-full mr-3">
          <Text className="text-green-700 font-semibold">Semua</Text>
        </TouchableOpacity>

        <TouchableOpacity className="px-5 py-2">
          <Text className="text-gray-500">Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity className="px-5 py-2">
          <Text className="text-gray-500">Grup</Text>
        </TouchableOpacity>
      </View>

      {/* CHAT LIST */}
      <ScrollView className="mt-5" showsVerticalScrollIndicator={false}>
        {chats.map((item, index) => (
          <TouchableOpacity key={index} className="flex-row items-center mb-6">
            <Image
              source={{
                uri: `https://i.pravatar.cc/150?img=${index + 10}`,
              }}
              className="w-14 h-14 rounded-full"
            />

            <View className="flex-1 ml-4">
              <Text className="font-bold text-gray-800 text-base">
                {item.name}
              </Text>

              <Text className="text-gray-500 mt-1" numberOfLines={1}>
                {item.message}
              </Text>
            </View>

            <View className="items-end">
              <Text className="text-gray-400 text-xs">{item.time}</Text>

              <View className="bg-green-600 w-6 h-6 rounded-full items-center justify-center mt-2">
                <Text className="text-white text-xs font-bold">2</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
