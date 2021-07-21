import React from 'react';
import { View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import SearchImage from '../../../../../assets/SearchImage';
import { fetchBooks } from '../../../../store/bookSlice';
import { styles } from './SearchInput.styles';

interface Props {
  handleInput: React.Dispatch<React.SetStateAction<string>>;
  title: string;
};

const SearchInput = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.wrapper}>
      <TextInput
        onChangeText={(text) => props.handleInput(text)}
        style={styles.input}
        placeholder='Search'
      />
      <TouchableOpacity 
        onPress={() => dispatch(fetchBooks(props.title))}
      >
        <SearchImage
          width={30}
          height={30}
        />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput;
