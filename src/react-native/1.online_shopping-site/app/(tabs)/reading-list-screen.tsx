import { StyleSheet, Image, Text, View, FlatList, ActivityIndicator } from 'react-native';
import WrapperCustom from '@/components/WrapperCustom';
import { RFValue } from 'react-native-responsive-fontsize';
import CardBook from '@/components/CardBook';
import { useContext, useEffect, useState } from 'react';
import { BooksContext, useBooksContext } from '@/api/context/books.context';
import { Book } from '@/api/books';

export default function ReadinListScreen() {
  const { readingListContext } = useBooksContext();
  const [readingList, setReadingList] = useState<Book[]>();

  useEffect(() => {
    if (readingListContext) {
      setReadingList(readingListContext);
    }
  }, [readingListContext]);

  return (
    <WrapperCustom>
      <View style={{ height: 70, paddingVertical: 10 }}>
        <View className='flex-1 items-center justify-center'>
          <Text style={[styles.text, { fontSize: RFValue(16) }]}>Lista de Lectura</Text>
        </View>
      </View>

      <FlatList
        style={{ flexGrow: 1, paddingHorizontal: 15 }}
        data={readingList}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
        keyExtractor={(book) => book.ISBN}
        ListEmptyComponent={
          <View className='flex-1 items-center justify-center'>
            <Text className='font-semibold'>No hay libros en la lista de lectura</Text>
          </View>
        }
        renderItem={({ item: book }) => (
          <CardBook book={book} remove />
        )}
      />
    </WrapperCustom>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    letterSpacing: 3,
  },
});