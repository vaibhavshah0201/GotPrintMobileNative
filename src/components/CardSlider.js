import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CardSilder from "react-native-cards-slider";
import CardTile from "./Card";

const CardSlider = (props) => {
  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.headLine}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
      <CardSilder style={styles.cardSlider}>
        <CardTile title="T-Shirts" description="Starting at $11.28" />
        <CardTile title="Bookmarks" description="Starting at $10.39" />
        <CardTile title="Notepads" description="Starting at $57.20" />
      </CardSilder>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: 10,
    height: 310,
    backgroundColor: "#ffff",
    borderColor: '#c0c4c1',
    borderWidth: 0.5
  },
  headLine: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    color: "#000",
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    marginLeft: 10,
    color: "grey",
  },
  cardSlider: {
    marginTop: 7,
    height: 10
  },
});

export default CardSlider;
