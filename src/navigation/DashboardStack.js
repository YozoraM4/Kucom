import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Component
import Dashboard from '@src/screens/Dashboard';

const Stack = createNativeStackNavigator();
const DashboardStack = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
  )
}

export default DashboardStack