import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Nearbyscreen from './src/Screens/Contact'
import PendingScreen from './src/Screens/Pending/Pending'

function ContactScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact</Text>
    </View>
  );
}
function MessageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Message</Text>
    </View>
  );
}
function ShakeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Shake</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Contact"
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray' }} >
        
        <Tab.Screen name="Contact" component={ContactScreen} options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <Icon name="hashtag" size={30} color="grey" />
            ),
        }} />
        <Tab.Screen name="Message" component={MessageScreen} options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ color, size }) => (
            <Icon name="comment" size={30} color="grey" />
            ),
        }} />
        <Tab.Screen name="Shake" component={ShakeScreen} options={{
          tabBarLabel: 'Shake',
          tabBarIcon: ({ color, size }) => (
            <Icon name="phone" size={30} color="grey" />
            ),
        }}/>
        <Tab.Screen name="Nearby" component={Nearbyscreen} options={{
          tabBarLabel: 'Nearby',
          tabBarIcon: ({ color, size }) => (
            <Icon name="location-arrow" size={30} color="grey" />
            ),
        }} />
        <Tab.Screen name="Pending" component={PendingScreen} options={{
          tabBarLabel: 'Pending',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" size={30} color="grey" />
            ),
        }}/>
      </Tab.Navigator>
      </NavigationContainer>
  );
}
