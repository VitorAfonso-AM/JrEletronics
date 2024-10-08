import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons"
import Home from "src/screens/Home";
import New from "src/screens/New";

const Tab = createBottomTabNavigator();


export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: "Home"
                }}
            />
            <Tab.Screen
                name="new"
                component={New}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: "Novo"
                }}
            />
        </Tab.Navigator>
    )
}