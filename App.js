import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorizeSquare from "./src/screens/ColorizeSquare";
import ColorizeSquareReducer from "./src/screens/ColorizeSquareReducer";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Components: ComponentsScreen,
    Counter: CounterScreen,
    Home: HomeScreen,
    Image: ImageScreen,
    List: ListScreen,
    Color: ColorScreen,
    ColorizeSquare: ColorizeSquare,
    ColorizeSquareReducer: ColorizeSquareReducer,
    Text: TextScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learn React",
    },
  }
);

export default createAppContainer(navigator);
