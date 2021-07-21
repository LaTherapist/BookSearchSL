import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import FavouritesScreen from './src/screens/FavouritesScreen/FavouritesScreen';
import LikeImage from './assets/LikeImage';
import SearchImage from './assets/SearchImage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: () => {
              if (route.name === 'Favourites') {
                return (
                  <LikeImage />
                )
              };
              if (route.name === 'Search') {
                return (
                  <SearchImage />
                )
              }
            }
          })}
        >
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Favourites" component={FavouritesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
