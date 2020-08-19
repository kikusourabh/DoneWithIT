import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import { globalStyle } from "../config/Styles";
import { FlatList } from "react-native-gesture-handler";

function TabHome() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const itemRender = ({ item }) => {
    return (
      <View>
        <Image
          style={{ height: 100, width: 100 }}
          source={{ uri: item.avatar }}
        />
        <Text>
          {item.first_name} {item.last_name}
        </Text>
        <Text>{item.email}</Text>
      </View>
    );
  };
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  });
  return (
    <View style={[globalStyle.Background, styles.container]}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={itemRender}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
export default TabHome;
