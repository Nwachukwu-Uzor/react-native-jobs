import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  ScreenHeaderBtn,
  Welcome,
  Popularjobs,
} from "../components";
import { Stack, useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => {
                console.log("Menu Clicked");
              }}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={() => {
                console.log("Profile Clicked");
              }}
            />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
