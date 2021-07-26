import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {selectAll} from '../../../store/bookSlice';
import renderItem from './renderItem/renderItem';
import LoadingIndicator from '../../../shared/LoadingIndicator';
import keyExtractor from '../../../shared/keyExtractor';

const Books = () => {
  const {loading} = useSelector((state: RootState) => state.books);
  const books = useSelector(selectAll);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <FlatList
      data={books}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshing={true}
    />
  );
};

export default Books;
