import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.div}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    flex: 1,

    // justifyContent: ,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
