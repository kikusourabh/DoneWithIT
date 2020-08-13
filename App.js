import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import WlecomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import color from "./app/config/color";

export default function App() {
  //state
  const [people, setPeople] = useState([
    { name: "sourabh", id: "1" },
    { name: "rahul", id: "2" },
    { name: "velsi", id: "3" },
    { name: "akash", id: "4" },
    { name: "bhavesh", id: "5" },
    { name: "simit", id: "6" },
    { name: "ritika", id: "7" },
    { name: "soumen", id: "8" },
    { name: "nikhil", id: "9" },
    { name: "sreya", id: "10" },
    { name: "arpita", id: "11" },
    { name: "rohan", id: "12" },
  ]);
  const PersonItem = ({ item }) => (
    <Text style={styles.personContainer}>{item.name}</Text>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={3}
        data={people}
        renderItem={PersonItem}
        keyExtractor={(item) => item.id}
      />
      {/* <ScrollView>
        {people.map((person) => (
          <View key={person.key}>
            <Text style={styles.person}>{person.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  personContainer: {
    marginTop: 24,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    backgroundColor: color.secondary,
    fontSize: 16,
    justifyContent: "center",
  },
});
