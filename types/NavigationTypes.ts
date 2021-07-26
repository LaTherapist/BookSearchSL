import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BookData} from '../src/store/BookData.interface';

export type RootTabParamList = {
  Search: undefined;
  Favourites: undefined;
};

export type RootStackParamList = {
  Search?: undefined;
  Favourites?: undefined;
  Description: {item: BookData};
};

export type DescriptionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Description'
>;

export type DescriptionScreenRouteProp = RouteProp<
  RootStackParamList,
  'Description'
>;
