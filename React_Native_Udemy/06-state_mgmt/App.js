import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen"
import ImageScreen from "./src/screens/ImageScreen"
import CounterScreen from "./src/screens/CounterScreen"
import CounterScreen_reducer from "./src/screens/CounterScreen_reducer";
import ColorScreen from "./src/screens/ColorScreen"
import SquareScreen  from "./src/screens/SquareScreen"
import SquareScreen_reducer from "./src/screens/SquareScreen_reducer"
import SquareScreen_reducer_community from "./src/screens/SquareScreen_reducer_community";
import TextScreen from "./src/screens/TextScreen";
import PasswordScreen from "./src/screens/PasswordScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Square_reducer: SquareScreen_reducer,
    Square_reducer_community: SquareScreen_reducer_community,
    Counter_reducer: CounterScreen_reducer,
    Text: TextScreen,
    Password: PasswordScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
