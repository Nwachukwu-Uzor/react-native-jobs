import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";

const Welcome = () => {
  const router = useRouter();
  
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;
