import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import CardSilder from "../../components/CardSlider";
import Carousel from "../../components/Carousel";
const Featured = () => {
  const toggleDetails = () => {};
  const data = [
    { id: "a", value: "A" },
    { id: "b", value: "B" },
    { id: "c", value: "C" },
    { id: "d", value: "D" },
    { id: "e", value: "E" },
    { id: "f", value: "F" },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Carousel />
        <CardSilder
          title="V-Day Prints"
          description="Upload or create your own design to get started"
        />
        <View style={styles.bannerSection}>
          <Image
            style={styles.banner1}
            source={require("../../../assets/banners/custom_tshirts.jpg")}
          />
        </View>
        <CardSilder
          title="Special Business Cards Shapes"
          description="Variety of shapes and sizes to create a unique card"
        />
        <CardSilder
          title="Signs & Banners"
          description="Popular Sizes on a variety of materials."
        />
        <CardSilder
          title="Roll Labels"
          description="Cusomizable Labels with a variety of uses"
        />
        <View style={styles.bannerSection}>
          <Image
            style={styles.banner1}
            source={require("../../../assets/banners/custom_tshirts.jpg")}
          />
        </View>
        <View style={styles.satisfactionContainer}>
          <View style={styles.satisfactionHeadSection}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("../../../assets/banners/new_satisfaction_guarantee.jpg")}
            />
            <View style={styles.labelSection}>
              <Text style={styles.labelMedium}>
                First-Time Customer? No Problem!
              </Text>
              <Text style={styles.labelSmall}>Order with confidence</Text>
              <TouchableOpacity onPress={toggleDetails}>
                <Text style={styles.detailsLabel}>More Details</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.detailsText}>
              We offer a Money Back Satisfaction Guantee to our first-time
              customers for orders with a subtotal up to $ 100. if you are not
              entirely satisfy with the product, you can send it back to us for
              a full refund of the printing cost only.
            </Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.hastaglabel}>#gotprint</Text>
          <Text style={styles.gridHeadMedLabel}>Design Inspo</Text>
          <View style={styles.flatListItem}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Image
                    style={{ width: "100%", height: 180, borderRadius: 5 }}
                    source={{ uri: "https://picsum.photos/700" }}
                  />
                </View>
              )}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </View>
          <Text style={styles.gridFooterLabel1}>
            Share your designs by tagging @GotPrint or use hastag
          </Text>
          <Text style={styles.gridFooterLabel2}>
            #GotPrint for a chance to be featured!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  bannerSection: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  banner1: {
    width: "95%",
    height: 80,
    borderRadius: 10,
    alignSelf: "center",
  },
  satisfactionHeadSection: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffff",
    borderColor: "#c0c4c1",
    borderWidth: 1,
    width: "100%",
    height: 100,
    padding: 15,
  },
  satisfactionContainer: {
    flex: 1,
    width: "100%"
  },
  labelSection: {
    padding: 15,
  },
  labelMedium: {
    fontSize: 16,
  },
  labelSmall: {
    fontSize: 12,
    color: "grey",
  },
  detailsLabel: {
    color: "#1481e0",
    fontSize: 12,
    marginTop: 7,
  },
  detailsSection: {
    display: "none",
    width: "95%",
  },
  detailsText: {
    fontSize: 9,
  },
  itemContainer: {
    width: "50%",
    height: 185,
    padding: 4,
    borderRadius: 30,
    marginTop: 4,
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: "lightblue",
    borderRadius: 30,
  },
  footerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
    marginTop: 10,
    marginBottom: 8,
    borderColor: "#c0c4c1",
    borderWidth: 0.5,
  },
  flatListItem: {
    borderRadius: 6,
    padding: 4,
  },
  hastaglabel: {
    color: "grey",
    marginTop: 20,
    fontSize: 10,
  },
  gridHeadMedLabel: {
    fontSize: 20,
    fontWeight: "500",
  },
  gridFooterLabel1: {
    fontSize: 11,
    paddingTop: 15,
    marginHorizontal: 10,
    color: "#363434",
  },
  gridFooterLabel2: {
    fontSize: 11,
    paddingBottom: 15,
    marginHorizontal: 10,
    color: "#363434",
  },
});
export default Featured;
