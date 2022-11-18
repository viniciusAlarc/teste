import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Task from "./src/pages/task";
import Detalhes from "./src/pages/detalhes";
import NovaTask from "./src/pages/novaTask";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen
        name="Task"
        component={Task}
        options={{
          headerTintColor: "#f92e6a"
        }}
        />

        <Stack.Screen
        name="Nova Task"
        component={NovaTask}
        options={{
          headerTintColor: "#f92e6a"
        }}
        />

        <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          headerTintColor: "#f92e6a"
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



