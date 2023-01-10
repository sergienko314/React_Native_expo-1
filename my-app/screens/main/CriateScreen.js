import { StyleSheet, Text, View } from "react-native";

const CriateScreen = () => {
  return (
    <View style={styles.div}>
      <Text>Criate Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  div: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CriateScreen;
