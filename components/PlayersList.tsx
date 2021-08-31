import React from "react";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { View, Text } from "react-native";
import PlayerListItem from "./PlayerListItem";
import { useRecoilState, useRecoilValue } from "recoil";
import { allPlayerState, filteredPlayers } from "../atoms/Players";

const PlayersList = () => {
  //const [players] = useRecoilState(allPlayerState);
  // const setPlayers = useSetRecoilState(allPlayersState)
  const players = useRecoilValue(filteredPlayers);

  return (
    <BottomSheetFlatList
      data={players}
      renderItem={({ item }) => <PlayerListItem player={item} />}
    />
  );
};

export default PlayersList;
