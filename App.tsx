import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import FavouritesScreen from './src/screens/FavouritesScreen/FavouritesScreen';
import DescriptonScreen from './src/screens/DescriptonScreen/DescriptonScreen';
import LikeImage from './assets/LikeImage';
import SearchImage from './assets/SearchImage';
import { RootStackParamList, RootTabParamList } from './types/NavigationTypes';

const SearchStack = createStackNavigator<RootStackParamList>();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <FavouritesStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Description" component={DescriptonScreen} />
    </SearchStack.Navigator>
  );
};

const FavouritesStack = createStackNavigator<RootStackParamList>();

const FavouritesStackScreen = () => {
  return (
    <FavouritesStack.Navigator>
      <SearchStack.Screen name="Favourites" component={FavouritesScreen} />
      <FavouritesStack.Screen name="Description" component={DescriptonScreen} />
    </FavouritesStack.Navigator>
  );
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: () => {
              if (route.name === 'Favourites') {
                return <LikeImage />;
              }
              if (route.name === 'Search') {
                return <SearchImage />;
              }
            },
          })}>
          <Tab.Screen name="Search" component={SearchStackScreen} />
          <Tab.Screen name="Favourites" component={FavouritesStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
