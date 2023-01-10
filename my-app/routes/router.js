import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProfileScreen from "../screens/main/ProfileScreen";
import CriateScreen from "../screens/main/CriateScreen";
import PostsScreen from "../screens/main/PostsScreen";

import RegistrationScreen from "../screens/auth/RegistrationScreen";
import LoginScreen from "../screens/auth/LoginScreen";

const MainTab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const useRoute = (isAuth) => {
  if (isAuth)
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </Stack.Navigator>
    );
  return (
    <MainTab.Navigator
      barStyle={{
        backgroundColor: "#694fad",
        // display: "flex",
        height: 84,
      }}
      screenOptions={{
        tabBarLabel: false,
        // tabBarColor: "#f0edf6",
      }}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="postage-stamp"
              size={24}
              color={color}
            />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />

      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons name="post-add" size={24} color={color} />
          ),
        }}
        name="Criate"
        component={CriateScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
        name="Profil"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
// export default useRoute;
