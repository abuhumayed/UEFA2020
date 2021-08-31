import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRecoilState } from "recoil";
import { positionFilterState } from "../atoms/Players";

const positions = ["FWD", "MID", "DEF", "GCK"];

const Filters = () => {
  const [positionFilter, setPositionFilter] =
    useRecoilState(positionFilterState);

  const onFilterPress = (position: string) => {
    setPositionFilter((curPositionFilter) => {
      if (curPositionFilter.includes(position)) {
        return curPositionFilter.filter((pos) => pos != position);
      } else {
        return [...curPositionFilter, position];
      }
    });
  };

  const isSelected = (position) => {
    return positionFilter.includes(position);
  };

  return (
    <View style={styles.container}>
      {positions.map((position) => (
        <Pressable
          onPress={() => onFilterPress(position)}
          style={[
            styles.filterContainer,
            {
              backgroundColor: isSelected(position) ? "purple" : "#ddd",
            },
          ]}
        >
          <Text style={styles.text}> {position} </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },
  text: {
    fontWeight: "bold",
  },
  filterContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Filters;
