import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

const CardTile = (props) => {
  return (
    <View style={styles.cardTile}>
      {/* <Image style={{height: 170}} source={{uri: "https://picsum.photos/700"}} /> */}
      <Card mode="contained" style={{ borderRadius: 0 }}>
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={styles.cardCover}
        />
        <Card.Content style={styles.cardContent}>
          <Text variant="titleLarge" style={styles.titleLarge}>{props.title}</Text>
          <Text variant="bodyMedium" style={styles.bodyMedium}>{props.description}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default CardTile;

const styles = StyleSheet.create({
  cardTile:{
    // width: 190,
  },  
  cardCover:{
    backgroundColor: '#ffff'
  },  
  cardContent: {
    backgroundColor: '#ffff',
    marginTop: 10
  },
  titleLarge: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  bodyMedium: {
    fontSize: 12,
    color: 'grey'
  }
});
