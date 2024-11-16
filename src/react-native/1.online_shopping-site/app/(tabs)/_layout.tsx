import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarLabelStyle: { fontSize: RFValue(10), marginTop: RFValue(2) },
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              backgroundColor: 'transparent',
              paddingBottom: insets.bottom,
            },
            android: {
              paddingBottom: insets.bottom,
              height: insets.bottom + 60,
            },
            default: {
              height: 60,
            },
          }),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Libros disponibles',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="book" color={color} />,
          }}
        />
        <Tabs.Screen
          name="reading-list-screen"
          options={{
            title: 'Lista de Lectura',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="star" color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
