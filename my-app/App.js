import { useRoute } from "./routes/router";
import { NavigationContainer } from "@react-navigation/native";
const App = () => {
  const routing = useRoute(false);
  return <NavigationContainer>{routing}</NavigationContainer>;
};
export default App;
