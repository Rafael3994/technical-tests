# Tareas para Implementar el Guardado de Datos en el Segundo Plano

### 1. Instalar y Configurar `AsyncStorage`
- [ ] Asegúrate de que `@react-native-async-storage/async-storage` esté instalado en tu proyecto.
- [ ] Importa `AsyncStorage` en el archivo donde manejarás la lista de lectura.

### 2. Configurar el Estado de la Lista de Lectura
- [ ] Define un estado para la lista de lectura en el componente principal de tu app o en el contexto de tu aplicación, dependiendo de cómo estructures tu estado global.
- [ ] Inicializa la lista de lectura con un array vacío o con datos de ejemplo para pruebas iniciales.

### 3. Crear Funciones para Guardar y Cargar la Lista de Lectura
- [ ] Implementa una función `saveReadingList` que guarde el estado actual de la lista de lectura en `AsyncStorage`.
- [ ] Dentro de `saveReadingList`, convierte la lista a JSON usando `JSON.stringify` antes de guardarla en `AsyncStorage`.
- [ ] Implementa una función `loadReadingList` para cargar la lista de lectura desde `AsyncStorage` cuando la aplicación se inicie.
- [ ] Dentro de `loadReadingList`, utiliza `JSON.parse` para convertir los datos de vuelta a formato de array después de cargarlos de `AsyncStorage`.

################################################################################
### 4. Configurar `AppState` para Detectar Cambios de Estado de la Aplicación
- [ ] Importa `AppState` desde React Native en el archivo de tu componente principal.
- [ ] Crea un estado local para almacenar el estado actual de la aplicación (por ejemplo, `const [appState, setAppState] = useState(AppState.currentState);`).
- [ ] Configura un listener que observe los cambios en `AppState` y ejecute una función de actualización cuando el estado cambie.

### 5. Implementar la Función para Detectar el Cambio a Segundo Plano
- [ ] Define una función `handleAppStateChange` que maneje los cambios de estado de la aplicación.
- [ ] Dentro de `handleAppStateChange`, verifica si `AppState` cambió a `background` (segundo plano).
- [ ] Si `AppState` es `background`, llama a `saveReadingList` para guardar la lista de lectura.

### 6. Configurar el Listener para Cambios en `AppState`
- [ ] En el `useEffect` principal del componente, configura el listener de `AppState` para que ejecute `handleAppStateChange` cada vez que el estado cambie.
- [ ] En el mismo `useEffect`, limpia el listener al desmontar el componente para evitar fugas de memoria.
####################################################

### 7. Probar la Funcionalidad
- [ ] Prueba la aplicación agregando algunos elementos a la lista de lectura.
- [ ] Sal de la aplicación (o minimízala) y vuelve a abrirla para asegurarte de que los datos se guarden correctamente cuando pasa al segundo plano.
- [ ] Verifica que la lista de lectura persiste después de cerrar y volver a abrir la aplicación.

### 8. Depurar y Refinar el Código
- [ ] Asegúrate de agregar manejo de errores en `saveReadingList` y `loadReadingList` para manejar fallos en el guardado/carga de datos de `AsyncStorage`.
- [ ] Agrega logs o console statements en puntos clave para verificar que `handleAppStateChange` se está ejecutando correctamente y que los datos se están guardando cuando corresponde.
- [ ] Realiza una limpieza general del código y elimina cualquier código de prueba o logs antes de finalizar.

