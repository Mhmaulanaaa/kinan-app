import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function QuickMenuCard({ item, navigation }: any) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.navigate(item.screen);
    });
  };

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
      }}
      className="w-[30%] mb-4"
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={handlePress}
        className="bg-white rounded-3xl p-4 items-center shadow-sm"
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.06,
          shadowRadius: 6,
          elevation: 3,
        }}
      >
        <View
          className={`${item.bg} w-14 h-14 rounded-2xl items-center justify-center`}
        >
          <Ionicons name={item.icon as any} size={24} color={item.color} />
        </View>

        <Text className="text-gray-700 text-center text-[11px] mt-3 font-semibold leading-5">
          {item.title}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
