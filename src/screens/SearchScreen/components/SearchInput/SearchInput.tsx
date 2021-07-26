import React from 'react';
import {View, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import SearchImage from '../../../../../assets/SearchImage';
import {fetchBooks} from '../../../../store/bookSlice';
import {styles} from './SearchInput.styles';

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleInput = (text: string) => {
    dispatch(fetchBooks(text));
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handleInput}
        style={styles.input}
        placeholder="Search"
      />
      <View style={styles.imageWrapper}>
        <SearchImage width={30} height={30} />
      </View>
    </View>
  );
};

export default SearchInput;
