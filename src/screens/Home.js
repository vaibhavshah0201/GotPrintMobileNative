import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllProducts from "./Home/AllProducts";
import Featured from "./Home/Featured";

const Home = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#8cc63f",
        tabBarLabelStyle: { fontSize: 12 },
        // tabBarStyle: { backgroundColor: "powderblue" },
      }}
    >
      <Tab.Screen
        name="Featured"
        component={Featured}
        options={{ tabBarLabel: "Featured" }}
      />
      <Tab.Screen
        name="AllProducts"
        component={AllProducts}
        options={{ tabBarLabel: "All Products" }}
      />
    </Tab.Navigator>
  );
};

export default Home;
