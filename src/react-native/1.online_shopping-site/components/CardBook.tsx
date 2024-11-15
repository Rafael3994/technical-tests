
import { Book } from "@/api/books";
import { useBooksContext } from "@/api/books.context";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const CardBook = ({ book, remove }: { book: Book, remove?: boolean }) => {

    const { addBookInReadingBooks, removeBookInReadingBooks } = useBooksContext();

    return (
        <View style={{
            backgroundColor: '#FFF', borderColor: 'black', borderWidth: 1, gap: 4, marginVertical: 1, paddingVertical: 10, paddingHorizontal: 15,

        }}>
            <Text style={styles.title}>{book.title}</Text>
            <View className="flex-1 items-center justify-center py-5">
                <View className="h-56 w-40">
                    <Image
                        source={{ uri: book.cover }}
                        className="border-2"
                        style={{
                            borderRadius: 10,
                            height: '100%', width: '100%',
                            marginVertical: 10,
                            resizeMode: 'stretch',
                        }}
                    />
                </View>
            </View>

            <Text className='text-center py-3'>{book.synopsis}</Text>


            {
                remove ? (
                    <View className="self-center" >
                        <TouchableOpacity
                            onPress={() => removeBookInReadingBooks(book)}
                            className='w-32 border-2 py-3 px-4 rounded-2xl'>
                            <Text style={styles.textButton}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                ) :
                    (
                        <View style={{ marginVertical: 10, flexDirection: 'row', gap: 4, justifyContent: 'space-around' }}>
                            <TouchableOpacity className='w-32 border-2 py-3 px-4 rounded-2xl '>
                                <Text style={styles.textButton}>Ver detalles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => addBookInReadingBooks(book)}
                                className='w-32 border-2 py-3 px-4 rounded-2xl'>
                                <Text style={styles.textButton}>Añadir</Text>
                            </TouchableOpacity>
                        </View>
                    )
            }
        </View>
    )
}

export default CardBook;

const styles = StyleSheet.create({
    title: {
        fontSize: RFValue(13),
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
    },
    textButton: {
        fontSize: RFValue(10),
        textAlign: 'center',
    }
});