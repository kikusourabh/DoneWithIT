import React, { useState } from "react";

import {
  Modal,
  View,
  Alert,
  StyleSheet,
  Button,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableHighlightComponent,
  TouchableNativeFeedback,
  Dimensions,
  Image,
} from "react-native";
import { colors } from "react-native-elements";
import color from "./app/config/color";

export default function App() {
  const [ModalVisible, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        visible={ModalVisible}
        transparent={true}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.ModalContainer}>
          <View style={styles.ModalInnerContainer}>
            <TouchableOpacity onPress={() => setModal(false)}>
              <Image
                style={styles.CloseImage}
                source={require("./app/assets/close.png")}
              />
            </TouchableOpacity>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ActivityIndicator size="large" color="#ef540d" />

              <Text style={styles.ModalText}>
                Hi, this is basic modal of react native
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <Button title="show model" onPress={() => setModal(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalContainer: {
    flex: 1,
    justifyContent: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  ModalInnerContainer: {
    flex: 0.2,
    flexDirection: "column",
    margin: 20,
    borderRadius: 10,
    padding: 20,
    backgroundColor: color.blackgrey,
  },
  ModalText: {
    color: color.white,
  },
  CloseImage: {
    height: 20,
    width: 20,
    alignSelf: "flex-end",
  },
  closeButton: {
    marginTop: 20,
  },
});
