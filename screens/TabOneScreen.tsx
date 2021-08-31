import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { StyleSheet, SafeAreaView, Pressable, Text, View } from "react-native";
import Field from "../components/Field";
import Filters from "../components/Filters";
import PlayersList from "../components/PlayersList";
import TeamStats from "../components/TeamStats";

export default function TabOneScreen() {
  const playersBottomSheet = useRef<BottomSheet>(null);

  const filterBottomSheet = useRef<BottomSheet>(null);

  const viewPlayers = () => {
    playersBottomSheet.current?.expand();
  };

  // variables
  const snapPoints = [0, "50%"];

  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />
      <Field />
      <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
        <Text>View Players</Text>
      </Pressable>
      <BottomSheet ref={playersBottomSheet} index={0} snapPoints={snapPoints}>
        <Pressable
          onPress={() => {
            filterBottomSheet.current?.expand();
          }}
          style={styles.buttonContainer}
        >
          <Text>Filters</Text>
        </Pressable>
        <PlayersList />
      </BottomSheet>
      <BottomSheet ref={filterBottomSheet} index={0} snapPoints={snapPoints}>
        <Filters />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#4AD157",
  },
  buttonContainer: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginTop: "auto",
  },
  contentContainer: {},
});
