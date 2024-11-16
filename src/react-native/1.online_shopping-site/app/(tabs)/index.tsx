import { Book, getAllBooks } from '@/api/books';
import { useBooksContext } from '@/api/context/books.context';
import useBooksAsyncStorage from '@/api/asyncStorage/useBooks.localStorage';
import CardBook from '@/components/CardBook';
import WrapperCustom from '@/components/WrapperCustom';
import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function HomeScreen() {
  const { ableBooksContext, setAbleBooksState } = useBooksContext();

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(ableBooksContext);
  }, [])

  useEffect(() => {
    setBooks(ableBooksContext);
  }, [ableBooksContext])

  return (
    <WrapperCustom>
      <View style={{ height: 70, paddingVertical: 10 }}>
        <View className='flex-1 items-center justify-center'>
          <Text style={[styles.text, { fontSize: RFValue(16) }]}>Libros disponibles</Text>
        </View>
      </View>

      {
        books && books.length > 0 && (
          <FlatList
            style={{ flexGrow: 1, paddingHorizontal: 15 }}
            data={books}
            ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
            keyExtractor={(book) => book.ISBN}
            renderItem={({ item: book }) => (
              <CardBook book={book} />
              // <View>
              //   <Text>{book.cover}</Text>
              //   <Image  source={{ uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg' }}></Image>
              // </View>
            )}
          />
        )
      }

    </WrapperCustom>

  )

}

const styles = StyleSheet.create({
  text: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    letterSpacing: 3,
  },
});