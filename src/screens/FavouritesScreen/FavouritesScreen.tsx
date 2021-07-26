import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import keyExtractor from '../../shared/keyExtractor';
import {RootState} from '../../store/store';
import renderItem from '../../shared/renderItem';

const FavouritesScreen = () => {
  const {favourites} = useSelector((state: RootState) => state.favourites);
  const favouritesArr = Object.values(favourites);

  return (
    <FlatList
      data={favouritesArr}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshing={true}
    />
  );
};

export default FavouritesScreen;
