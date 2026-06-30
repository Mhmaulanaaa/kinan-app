import React, { useRef } from "react";
import { Animated, TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  item: any;
  navigation: any;
}

export default function LayananMenuCard({ item, navigation }: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
      stiffness: 300,
      damping: 20,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      stiffness: 260,
      damping: 18,
    }).start();
  };

  return (
    <Animated.View
      className="w-[31%] mb-4"
      style={{
        transform: [{ scale }],
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => navigation.navigate(item.screen)}
        className="bg-white border border-gray-100 rounded-3xl p-4 items-center h-36"
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.06,
          shadowRadius: 6,
          elevation: 1,
        }}
      >
        <View
          className={`${item.color} w-16 h-16 rounded-2xl items-center justify-center`}
        >
          <Ionicons name={item.icon as any} size={28} color={item.iconColor} />
        </View>

        <Text className="font-semibold text-gray-800 mt-4 text-xs text-center ">
          {item.title}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
