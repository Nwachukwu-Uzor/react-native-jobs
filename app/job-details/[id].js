import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  SafeAreaView,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useRouter, useSearchParams, Stack } from "expo-router";
import {
  JobAbout,
  JobTabs,
  Company,
  ScreenHeaderBtn,
  Specifics,
  JobFooter,
} from "../../components/";

import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hooks/useFetch";

const JobDetails = () => {
  const { id } = useSearchParams();
  const [refreshing, setRefreshing] = useState(false);

  const { data, isLoading, isError, error } = useFetch("job-details", {
    job_id: id,
  });

  if (data) {
    console.log(data);
  }

  const onRefresh = () => {};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
          }
        >
          {isLoading ? (
            <ActivityIndicator color={COLORS.primary} size="large" />
          ) : isError ? (
            <Text>{error}</Text>
          ) : data?.length === 0 ? (
            <Text>No Data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0]?.employer_logo}
                companyName={data[0]?.employer_name}
                jobTitle={data[0]?.job_title}
                location={data[0]?.job_country}
              />
              <JobTabs />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
