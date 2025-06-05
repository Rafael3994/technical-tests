// import { Book } from '@/api/books';
// import { useBooksContext } from '@/api/context/books.context';
// import CardBook from '@/components/CardBook';
// import WrapperCustom from '@/components/WrapperCustom';
// import { useEffect, useState } from 'react';
// import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
// import { RFValue } from 'react-native-responsive-fontsize';

// export default function HomeScreen() {
//   const { ableBooksContext, setAbleBooksState } = useBooksContext();

//   const [books, setBooks] = useState<Book[]>([]);


//   useEffect(() => {
//     // Función para actualizar la orientación
//     console.log('DIMENSIONS');

//     const handleOrientationChange = () => {
//       const { width, height } = Dimensions.get('window');
//       console.log(width > height);

//       setIsLandscape(width > height); // Si el ancho es mayor que el alto, es horizontal
//     };

//     // Detectar la orientación inicial
//     handleOrientationChange();

//     // Agregar un listener para escuchar los cambios
//     const subscription = Dimensions.addEventListener('change', handleOrientationChange);

//     // Limpiar el listener al desmontar el componente
//     return () => subscription.remove();
//   }, []);

//   useEffect(() => {
//     setBooks(ableBooksContext);
//   }, [])

//   useEffect(() => {
//     setBooks(ableBooksContext);
//   }, [ableBooksContext])

//   const [isLandscape, setIsLandscape] = useState<boolean>(false);

//   return (
//     <WrapperCustom>
//       {
//         isLandscape ? (
//           <View></View>
//         )

//           :
//           (
//             <View>
//               <View style={{ height: 70, paddingVertical: 10 }}>
//                 <View className='flex-1 items-center justify-center'>
//                   <Text style={[styles.text, { fontSize: RFValue(16) }]}>Libros disponibles</Text>
//                 </View>
//               </View>


//               <FlatList
//                 style={{ flexGrow: 1, paddingHorizontal: 15 }}
//                 data={books}
//                 ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
//                 keyExtractor={(book) => book.ISBN}
//                 ListEmptyComponent={
//                   <View className='flex-1 items-center justify-center'>
//                     <Text className='font-semibold'>No hay libros disponibles</Text>
//                   </View>
//                 }
//                 renderItem={({ item: book }) => (
//                   <CardBook book={book} />
//                 )}
//               />
//             </View>
//           )
//       }


//     </WrapperCustom>

//   )

// }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: RFValue(20),
//     fontWeight: 'bold',
//     letterSpacing: 3,
//   },
// });

import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

export default function OrientationResponsiveScreen() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={styles.container}>
      {isLandscape ? (
        <View style={styles.landscapeContainer}>
          <View style={styles.sidebar}>
            <Text style={styles.sidebarText}>Menú Lateral</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>Contenido Principal</Text>
          </View>
        </View>
      ) : (
        <View style={styles.portraitContainer}>
          <Text style={styles.contentText}>Vista Vertical</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  landscapeContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  portraitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebar: {
    width: '30%',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebarText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 20,
  },
});
