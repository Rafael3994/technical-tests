import { getAllBooks } from '@/api/books';
import WrapperCustom from '@/components/WrapperCustom';
import { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export default function HomeScreen() {
  useEffect(() => {
    const books = getAllBooks();
    console.log(books);

  })

  return (
    <WrapperCustom>
      <View className="flex-1 items-center py-5">
        <Text className='h-28' style={styles.text}>Libros disponibles</Text>
      </View>
    </WrapperCustom>
  );

}

const styles = StyleSheet.create({
  text: {
    fontSize: RFValue(20),
    fontWeight: 'semibold',
  }
});