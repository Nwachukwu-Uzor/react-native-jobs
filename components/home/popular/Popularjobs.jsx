import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./popularjobs.style";
import { COLORS, FONT, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hooks/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState();
  const { data, isLoading, isError, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  const handleCardPress = (item) => {
    router.push(`/job-details/${item?.job_id}`)
  };
  console.log(data[0])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.primary} size="large" />
        ) : isError ? (
          <Text>{error}</Text>
        ) : (
          <FlatList
            contentContainerStyle={{ columnGap: SIZES.medium }}
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
