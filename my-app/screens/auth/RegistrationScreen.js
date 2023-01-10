import { useCallback, useEffect, useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

export default function RegistrationScreen({ navigation }) {
  const formInitialState = {
    email: "",
    password: "",
  };
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [formChange, setFormChange] = useState(formInitialState);
  const { height, width } = useWindowDimensions();
  const newWidth = width - 80;

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const [fontsLoaded] = useFonts({
    "Prompt-Regular": require("../../assets/Fonts/Prompt-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={() => keyboardHide()}>
      <View onLayout={onLayoutRootView} style={styles.container}>
        <ImageBackground
          blurRadius={2}
          style={styles.dgImg}
          source={require("../../assets/Registration.jpeg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 50 : 150,
                width: newWidth,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerText}>Hellow World</Text>
                <Text style={styles.headerText}>Nise to see uoy again</Text>
              </View>
              <View style={styles.InputContainer}>
                <Text style={styles.title}>USERNAME</Text>
                <TextInput
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  onEndEditing={() => setIsShowKeyboard(false)}
                  onChangeText={(value) =>
                    setFormChange((prev) => ({ ...prev, email: value }))
                  }
                />
              </View>
              <View style={styles.InputContainer}>
                <Text style={styles.title}>LOGIN</Text>
                <TextInput
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  onEndEditing={() => setIsShowKeyboard(false)}
                  onChangeText={(value) =>
                    setFormChange((prev) => ({ ...prev, email: value }))
                  }
                />
              </View>
              <View style={styles.InputContainer}>
                <Text style={styles.title}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  onEndEditing={() => setIsShowKeyboard(false)}
                  onChangeText={(value) =>
                    setFormChange((prev) => ({ ...prev, password: value }))
                  }
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => keyboardHide()}
              >
                <Text style={styles.btnText}>SIGN IN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                title="LOGIN"
                style={styles.btn}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.btnText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dgImg: {
    flex: 1,

    // justifyContent: "center",
    justifyContent: "flex-end",
    // resizeMode: "cover",
    alignItems: "center",
  },
  h2: {
    fontSize: 28,
    marginBottom: 15,
    // fontFamily: "Prompt-Regular",
    borderRadius: 20,
  },
  title: {
    fontFamily: "Prompt-Regular",
    fontSize: 20,
    marginBottom: 5,
  },
  form: {
    // marginHorizontal: 804,
    // flex: 1,
    width: "100%",
  },
  InputContainer: {
    marginBottom: 10,
    // flex: 1,
    // gap: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    // minWidth: "70%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 5,
  },
  btn: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    // width: "80%",
    // marginHorizontal: "auto",
    paddingVertical: 5,
    marginTop: 20,
    backgroundColor: "hsl(206,100%,52%)",
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
  },
  header: {
    marginBottom: 150,
    marginTop: 150,
  },
  headerText: {
    textAlign: "center",
    fontSize: 28,
    fontFamily: "Prompt-Regular",
    marginBottom: 15,
    // color: "white",
    borderRadius: 20,
  },
  navLink: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 5,
    marginTop: 100,
    color: "hsl(206,100%,52%)",
  },
});
