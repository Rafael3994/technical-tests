import { Book } from "@/api/books";
import CardBook from "@/components/CardBook";
import WrapperCustom from "@/components/WrapperCustom"
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image } from "react-native"

const BookDetailsScreen = () => {

    const { book } = useLocalSearchParams();
    const _book: Book = JSON.parse(book as string);

    return (
        <WrapperCustom>
            <View className="flex-1 items-center py-8">
                <Text>{_book.title}</Text>
                <Image source={{ uri: _book.cover }} className="h-2/6 w-6/12 py-5" style={{ resizeMode: 'contain' }} />
                <View className="mx-16 py-5">
                    <Text className="text-center">{_book.synopsis}</Text>
                    <View className="py-5">
                        <Text className="text-center self-start">
                            <Text className="font-bold text-xl">Escritor: </Text>
                            {_book.author.name}
                        </Text>
                        <Text className="self-start">
                            <Text className="font-bold text-xl">Otros libros: </Text>
                            {_book.author.otherBooks.join(', ')}</Text>
                    </View>
                </View>
            </View>
        </WrapperCustom>
    )
}

export default BookDetailsScreen;