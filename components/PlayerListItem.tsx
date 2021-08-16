import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Player } from "../types";

interface Props {
  player: Player;
}
const PlayerListItem = ({ player }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://media.api-sports.io/football/players/${player.id}.png`,
        }}
        style={styles.image}
      />
      <View style={{ flexGrow: 1 }}>
        <Text style={styles.name}>{player.name}</Text>
        <Text>{player.match}</Text>
      </View>
      <View style={(styles.colContainer, { alignItems: "flex-end" })}>
        <Text style={styles.name}>
          ${(player.price / 1_000_000).toFixed(1)}m
        </Text>
        <Text>{player.position}</Text>
      </View>
      <Text style={styles.points}>{player.totalPoints} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  colContainer: {
    marginHorizontal: 15,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ddd",
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
  },
  points: {
    padding: 15,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default PlayerListItem;
