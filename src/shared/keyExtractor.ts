import {BookData} from '../store/BookData.interface';

const keyExtractor = (item: BookData) => {
  return item.id;
};

export default keyExtractor;
