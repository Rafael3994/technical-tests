module.exports = {
  preset: 'jest-expo', // Usamos 'jest-expo' para proyectos Expo
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest' // Transformamos los archivos con babel-jest
  },
  testEnvironment: 'node', // Usamos el entorno de Node para las pruebas
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Extensiones de los archivos que Jest reconocerá
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js' // Si usas react-native-gesture-handler
  ]
};
