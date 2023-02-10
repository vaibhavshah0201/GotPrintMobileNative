import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

const CardTile = (props) => {
  return (
    <View style={styles.cardTile}>
      <Card mode="contained">
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={styles.cardCover}
        />
        <Card.Content style={styles.cardContent}>
          <Text style={styles.titleLarge}>{props.title}</Text>
          <Text style={styles.bodyMedium}>{props.description}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default CardTile;

const styles = StyleSheet.create({
  cardTile: {
    width: 210,
    paddingLeft: 10,
    paddingTop: 10,
  },
  cardCover: {
    backgroundColor: "#ffff",
    borderRadius: 1,
  },
  cardContent: {
    backgroundColor: "#ffff",
    paddingTop: 10,
    marginLeft: -10
  },
  titleLarge: {
    fontSize: 17,
    fontWeight: "600",
    color: "#63605f",
  },
  bodyMedium: {
    fontSize: 16,
    color: "grey",
  },
});
