const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });

config.transformer = {
  ...config.transformer,
  exclude: /.*\.(test|spec)\.(js|ts|tsx)$/ // Ignorar archivos de prueba con esas extensiones
};
