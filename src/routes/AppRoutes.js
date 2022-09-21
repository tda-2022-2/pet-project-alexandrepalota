import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import Home from "../screens/Home";
import Sessions from "../screens/Sessions";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Sessions" component={Sessions} />
        </Stack.Navigator>
    )
}